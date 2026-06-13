// Single source of truth — all data from nehalnaik.com

export const siteConfig = {
  name: "Nehal Naik",
  title: "Technology Leader · AI/ML",
  email: "nknaik04@gmail.com",
  linkedin: "https://www.linkedin.com/in/nehal-k-naik",
  mitCredential: "https://www.credential.net/c8ffa7e9-3e1f-44ca-9926-b7204c3c9a96",
  location: "Chicago, IL",
  profilePhoto: "/profile/nehal.jpg",
};

export const hero = {
  eyebrow: "AI / ML Technology Leader",
  headlineLine1: "Partnering in",
  headlineLine2: "AI Success.",
  body: "Empowering Businesses with Responsible AI Solutions. Experienced executive and technology leader with a strong background in Risk Management, Insurance, and Finance — delivering AI/ML solutions that drive actionable insights and enhance operational efficiencies.",
  cta1: "View Portfolio",
  cta2: "Get in Touch",
  credentials: ["MIT AI/ML", "Google Cloud", "PMP", "CSM", "Aon 20yr"],
};

export const metrics = [
  { value: "25+", label: "Years in tech", description: "From Siemens in 1997 to AI/ML today" },
  { value: "20",  label: "Years at Aon", description: "Managing Director, Impact Forecasting" },
  { value: "6",   label: "AI projects", description: "Deployed and documented in portfolio" },
  { value: "∞",   label: "Problems left to solve", description: "The reason to keep going" },
];

export const aboutBlurb = {
  headline: "Built on deep domain experience.",
  paragraphs: [
    "Nehal Naik is an experienced executive and technology leader with a strong background in providing robust solutions for the Risk Management, Insurance, and Finance sectors. With proven expertise in product vision, product planning, team management, and execution, Nehal excels in designing product and platform architectures that enable AI/ML-based data analytics solutions.",
    "As a visionary technology strategist, Nehal is committed to providing AI-based enterprise solutions that leverage cutting-edge technologies to drive actionable insights and enhance operational efficiencies — integrating RAG, sentiment analysis, predictive modeling, and prompt engineering to elevate strategic capabilities.",
  ],
};

export const projects = [
  {
    id: "rag-chatbot",
    tag: "RAG · GCP Agent Builder · LLM",
    title: "RAG Based ChatBot",
    body: "Retrieval-Augmented Generation AI framework bridges the gap between LLMs and private data sources. This customer support chatbot, built using GCP Agent Builder, retrieves information from a company's private knowledge base and generates accurate responses — improving satisfaction and reducing support workload.",
    tech: ["RAG", "GCP Agent Builder", "LLM", "Python"],
    href: "https://www.nehalnaik.com/rag-chatbot",
    image: "/projects/rag.png",
  },
  {
    id: "sentiment-analysis",
    tag: "NLP · GPT-3.5 · Few-Shot Prompting",
    title: "Sentiment Analysis & Auto Response Generation",
    body: "Leverages GPT-3.5 with few-shot prompting to classify user comment sentiment (positive, negative, neutral) and generate personalized automated responses. Streamlines customer engagement and enhances satisfaction at scale.",
    tech: ["GPT-3.5", "Few-Shot Prompting", "NLP", "GCP App Engine"],
    href: "https://sentimentanalysis-428619.uc.r.appspot.com/",
    image: "/projects/sentiment.png",
  },
  {
    id: "auto-insurance-claim",
    tag: "ML · Random Forest · GCP · Docker",
    title: "Auto Insurance — Claim Prediction",
    body: "Utilizes historical auto insurance data to predict claim submission likelihood using Random Forest classification. Deployed on Google Cloud via Docker, serving requests through an API with a sample application demonstrating core functionality.",
    tech: ["Random Forest", "GCP", "Docker", "API", "Python"],
    href: "https://storage.cloud.google.com/auto_ins_app/index.html",
    image: "/projects/insurance.jpg",
  },
  {
    id: "predictive-modeling",
    tag: "ML · RapidMiner · PCA · Decision Tree",
    title: "Predictive Modeling",
    body: "Leverages structured hotel booking data within RapidMiner to predict booking cancellations. Preprocesses key features like booking lead time and customer demographics, optimizing models through PCA, decision tree, and random forest algorithms.",
    tech: ["RapidMiner", "PCA", "Decision Tree", "Random Forest"],
    href: null,
    image: "/projects/predictive.png",
  },
  {
    id: "spam-detection",
    tag: "NLP · RapidMiner · Feature Extraction",
    title: "Spam Detection of Unstructured SMS Messages",
    body: "Converts unstructured SMS messages into structured ML-ready format. Covers data preprocessing, feature extraction, and sentiment analysis to build an effective spam detection system using Decision Tree and Random Forest models.",
    tech: ["NLP", "RapidMiner", "Decision Tree", "Random Forest", "Feature Extraction"],
    href: null,
    image: "/projects/spam.png",
  },
  {
    id: "prompt-engineering",
    tag: "LLM · Prompt Engineering · GenAI",
    title: "Prompt Engineering",
    body: "Explores the intricacies of Prompt Engineering as a critical aspect of fine-tuning LLMs. Covers fundamental concepts, strategies for crafting effective prompts, and advanced techniques — with practical examples, case studies, and best practices.",
    tech: ["LLM", "Prompt Engineering", "GenAI", "Fine-Tuning"],
    href: null,
    image: "/projects/prompt.png",
  },
];

