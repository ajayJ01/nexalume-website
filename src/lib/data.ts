import {
  Bot,
  Brain,
  Cloud,
  Code2,
  Cpu,
  Layers,
  Lock,
  Rocket,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Nexalume Solutions",
  domain: "https://nexalume.in",
  tagline: "Building Intelligent Technology for Tomorrow.",
  email: "hello@nexalume.in",
  phone: "+91 86195 06356",
  whatsapp: "918619506356",
  address: "Bangalore, Karnataka, India",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const trustedCompanies = [
  "GreenLeaf Retail",
  "SkillBridge Academy",
  "MediCare Plus Clinic",
  "UrbanBuild Properties",
  "SwiftLogix",
  "DigiMart India",
  "CloudNine Startup",
  "FarmConnect",
];

export const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  services: string[];
  gradient: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "ai",
    title: "AI Solutions",
    description:
      "Cutting-edge artificial intelligence that transforms how businesses operate, decide, and innovate.",
    icon: Brain,
    gradient: "from-blue-600/20 to-cyan-500/20",
    services: [
      "Artificial Intelligence",
      "Generative AI",
      "Agentic AI Systems",
      "Machine Learning",
      "LLM Applications",
      "RAG Solutions",
      "AI Chatbots",
      "AI Automation",
    ],
  },
  {
    id: "software",
    title: "Software Development",
    description:
      "World-class digital products engineered for scale, performance, and exceptional user experience.",
    icon: Code2,
    gradient: "from-violet-600/20 to-blue-500/20",
    services: [
      "SaaS Development",
      "Custom Software Development",
      "Web Development",
      "Mobile App Development",
      "API Integrations",
      "Digital Transformation",
    ],
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Intelligent workflows that eliminate friction and amplify human potential across your organization.",
    icon: Workflow,
    gradient: "from-cyan-600/20 to-emerald-500/20",
    services: ["Enterprise Automation", "AI Automation", "Process Optimization"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description:
      "Resilient, scalable infrastructure built for the demands of modern AI-powered applications.",
    icon: Cloud,
    gradient: "from-sky-600/20 to-indigo-500/20",
    services: ["Cloud Solutions", "DevOps", "Cyber Security", "Data Analytics"],
  },
];

export const whyChooseUs = [
  {
    icon: Sparkles,
    title: "AI-First DNA",
    description:
      "Every solution is architected with intelligence at its core — not bolted on as an afterthought.",
  },
  {
    icon: Rocket,
    title: "Rapid Delivery",
    description:
      "Agile sprints and proven frameworks mean you go from concept to production in weeks, not months.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, compliance frameworks, and zero-trust architecture built into every layer.",
  },
  {
    icon: Layers,
    title: "Full-Stack Expertise",
    description:
      "From AI models to mobile apps to cloud infrastructure — one team, seamless delivery.",
  },
];

export const techStack = [
  "Python",
  "FastAPI",
  "Node.js",
  "Laravel",
  "React",
  "Next.js",
  "Vue.js",
  "Flutter",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Postgres",
  "MongoDB",
];

export const aiStack = [
  "OpenAI",
  "LangChain",
  "LlamaIndex",
  "Pinecone",
  "Hugging Face",
  "Anthropic",
  "TensorFlow",
  "PyTorch",
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Deep-dive workshops to understand your vision, constraints, and success metrics.",
    icon: Brain,
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "AI architecture blueprint, technology roadmap, and phased delivery plan.",
    icon: Cpu,
  },
  {
    step: "03",
    title: "Build",
    description:
      "Agile development with continuous integration, testing, and weekly demos.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Deploy, monitor, and evolve your product as your business grows.",
    icon: Rocket,
  },
];

export const portfolioItems = [
  {
    title: "NexaMind Platform",
    category: "AI Platform",
    description: "Enterprise AI orchestration and model management dashboard.",
    tags: ["Next.js", "OpenAI", "LangChain"],
  },
  {
    title: "HealthSync Pro",
    category: "Healthcare",
    description: "Telemedicine platform with AI symptom analysis.",
    tags: ["React", "FastAPI", "TensorFlow"],
  },
  {
    title: "AutoOps Suite",
    category: "Automation",
    description: "Workflow automation for growing business operations.",
    tags: ["React", "Python", "Docker"],
  },
];

export const products = [
  {
    name: "NexaBot",
    tagline: "Enterprise AI Assistant",
    description:
      "Deploy intelligent chatbots trained on your data with RAG and multi-channel support.",
    icon: Bot,
    status: "Live",
  },
  {
    name: "NexaFlow",
    tagline: "Agentic Automation",
    description:
      "Build autonomous AI agents that execute workflows across your tech stack.",
    icon: Workflow,
    status: "Live",
  },
];

export const testimonials = [
  {
    quote:
      "Nexalume built our AI chatbot in just 5 weeks. Customer queries are now handled automatically and our team saves hours every day.",
    author: "Rajesh Kumar",
    role: "Founder, FinServe Technologies",
    avatar: "RK",
  },
  {
    quote:
      "Professional team, clear communication, and excellent results. Our web app was delivered on time with great quality.",
    author: "Priya Sharma",
    role: "Director, SkillBridge Academy",
    avatar: "PS",
  },
];

export const faqs = [
  {
    question: "What makes Nexalume different from other software companies?",
    answer:
      "We are AI-first by design. Every solution incorporates intelligent automation and modern tech — not as an afterthought. We work with startups and growing businesses across India.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A focused AI chatbot can be deployed in 4-6 weeks. Full web or mobile apps typically take 2-4 months. We use agile methodology with weekly progress updates.",
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer:
      "We partner with organizations of all sizes — from startups building their MVP to established companies scaling their digital presence.",
  },
  {
    question: "What is your engagement model?",
    answer:
      "We offer fixed-price projects and dedicated team partnerships. Every engagement begins with a free discovery call to understand your needs.",
  },
];

export const footerLinks = {
  services: [
    "AI Solutions",
    "Software Development",
    "Cloud & DevOps",
    "Cyber Security",
    "Healthcare Tech",
    "Government Solutions",
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};
