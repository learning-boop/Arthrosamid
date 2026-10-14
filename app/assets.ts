/**
 * Central image asset configuration.
 * All homepage image paths and alt text are managed here.
 *
 * Images labelled "illustrative" are stock/generic photography
 * and do not depict RamaKrishna Rachaputi or actual Arthrosamid procedures
 * unless explicitly stated.
 *
 * TODO: Replace hero and portrait with genuine photographs of RamaKrishna
 * once available.
 */

export const images = {
  hero: {
    src: "/clinical-ultrasound.webp",
    alt: "Clinician performing a knee ultrasound scan on a patient in a modern clinic (illustrative image — placeholder for RamaKrishna Rachaputi)",
    width: 720,
    height: 540,
  },
  heroBanners: [
    {
      desktop: "/01_Knee/Images/banner/Grandfather and grandchildren in autumn park-1.png",
      mobile: "/01_Knee/Images/banner/Grandfather Watching Grandchildren Play-2.png",
      alt: "The moments your knee is keeping you from — grandfather watching grandchildren play.",
    },
    {
      desktop: "/01_Knee/Images/banner/A Thoughtful Pause on the Stairs.png",
      mobile: "/01_Knee/Images/banner/Morning steps on the stairs.png",
      alt: "Stairs. Chairs. The first steps in the morning.",
    },
    {
      desktop: "/01_Knee/Images/banner/Personalized Knee Care Consultation.png",
      mobile: "/01_Knee/Images/banner/Personalized knee consultation in a bright clinic.png",
      alt: "Assessed individually. Delivered by a Consultant Physiotherapist & MSK Sonographer.",
    },
  ],
  portrait: {
    src: "/arthrosamid-detail-hero.webp",
    alt: "Clinician demonstrating injection technique on a knee joint model (illustrative image — placeholder for RamaKrishna Rachaputi portrait)",
    width: 520,
    height: 650,
  },
  kneePain: {
    src: "/01_Knee/Images/Ff8OXZd9HRMZS3OqjRq0rw9CbuXfpbFH5D6lHy357OwIsd58mMglReto-fl6gdNOV_yF7NIS6aqnyK1u_wo4O0BrdjAnHSxXidME7laDSPHVyHODffcnUGYCcafyY5bDla4FCIA6ELTw1kRX8xusQ9lNAdBoklAcoLDlCldzO43uRJorJq_-ign9uVX2P3--.webp",
    alt: "3D anatomical comparison of a healthy knee joint and an osteoarthritic knee joint, showing cartilage loss and joint deterioration",
    width: 600,
    height: 600,
  },
  product: {
    src: "/01_Knee/Images/orange-white-pharma-packaging.webp",
    alt: "Arthrosamid product packaging — orange and white box showing 6 x 1 mL, manufactured by Contura",
    width: 560,
    height: 480,
  },
  productSyringe: {
    src: "/01_Knee/Images/Arthrosamid_injection_material_202604181751-1 (1).webp",
    alt: "Arthrosamid syringe and vial being prepared in a clinical setting, showing the 2.5% Polyacrylamide Hydrogel labelling",
    width: 640,
    height: 360,
  },
  productInjection: {
    src: "/01_Knee/Images/Arthrosamid_injection_material_202604181751 (1).webp",
    alt: "Clinician holding an Arthrosamid syringe next to a patient's knee in a clinical environment, with the Arthrosamid label clearly visible",
    width: 640,
    height: 360,
  },
  osteoarthritisDiagram: {
    src: "/01_Knee/Images/Osteoarthritis_CSCL_1_e3dae7264c.webp",
    alt: "Anatomical diagram comparing a normal knee joint with a knee affected by osteoarthritis, showing cartilage loss, bone spurs, narrowed joint space and thickened synovium",
    width: 640,
    height: 360,
  },
  journeyAssessment: {
    src: "/01_Knee/Images/K06_Knee_physiotherapy.jpg",
    alt: "Close-up of a clinician's hands assessing a patient's knee during a physical examination",
    width: 600,
    height: 400,
  },
  journeyPreparation: {
    src: "/arthrosamid-preparation-feature.webp",
    alt: "Clinician in gloves preparing an injection tray beside a knee joint model in a clinical setting (illustrative image)",
    width: 600,
    height: 400,
  },
  journeyInjection: {
    src: "/01_Knee/Images/u-Qa8cuKjDY-UwhQWfHhHLeR9OCsvR6-Y9tRtbKOPS76e2Lddgmsa5UfrnDdgg9MtTlz9smFrYl5GRNxga4X3k-s8mkQLIIp211ajOFZS1FLJSsnTEFfcKnz4v-tSN3EKRxb-Gk8dHZnpkxhGCkWvgG-BbvGpAdpHOLc5AdG0eYv7D1BO3JROEFfkkheFUE0.webp",
    alt: "Close-up of an ultrasound-guided knee injection showing the ultrasound probe and syringe positioned on the knee",
    width: 600,
    height: 400,
  },
  journeyAftercare: {
    src: "/hero-active-adults.webp",
    alt: "A couple walking together outdoors along a coastal path, representing active recovery after treatment",
    width: 600,
    height: 400,
  },
  careSection: {
    src: "/joint-care-consultation-feature.webp",
    alt: "Clinician explaining a knee joint model to a seated patient during a consultation (illustrative image)",
    width: 640,
    height: 480,
  },
  logo: {
    src: "/joint-care-logo-mark.webp",
    alt: "Joint Care Clinics logo",
    width: 40,
    height: 40,
  },
} as const;