export const portfolioIntro = {
  sectionLabel: "AI Solution Portfolio",
  responsibleAiHeadline: "Responsible AI in practice.",
  responsibleAiBody:
    "Responsible AI is the foundation for creating AI-based solutions that adhere to ethical guidelines and societal values. It ensures that artificial intelligence systems are developed and deployed transparently, fairly, and accountably — establishing governance frameworks that foster trust among policymakers, researchers, and industry leaders.",
  nistLink: "https://www.nist.gov/itl/ai-risk-management-framework",
  nistLinkLabel: "AI Risk Management Framework",
  collectionIntro:
    "This collection of AI-based applications and projects showcases the various components and tools used to develop enterprise-level AI solutions, addressing diverse use cases across multiple industries.",
};

export const experience = [
  {
    company: "Aon – Impact Forecasting",
    role: "Managing Director / Product Owner",
    dates: "June 2003 – Nov. 2023",
    location: "Chicago, IL",
    bullets: [
      "Spearheaded the formulation of the company's products and technology strategies, ensuring alignment with overarching business objectives and overseeing successful delivery to internal groups and external insurance companies.",
      "Started product development group by establishing and cultivating high-performing software development, quality assurance, technical writing, and client support teams in US and India from ground up.",
      "Created vision for Aon's flagship Catastrophe Modeling platform 'ELEMENTS', enabling complex risk quantification models, data analytics, and in-depth reporting.",
    ],
  },
  {
    company: "Tellabs Inc.",
    role: "Lead Architect",
    dates: "June 1999 – April 2003",
    location: "Bolingbrook, IL",
    bullets: [
      "Led a team of Architects and Software Engineers in the development of event-driven real-time Telecommunication Software Products, ensuring high reliability and availability.",
    ],
  },
  {
    company: "Deloitte & Touche Tax Tech",
    role: "Sr. Software Engineer",
    dates: "July 1998 – June 1999",
    location: "Deerfield, IL",
    bullets: [
      "Captured new requirements in the form of Use-case and transferred them into the software domain through Architecture and Design for the corporate tax filing system.",
    ],
  },
  {
    company: "GE Capital (SRM)",
    role: "Sr. Software Consultant",
    dates: "July 1997 – April 1998",
    location: "Chicago, IL",
    bullets: [
      "Captured new requirements and transferred them into the software domain through Architecture and Design of the corporate tax filing system.",
    ],
  },
  {
    company: "Siemens Comm. S/W Ltd.",
    role: "Sr. Software Engineer",
    dates: "1995 – 1997",
    location: "Bangalore, India",
    bullets: [
      "Designed and implemented features for Telecommunication network management system.",
    ],
  },
];

export const education = [
  {
    institution: "Veer Narmad University",
    degree: "Master of Computer Science and Application",
    dates: "1990 – 1993",
    location: "Surat, India",
    note: "Strong foundation in computer science, programming, algorithm design, and project management.",
  },
  {
    institution: "Gujarat University",
    degree: "Bachelor of Electronics and Communication",
    dates: "1986 – 1989",
    location: "Ahmedabad, India",
    note: "Strong understanding of electronics circuitry and its use in communication technology.",
  },
];

export const certifications = [
  {
    name: "No Code AI and Machine Learning — MIT Professional Education",
    issuer: "MIT",
    year: "2024",
    credentialLink: "https://www.credential.net/c8ffa7e9-3e1f-44ca-9926-b7204c3c9a96",
    image: "/certs/mit-cert.png",
  },
  {
    name: "Google Cloud Certified — Cloud Digital Leader",
    issuer: "Google Cloud",
    year: "2024",
    credentialLink: null,
    image: "/certs/google-cloud-leader.png",
  },
  {
    name: "Build and Deploy Machine Learning Solutions on Vertex AI",
    issuer: "Google Cloud",
    year: null,
    credentialLink: null,
    image: "/certs/google-cloud-cert2.png",
  },
  {
    name: "PMP — Project Management Professional",
    issuer: "PMI",
    year: null,
    credentialLink: null,
    image: null,
  },
  {
    name: "CSM — Certified Scrum Master",
    issuer: "Scrum Alliance",
    year: null,
    credentialLink: null,
    image: null,
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google Cloud",
    year: null,
    credentialLink: null,
    image: null,
  },
  {
    name: "Mastering AI Leadership",
    issuer: null,
    year: null,
    credentialLink: null,
    image: null,
  },
  {
    name: "Model Development on Vertex AI",
    issuer: "Google Cloud",
    year: null,
    credentialLink: null,
    image: null,
  },
];

export const skills = {
  ai: ["Machine Learning", "RAG", "LLMs", "Prompt Engineering", "Vertex AI", "NLP"],
  cloud: ["GCP", "AWS", "GCP Agent Builder", "GCP App Engine", "Docker"],
  tools: ["Python", "C#", "C++", "RapidMiner", "Snowflake", "SQL Server"],
  domain: ["Catastrophe Risk Modeling", "Insurance Product Strategy", "Reinsurance Analytics", "Financial Services"],
  leadership: ["Product Vision & Strategy", "P&L Ownership", "Team Building", "Agile / Scrum", "Executive Stakeholder Management"],
};
