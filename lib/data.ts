export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  role?: string;
  duration?: string;
  domain?: string;
  challenges?: string[];
  outcomes?: string[];
  features?: string[];
  useCases?: string[];
  results?: string[];
  demoVideo?: string; // Pour tes fichiers MP4 locaux
  demoUrl?: string;   // Pour tes démos web live (Streamlit, HF, Vercel...)
  gallery?: string[]; // Pour une galerie d'images publiques
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  year: string;
  logo?: string;
  steps: string[];
}

export const projects: Project[] = [
  {
  slug: "nexops-devops-platform",
  title: "NexOps: Autonomous AI DevOps Platform",
  subtitle: "Engineering Final Project • Multi-Agent Systems & Generative AI",

  description:
    "Conception et développement d'une plateforme DevOps autonome alimentée par des agents IA collaboratifs. NexOps orchestre l'ensemble du cycle de vie logiciel, depuis l'analyse du dépôt Git jusqu'au déploiement Kubernetes, en automatisant l'Infrastructure as Code, les pipelines CI/CD, les contrôles de sécurité, la gouvernance et les opérations cloud grâce aux LLMs, à LangGraph et aux architectures RAG.",

  technologies: [
    "LangGraph",
    "LangChain",
    "LLMs",
    "RAG",
    "FastAPI",
    "React",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "GitHub Actions",
    "Helm",
    "OPA",
    "Trivy",
    "ChromaDB"
  ],

  role: "AI Engineer & Solution Architect",

  duration: "February 2026 – July 2026",

  domain: "Autonomous DevOps • Generative AI • Cloud Engineering",

  challenges: [
    "Concevoir une architecture multi-agents capable d'automatiser des workflows DevOps complexes de manière fiable et scalable.",
    "Orchestrer intelligemment plusieurs agents spécialisés (Planning, CI/CD, Infrastructure, Déploiement, Monitoring et Auto-Healing) avec LangGraph.",
    "Garantir la sécurité et la conformité des déploiements Kubernetes grâce aux politiques OPA, aux analyses Trivy et aux validations automatisées.",
    "Intégrer une mémoire hybride (court terme, long terme et Few-Shot Learning) ainsi qu'un système RAG afin d'améliorer la qualité des décisions des agents.",
    "Maintenir un Human-in-the-Loop pour les opérations critiques tout en maximisant l'autonomie de la plateforme."
  ],

  outcomes: [
    "Développement d'une plateforme fonctionnelle capable d'automatiser l'ensemble du pipeline DevOps, du dépôt GitHub jusqu'au cluster Kubernetes.",
    "Réduction estimée de plus de 60 % du temps nécessaire à la préparation de l'infrastructure et aux opérations de déploiement.",
    "Architecture modulaire facilitant l'ajout de nouveaux agents IA sans modifier l'orchestrateur principal.",
    "Amélioration de la fiabilité des déploiements grâce aux validations automatiques, aux contrôles de sécurité et aux mécanismes de rollback.",
    "Prototype démontrant le potentiel des systèmes multi-agents pour les opérations DevOps autonomes."
  ],

  features: [
    "Orchestration intelligente des workflows DevOps avec LangGraph et des agents IA spécialisés.",
    "Automatisation complète des pipelines CI/CD avec GitHub Actions.",
    "Provisionnement automatique des infrastructures cloud via Terraform et Ansible.",
    "Déploiement Kubernetes avec Helm, kubectl et validation des manifests.",
    "Analyse de sécurité intégrée avec Trivy et contrôle des politiques via Open Policy Agent (OPA).",
    "Mémoire hybride (Short-Term, Long-Term et Few-Shot Learning) pour améliorer les performances des agents.",
    "Système RAG basé sur ChromaDB permettant aux agents d'accéder à une base documentaire contextualisée.",
    "Validation Human-in-the-Loop pour les décisions critiques en environnement de production.",
    "Architecture extensible permettant d'ajouter facilement de nouveaux agents et outils DevOps.",
    "Tableau de bord interactif pour suivre l'exécution des workflows et les décisions des agents."
  ],

  demoVideo: "/videos/demo_devops.mp4",

  demoUrl: ""
},
 {
  slug: "clinical-decision-support",

  title: "AI Clinical Decision Support System",

  subtitle: "VISION-LANGUAGE MODELS • MULTIMODAL AI • MEDICAL NLP",

  description:
    "Conception et développement d'un système intelligent d'aide à la décision clinique basé sur des modèles Vision-Language (VLM). La plateforme combine l'analyse d'images médicales et les capacités des grands modèles de langage afin de générer automatiquement des rapports radiologiques structurés, d'assister l'interprétation clinique et de faciliter la prise de décision médicale.",

  technologies: [
    "Vision-Language Models",
    "PyTorch",
    "Transformers",
    "Hugging Face",
    "Medical Imaging",
    "Computer Vision",
    "Medical NLP",
    "Python"
  ],

  role: "AI Engineer & Machine Learning Engineer",

  duration: "2026",

  domain: "Healthcare AI • Medical Imaging • Clinical Decision Support",

  challenges: [
    "Développer un pipeline multimodal capable de comprendre simultanément les images radiologiques et leur contexte clinique.",
    "Générer des rapports médicaux cohérents, structurés et médicalement pertinents à partir d'examens radiographiques.",
    "Réduire les hallucinations des modèles génératifs afin d'améliorer la fiabilité des recommandations cliniques.",
    "Concevoir une architecture généralisable à différents types d'examens d'imagerie médicale.",
    "Garantir des performances robustes malgré la variabilité des données cliniques et des équipements d'imagerie."
  ],

  outcomes: [
    "Développement d'un prototype capable de générer automatiquement des comptes rendus radiologiques structurés.",
    "Réduction significative du temps nécessaire à la rédaction des rapports médicaux.",
    "Amélioration de la cohérence et de la standardisation des comptes rendus générés.",
    "Architecture extensible pouvant être adaptée à d'autres modalités d'imagerie médicale.",
    "Validation du potentiel des modèles multimodaux pour assister les professionnels de santé dans leur prise de décision."
  ],

  features: [
    "Analyse automatique des images radiologiques grâce aux Vision-Language Models.",
    "Fusion multimodale entre les caractéristiques visuelles et les connaissances linguistiques médicales.",
    "Génération automatique de rapports médicaux structurés en langage naturel.",
    "Extraction des principales observations cliniques et anomalies détectées.",
    "Assistance à la décision clinique grâce à des recommandations contextualisées.",
    "Architecture basée sur Transformers optimisée pour les applications de Medical AI.",
    "Pipeline modulaire facilitant l'intégration de nouveaux modèles multimodaux.",
    "Interface intuitive permettant l'analyse rapide des examens médicaux."
  ],

  demoVideo: "/videos/clinic_demo.mp4",

  demoUrl: ""
},
  {
    slug: "tender-recommendation-platform",
    title: "AI-powered Tender Recommendation Platform",
    subtitle: "MULTI-AGENT SCRAPING & RANK ENGINE",
    description: "Architecture d'une solution d'intelligence d'affaires automatisant la collecte, le filtrage, le classement et l'analyse stratégique des appels d'offres en utilisant des systèmes multi-agents et des LLM.",
    technologies: ["Multi-Agent Systems", "LLMs", "LangChain", "Python", "Web Scraping", "GenAI"],
    role: "Ingénieur IA",
    duration: "Juillet 2023 - Février 2024",
    domain: "Intelligence d'affaires / Marchés publics",
    challenges: [
      "Collecter et normaliser des appels d'offres depuis des sources hétérogènes.",
      "Construire un moteur de classement robuste selon des critères métier personnalisables.",
      "Proposer des recommandations exploitables pour des décideurs non techniques."
    ],
    outcomes: [
      "Système capable de proposer des appels d'offres pertinents avec un scoring transparent.",
      "Automatisation du pre-qualification des opportunités pour les équipes commerciales.",
      "Production de tableaux de bord synthétiques et de résumés analytiques prêts à l'usage."
    ],
    features: [
      "Scraping et centralisation automatisée d'appels d'offres complexes à partir de diverses sources.",
      "Système intelligent de notation et de classement basé sur la pertinence et les critères d'entreprise.",
      "Génération automatique de livrables : résumés analytiques et diapositives de présentation claires."
    ],
    demoVideo: "/videos/tender-recommendation-platform-demo.mp4",
    demoUrl: ""
  },
  {
    slug: "smart-health-guardian",
    title: "Smart Health Guardian",
    subtitle: "REAL-TIME HEALTH & SAFETY MONITORING",
    description: "Système innovant de surveillance sanitaire en temps réel combinant la vision par ordinateur et le deep learning sous une interface Streamlit pour calculer les distances interpersonnelles et analyser le port du masque.",
    technologies: ["YOLOv8", "MediaPipe", "Python", "Streamlit", "Computer Vision", "Deep Learning"],
    role: "Ingénieur Vision par Ordinateur",
    duration: "Décembre 2023 - Mai 2024",
    domain: "Santé publique / Sécurité",
    challenges: [
      "Détecter et suivre des personnes dans un flux vidéo en temps réel.",
      "Estimer correctement la distanciation sociale dans des environnements denses.",
      "Classifier fiablement le port du masque malgré les variations de pose et d'éclairage."
    ],
    outcomes: [
      "Interface Streamlit interactive avec métriques de sécurité et alertes visuelles.",
      "Détection en temps réel des violations de distanciation et du port du masque.",
      "Solution prête à être adaptée à des environnements de surveillance industrielle ou sanitaire."
    ],
    features: [
      "Détection en temps réel des personnes et calcul automatique des distances pour prévenir les proximités à risque.",
      "Analyse multiclasse du port du masque (correct, incorrect, absent) pour renforcer la prévention.",
      "Reconnaissance des gestes d'éternuement ou de toux afin de vérifier la couverture correcte."
    ],
    demoVideo: "/videos/demo_vision.mp4",
    demoUrl: "https://share.streamlit.io/wessim125/smart-health-guardian"
  },
  {
  slug: "smart-traffic-control",
  title: "Smart Traffic Light Control",
  subtitle: "GAME THEORY & REINFORCEMENT LEARNING",

  description:
    "Projet de fin d'études : contrôle adaptatif des feux de circulation en combinant Théorie des Jeux et Reinforcement Learning. En collaboration avec Abdelmalek Abed et sous la supervision de Sabeur Abid, nous avons développé un système capable de réduire les temps d'attente, limiter les files d'attente, diminuer les émissions de CO₂ et prioriser les véhicules d'urgence pour un trafic urbain plus durable.",

  technologies: [
    "Python",
    "SUMO",
    "TraCI",
    "Q-Learning",
    "Game Theory",
    "Matplotlib",
    "Seaborn"
  ],

  role: "Reinforcement Learning Engineer",

  duration: "April 2023 - October 2023",

  domain: "Smart Cities • Intelligent Transportation Systems",

  challenges: [
    "Concevoir un contrôle de feux intelligent capable de s'adapter en temps réel à des conditions de trafic variables.",
    "Simuler sept scénarios de trafic réalistes dans SUMO pour évaluer la performance du système.",
    "Garantir une répartition équitable du temps vert tout en priorisant les véhicules d'urgence.",
    "Réduire la congestion et les émissions de CO₂ tout en améliorant la robustesse du trafic mixte."
  ],

  outcomes: [
    "Jusqu'à 30 % de réduction du temps d'attente moyen des véhicules.",
    "Diminution notable des émissions de CO₂ grâce à un trafic plus fluide.",
    "Amélioration de la réactivité pour les véhicules d'urgence.",
    "Preuve de concept solide pour des villes plus intelligentes et durables."
  ],

  features: [
    "Simulation de sept scénarios réalistes avec SUMO (Simulation of Urban Mobility).",
    "Contrôle adaptatif des feux de circulation via Q-Learning en temps réel.",
    "Décisions stratégiques basées sur la Théorie des Jeux pour coordonner véhicules et intersections.",
    "Application de la Shapley Value pour une répartition juste du temps vert.",
    "Approche Maximin et Wardrop pour une robustesse optimale en trafic dense et mixte.",
    "Gestion prioritaire des véhicules d'urgence et optimisation des flux multimodaux."
  ],

  gallery: [
    "/images/average_stats_comparison_20250428_232727.png",
    "/images/comparison_20250503_215507.png",
    "/images/emergency_2.png",
    "/images/eval_waiting_time.png",
    "/images/queue_lengths_20250503_223457.png",
    "/images/n1.png",
    "/images/n2.png",
    "/images/n3.png",
    "/images/n4.png"
  ],

  demoUrl: ""
},
  {
    slug: "quantaleave",
    title: "QuantaLeave",
    subtitle: "QUANTUM MACHINE LEARNING",
    description: "Application explorant les algorithmes quantiques QSVM (Quantum Kernel) et QVC (Quantum Variational) pour anticiper et modéliser l'attrition volontaire des employés face aux modèles classiques.",
    technologies: ["Qiskit", "Python", "QSVM", "QVC", "Quantum Computing", "Scikit-Learn"],
    role: "Chercheur en Quantum ML",
    duration: "2026",
    domain: "Quantum Computing / RH Analytics",
    challenges: [
      "Intégrer des noyaux quantiques à un flux d'entraînement classique peu bruité.",
      "Comparer la performance quantique face aux modèles ML traditionnels sur des données RH.",
      "Gérer la taille du dataset pour rester compatible avec le matériel NISQ."
    ],
    outcomes: [
      "Prototype de prédiction d'attrition utilisant des circuits quantiques paramétrés.",
      "Analyse comparative des avantages et limites du Machine Learning quantique.",
      "Cadre d'expérimentation utile pour des recherches RH avancées."
    ],
    features: [
      "Projection des données RH dans des espaces de Hilbert à haute dimension insimulables classiquement.",
      "Utilisation de circuits quantiques paramétrés (PQC) et analyse des contraintes de bruit du matériel NISQ."
    ],
    demoVideo: "/videos/rh_demo.mp4",
    demoUrl: ""
  },
  {
    slug: "multimodal-emotion-recognition",
    title: "Multimodal Emotion Recognition",
    subtitle: "TRANSFORMER AUDIO-VIDEO-TEXT FUSION",
    description: "Système d'intelligence artificielle multimodal unifiant l'analyse simultanée de la vision, de la parole et du texte pour classifier 8 émotions fondamentales via des modèles Transformers.",
    technologies: ["Transformers", "OpenCV", "PyTorch", "NLP", "Audio Processing"],
    role: "Ingénieur Multimodal",
    duration: "2025",
    domain: "Vision & Speech AI",
    challenges: [
      "Fusionner des signaux audio, vidéo et texte avec loss functions stables.",
      "Gérer la latence et la synchronisation entre flux multimodaux.",
      "Classifier correctement des émotions proches avec des annotations subjectives."
    ],
    outcomes: [
      "Modèle capable de distinguer 8 émotions avec une approche multimodale robuste.",
      "Pipeline de traitement capable d'intégrer vidéo, audio et texte en temps quasi réel.",
      "Base de démonstration convaincante pour des cas d'usage UX et bien-être."
    ],
    features: [
      "Fusion de caractéristiques multimodales complexes (visage, voix, texte).",
      "Classification en temps réel parmi 8 états émotionnels humains distinctes."
    ],
    demoVideo: "/videos/demo_yolo.mp4",
    demoUrl: ""
  },
  {
    slug: "quadruped-robot-locomotion",
    title: "Quadruped Robot Locomotion",
    subtitle: "REINFORCEMENT LEARNING",
    description: "Entraînement d'un agent d'apprentissage par renforcement basé sur l'algorithme PPO dans l'environnement PyBullet pour assurer une marche stable sur des terrains irréguliers.",
    technologies: ["Reinforcement Learning", "PPO", "PyBullet", "Python"],
    role: "Ingénieur RL",
    duration: "2025",
    domain: "Robotics / Simulation",
    challenges: [
      "Stabiliser un robot quadrupède sur des terrains accidentés avec un agent PPO.",
      "Gérer l'instabilité du simulateur tout en préservant un entraînement stable.",
      "Maintenir un comportement de marche naturel et efficace malgré les perturbations."
    ],
    outcomes: [
      "Agent PPO stable capable de marcher sur terrains irréguliers dans PyBullet.",
      "Approche reproductible de l'entraînement RL pour la locomotion robotique.",
      "Démonstration convaincante de l'application RL à la robotique mobile."
    ],
    features: [
      "Modélisation physique d'un robot quadrupède sur des surfaces hautement accidentées.",
      "Optimisation des politiques d'action pour le maintien de l'équilibre dynamique."
    ],
    demoVideo: "/videos/demo_robot.mp4", // <-- CORRIGÉ : Le chemin commence désormais par "/"
    demoUrl: ""
  }
];

