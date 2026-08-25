/**
 * Production smoke test.
 *
 * Boots the built app with `next start` on a free port, then checks that every
 * public route renders, metadata routes exist, unknown paths 404, and the
 * security headers from next.config.ts are applied.
 *
 * Run `npm run build` first (or `npm run check`, which does everything).
 */
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { createServer } from "node:net";
import { dirname, resolve } from "node:path";
import { after, before, test } from "node:test";
import { setTimeout as sleep } from "node:timers/promises";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const routes = [
  ["/", "Arthrosamid® at Joint Care Clinics"],
  ["/arthrosamid", "About Arthrosamid®"],
  ["/joint-care-clinics", "Why Joint Care Clinics"],
  ["/knee-arthritis", "Knee Arthritis"],
  ["/working-lives", "Working Lives"],
  ["/our-clinics", "Our Clinics"],
  ["/privacy-policy", "Privacy Policy"],
  ["/cookie-policy", "Cookie Policy"],
  ["/terms-and-conditions", "Terms and Conditions"],
  ["/medical-disclaimer", "Medical Disclaimer"],
];

let server;
let baseUrl;

async function freePort() {
  return new Promise((resolvePort, reject) => {
    const probe = createServer();
    probe.once("error", reject);
    probe.listen(0, "127.0.0.1", () => {
      const { port } = probe.address();
      probe.close(() => resolvePort(port));
    });
  });
}

async function waitForServer(url, timeoutMs = 60_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.status < 500) return;
    } catch {
      // not up yet
    }
    await sleep(250);
  }
  throw new Error(`Server at ${url} did not become ready in ${timeoutMs}ms`);
}

before(async () => {
  assert.ok(
    existsSync(resolve(projectRoot, ".next", "BUILD_ID")),
    "No production build found. Run `npm run build` before `npm test`.",
  );

  const port = await freePort();
  baseUrl = `http://127.0.0.1:${port}`;

  server = spawn(
    process.execPath,
    [resolve(projectRoot, "node_modules/next/dist/bin/next"), "start", "-p", String(port), "-H", "127.0.0.1"],
    { cwd: projectRoot, stdio: ["ignore", "pipe", "pipe"], env: { ...process.env, NODE_ENV: "production" } },
  );

  let output = "";
  server.stdout.on("data", (chunk) => (output += chunk));
  server.stderr.on("data", (chunk) => (output += chunk));
  server.on("exit", (code, signal) => {
    // We stop the server ourselves with SIGTERM in `after`; only report real crashes.
    if (signal === null && code !== null && code !== 0) {
      console.error(`next start exited with ${code}\n${output}`);
    }
  });

  await waitForServer(`${baseUrl}/`);
});

after(() => {
  server?.kill("SIGTERM");
});

for (const [path, expectedTitle] of routes) {
  test(`GET ${path} renders with expected title`, async () => {
    const response = await fetch(`${baseUrl}${path}`, { headers: { accept: "text/html" } });
    assert.equal(response.status, 200, `${path} should return 200`);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html/i);

    const html = await response.text();
    const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] ?? "";
    assert.ok(title.includes(expectedTitle), `${path}: expected title to include "${expectedTitle}", got "${title}"`);
    assert.match(html, /id="main-content"/, `${path} should render main content`);
  });
}

test("unknown route returns the 404 page", async () => {
  const response = await fetch(`${baseUrl}/this-page-does-not-exist`, { headers: { accept: "text/html" } });
  assert.equal(response.status, 404);
  assert.match(await response.text(), /Page not found/i);
});

test("robots.txt and sitemap.xml are served", async () => {
  const robots = await fetch(`${baseUrl}/robots.txt`);
  assert.equal(robots.status, 200);
  const robotsText = await robots.text();
  assert.match(robotsText, /Allow: \//);
  assert.match(robotsText, /Sitemap: https?:\/\/.+\/sitemap\.xml/);

  const sitemap = await fetch(`${baseUrl}/sitemap.xml`);
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  for (const [path] of routes) {
    assert.ok(xml.includes(`${path === "/" ? "" : path}</loc>`), `sitemap should list ${path}`);
  }
});

test("security headers are applied", async () => {
  const response = await fetch(`${baseUrl}/`);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin");
  assert.match(response.headers.get("strict-transport-security") ?? "", /max-age=\d+/);
  assert.equal(response.headers.get("x-powered-by"), null, "x-powered-by should be disabled");
});

test("static assets referenced by the home page exist", async () => {
  const html = await (await fetch(`${baseUrl}/`)).text();
  const assets = new Set(html.match(/\/[A-Za-z0-9_-]+\.(?:webp|png|svg)/g) ?? []);
  assert.ok(assets.size > 0, "home page should reference at least one asset");
  for (const asset of assets) {
    const response = await fetch(`${baseUrl}${asset}`, { method: "HEAD" });
    assert.equal(response.status, 200, `${asset} should be served`);
  }
});
