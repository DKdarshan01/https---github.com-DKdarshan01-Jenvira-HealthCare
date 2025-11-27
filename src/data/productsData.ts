// ------------------------------
// IMPORT IMAGES
// ------------------------------
// Correct image imports
import folviraDha from "../assets/folvira-dha.jpg";
import calcijen from "../assets/calcijen.jpg";
import jefinacSp from "../assets/jefinac-sp.jpg";
import jenferXt from "../assets/jenfer-xt.jpg";
import jenvico from "../assets/jenvico.jpg";

// ------------------------------
// PRODUCT DATA
// ------------------------------
export const productsData = [
  {
    id: "folvira-dha",
    name: "FOLVIRA DHA",
    category: "Preconception, Pregnancy & Lactation",
    dosage: "",
    description:
      "Fulfils extraordinary demand in pregnancy, lactation and fetal growth.",
    fullDescription:
      "FOLVIRA DHA supports fetal development, prevents pregnancy complications, and regulates homocysteine levels. It enhances fetal bone mineralization and improves maternal bone mass.",
    color: "from-rose-500 to-pink-500",
    benefits: [
      "Reduces risk of preterm birth, pre-eclampsia & GDM",
      "Regulates embryogenesis & increases birth weight",
      "Enhances bone mineralization",
      "Supports fetal growth & development"
    ],
    image: folviraDha,
    detailedBenefits: [
      {
        title: "Pregnancy Support",
        description:
          "Prevents pregnancy complications by normalizing homocysteine levels."
      },
      {
        title: "Fetal Growth",
        description:
          "Improves fetal bone mineralization and supports healthy baby development."
      },
      {
        title: "Maternal Health",
        description:
          "Enhances maternal bone mass and supports overall pregnancy health."
      }
    ],
    ingredients:
      "L-Methylfolate 570 mcg + Pyridoxal-5-Phosphate 1.9 mg + Cyanocobalamin 2.2 mcg + Choline Bitartrate 450 mg + DHA 200 mg + Vitamin D3 600 IU Tablets",
    warnings: "Use under medical supervision during pregnancy and lactation.",
    additionalImages: [
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528"
    ]
  },

  {
    id: "calcijen",
    name: "CALCIJEN",
    category: "Calcium Supplements for Strong Bones",
    dosage: "",
    description:
      "Strong bone support formula with Calcium Carbonate and Vitamin D3.",
    fullDescription:
      "Calcijen enhances calcium absorption, strengthens bones, and supports bone density in pregnancy, lactation, hypothyroidism, and post-menopausal osteoporosis.",
    color: "from-purple-500 to-indigo-500",
    benefits: [
      "Increases bone strength",
      "Improves calcium absorption",
      "Supports pregnancy & lactation",
      "Prevents osteoporosis"
    ],
    image: calcijen,
    detailedBenefits: [
      {
        title: "Calcium Carbonate",
        description:
          "Most effective calcium absorption & bioavailability."
      },
      {
        title: "Vitamin D3",
        description:
          "Enhances calcium absorption & bone mineralization."
      },
      {
        title: "Bone Strength",
        description:
          "Helps reduce bone loss in elderly and menopausal women."
      }
    ],
    ingredients:
      "Calcium Carbonate 1250 mg + Vitamin D3 250 IU Tablets",
    warnings: "Use under medical supervision.",
    additionalImages: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
      "https://images.unsplash.com/photo-1617791160505-6f00504e3519"
    ]
  },

  {
    id: "jefinac-sp",
    name: "JEFINAC-SP",
    category: "Pain & Inflammation Management",
    dosage: "",
    description: "Right choice for management of pain and inflammation.",
    fullDescription:
      "Jefinac-SP delivers strong anti-inflammatory, analgesic, and anti-oedema action. Effective for arthritis, post-surgical oedema, and musculoskeletal pain.",
    color: "from-blue-500 to-cyan-500",
    benefits: ["Reduces swelling", "Relieves pain", "Controls inflammation"],
    image: jefinacSp,
    detailedBenefits: [
      {
        title: "Aceclofenac",
        description: "Anti-inflammatory, analgesic with good GI tolerance."
      },
      {
        title: "Paracetamol",
        description: "Analgesic and antipyretic providing enhanced pain relief."
      },
      {
        title: "Serratiopeptidase",
        description:
          "Potent anti-inflammatory enzyme that reduces oedema."
      }
    ],
    ingredients:
      "Aceclofenac 100 mg + Paracetamol 325 mg + Serratiopeptidase 15 mg Tablets",
    warnings: "Use with caution in gastric conditions.",
    additionalImages: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88"
    ]
  },

  {
    id: "jenfer-xt",
    name: "JENFER-XT",
    category: "Pregnancy & Anaemia",
    dosage: "",
    description:
      "Ferrous Ascorbate and Folic Acid tablets for iron deficiency.",
    fullDescription:
      "Jenfer-XT improves hemoglobin levels, supports RBC production, and is ideal for pregnancy, lactation & iron deficiency anaemia.",
    color: "from-emerald-500 to-teal-500",
    benefits: ["Improves hemoglobin", "Supports RBC production", "Good GI tolerance"],
    image: jenferXt,
    detailedBenefits: [
      {
        title: "Ferrous Ascorbate",
        description:
          "Gold standard iron therapy with excellent absorption and tolerance."
      },
      {
        title: "Folic Acid",
        description:
          "Essential for RBC production, DNA & RNA synthesis."
      }
    ],
    ingredients: "Ferrous Ascorbate 100 mg + Folic Acid 1.5 mg Tablets",
    warnings: "Use during pregnancy under doctor supervision.",
    additionalImages: [
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843",
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
    ]
  },

  {
    id: "jenvico-q10",
    name: "JENVICO-Q10",
    category: "Male & Female Infertility",
    dosage: "",
    description:
      "Omega-3, CoQ10 & antioxidants for infertility in males and females.",
    fullDescription:
      "Jenvico-Q10 improves sperm quality, increases pregnancy rates in ART, enhances ovarian function, and reduces oxidative stress.",
    color: "from-amber-500 to-orange-500",
    benefits: [
      "Improves sperm count",
      "Increases pregnancy rates",
      "Enhances ovarian function",
      "Reduces oxidative stress"
    ],
    image: jenvico,
    detailedBenefits: [
      {
        title: "Male Infertility",
        description:
          "Improves sperm motility, increases sperm count, and enhances ART success."
      },
      {
        title: "Female Infertility",
        description:
          "Improves ovarian response, increases DHEA levels, and boosts endometrial receptivity."
      },
      {
        title: "Antioxidant Support",
        description:
          "Powerful antioxidant protection for reproductive cells."
      }
    ],
    ingredients:
      "Omega-3 Fatty Acid, Coenzyme Q10, Lycopene, Selenium Wheat Germ Oil, L-Arginine, L-Carnitine & Zinc Soft Gelatin Capsules",
    warnings: "Use under medical guidance.",
    additionalImages: [
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
      "https://images.unsplash.com/photo-1550572017-edd951b55104"
    ]
  }
];

// ------------------------------
// HELPERS
// ------------------------------
export function getProductById(id: string) {
  return productsData.find(product => product.id === id);
}

export function getAllProducts() {
  return productsData;
}