export const experiences: Experience[] = [
  {
    company: "Talan Tunisia Consulting",
    role: "AI Engineer Intern (PFE)",
    location: "Tunis, Tunisie",
    year: "2026",
    logo: "/images/talan.jpg",
    steps: [
      "Conception et développement de NexOps, une plateforme DevOps autonome basée sur l'IA Générative et les systèmes Multi-Agents.",
      "Création d'agents pour automatiser les workflows CI/CD, l'IaC, Kubernetes et la sécurité.",
      "Intégration de LangGraph et d'architectures RAG avec boucles de validation Human-in-the-Loop."
    ]
  },
  {
    company: "Leoni Tunisia",
    role: "Computer Vision Intern",
    location: "Sousse, Tunisie",
    year: "2025",
    logo: "/images/leoni.jpg",
    steps: [
      "Développement d'un système de détection d'obstacles en temps réel basé sur YOLO avec fusion multi-caméras.",
      "Implémentation d'algorithmes de navigation autonome (Dijkstra) pour les robots mobiles d'usine (MiR)."
    ]
  },
  {
    company: "Tunisie Telecom",
    role: "Data Analysis Intern",
    location: "Tunis, Tunisie",
    year: "2024",
    logo: "/images/telecom.jpg",
    steps: [
      "Analyse des indicateurs clés de performance (KPI) financiers et modélisation prédictive en Python.",
      "Création de tableaux de bord visuels pour guider les prises de décisions stratégiques commerciales."
    ]
  }
];