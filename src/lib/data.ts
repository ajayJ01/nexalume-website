import {
  Bot,
  Brain,
  Building2,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  HeartPulse,
  Landmark,
  Layers,
  Lock,
  MessageSquare,
  Rocket,
  Shield,
  Sparkles,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Nexalume Solutions",
  domain: "https://nexalume.in",
  tagline: "Building Intelligent Technology for Tomorrow.",
  email: "hello@nexalume.in",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  address: "Bangalore, Karnataka, India",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#portfolio" },
  { label: "Products", href: "#products" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export const trustedCompanies = [
  "Tata Group",
  "Infosys",
  "Wipro",
  "HDFC Bank",
  "Apollo Hospitals",
  "Government of India",
  "Flipkart",
  "Zomato",
  "Razorpay",
  "PhonePe",
];

export const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
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
    services: ["Cloud Solutions", "DevOps", "Kubernetes", "Infrastructure as Code"],
  },
  {
    id: "security",
    title: "Cyber Security",
    description:
      "Enterprise-grade security frameworks protecting your data, systems, and digital assets.",
    icon: Shield,
    gradient: "from-red-600/20 to-orange-500/20",
    services: ["Cyber Security", "Penetration Testing", "Compliance", "Security Audits"],
  },
  {
    id: "healthcare",
    title: "Healthcare Technology",
    description:
      "HIPAA-compliant health tech solutions that improve patient outcomes and operational efficiency.",
    icon: HeartPulse,
    gradient: "from-rose-600/20 to-pink-500/20",
    services: ["Healthcare Technology", "Telemedicine", "Health Analytics", "EMR Integration"],
  },
  {
    id: "government",
    title: "Government Solutions",
    description:
      "Digital public infrastructure and e-governance platforms serving millions of citizens.",
    icon: Landmark,
    gradient: "from-amber-600/20 to-yellow-500/20",
    services: ["Government Digital Solutions", "GeM Services", "Citizen Portals", "Smart Cities"],
  },
  {
    id: "fintech",
    title: "FinTech Solutions",
    description:
      "Secure, compliant financial technology powering the next generation of digital banking.",
    icon: Building2,
    gradient: "from-emerald-600/20 to-teal-500/20",
    services: ["FinTech Solutions", "Payment Gateways", "Banking APIs", "Data Analytics"],
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
    icon: Globe,
    title: "Global Standards",
    description:
      "Silicon Valley engineering practices with deep understanding of Indian market dynamics.",
  },
  {
    icon: Layers,
    title: "Full-Stack Expertise",
    description:
      "From AI models to mobile apps to cloud infrastructure — one team, seamless delivery.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Partnership",
    description:
      "Real-time dashboards, weekly demos, and direct access to senior engineers throughout.",
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
    title: "Design",
    description:
      "Premium UI/UX prototypes with interactive demos for stakeholder alignment.",
    icon: Layers,
  },
  {
    step: "04",
    title: "Development",
    description:
      "Agile sprints with continuous integration, testing, and transparent progress.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Deploy",
    description:
      "Zero-downtime deployment with monitoring, scaling, and security hardening.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Evolve",
    description:
      "Ongoing optimization, model fine-tuning, and feature evolution as you grow.",
    icon: Zap,
  },
];

export const industries = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "FinTech", icon: Building2 },
  { name: "Government", icon: Landmark },
  { name: "E-Commerce", icon: Globe },
  { name: "Education", icon: Brain },
  { name: "Manufacturing", icon: Cpu },
  { name: "Real Estate", icon: Building2 },
  { name: "Logistics", icon: Rocket },
];

export const caseStudies = [
  {
    title: "AI-Powered Diagnostic Assistant",
    client: "Leading Hospital Chain",
    category: "Healthcare AI",
    result: "40% faster diagnosis",
    description:
      "Built an LLM-powered clinical decision support system processing 10,000+ patient records daily.",
    gradient: "from-rose-500/30 to-pink-600/30",
  },
  {
    title: "Intelligent Document Processing",
    client: "Government Agency",
    category: "GovTech",
    result: "85% automation rate",
    description:
      "Deployed RAG-based document intelligence platform automating citizen service requests.",
    gradient: "from-amber-500/30 to-orange-600/30",
  },
  {
    title: "Fraud Detection Engine",
    client: "Digital Banking Platform",
    category: "FinTech",
    result: "99.2% accuracy",
    description:
      "Real-time ML pipeline detecting fraudulent transactions across 2M+ daily events.",
    gradient: "from-emerald-500/30 to-teal-600/30",
  },
  {
    title: "Enterprise AI Chatbot",
    client: "Fortune 500 Retailer",
    category: "Conversational AI",
    result: "60% cost reduction",
    description:
      "Multi-lingual agentic AI assistant handling 50,000+ customer queries monthly.",
    gradient: "from-blue-500/30 to-cyan-600/30",
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
    title: "GovServe Portal",
    category: "Government",
    description: "Citizen services portal with 50+ integrated departments.",
    tags: ["Laravel", "Vue.js", "AWS"],
  },
  {
    title: "PayFlow Engine",
    category: "FinTech",
    description: "Real-time payment processing with ML fraud detection.",
    tags: ["Node.js", "PostgreSQL", "Kubernetes"],
  },
  {
    title: "AutoOps Suite",
    category: "Automation",
    description: "No-code workflow automation for enterprise operations.",
    tags: ["React", "Python", "Docker"],
  },
  {
    title: "DataLens Analytics",
    category: "Data Analytics",
    description: "AI-powered business intelligence and predictive analytics.",
    tags: ["Next.js", "Python", "MongoDB"],
  },
];

export const products = [
  {
    name: "NexaBot",
    tagline: "Enterprise AI Assistant",
    description:
      "Deploy intelligent chatbots trained on your data with RAG, multi-channel support, and analytics.",
    icon: Bot,
    status: "Live",
  },
  {
    name: "NexaFlow",
    tagline: "Agentic Automation",
    description:
      "Build autonomous AI agents that execute complex workflows across your tech stack.",
    icon: Workflow,
    status: "Live",
  },
  {
    name: "NexaDocs",
    tagline: "Document Intelligence",
    description:
      "Extract, classify, and reason over documents at scale with state-of-the-art NLP.",
    icon: Database,
    status: "Beta",
  },
  {
    name: "NexaGuard",
    tagline: "AI Security Suite",
    description:
      "Protect your AI systems from prompt injection, data leakage, and adversarial attacks.",
    icon: Shield,
    status: "Coming Soon",
  },
];

export const testimonials = [
  {
    quote:
      "Nexalume transformed our customer support with an AI system that handles 80% of queries autonomously. The ROI was visible within the first quarter.",
    author: "Rajesh Kumar",
    role: "CTO, FinServe Technologies",
    avatar: "RK",
  },
  {
    quote:
      "Their team's expertise in government digital solutions is unmatched. They delivered our citizen portal ahead of schedule with zero security incidents.",
    author: "Priya Sharma",
    role: "Director, Digital India Initiative",
    avatar: "PS",
  },
  {
    quote:
      "From RAG architecture to production deployment — Nexalume handled everything. Our internal knowledge base is now searchable in natural language.",
    author: "Amit Patel",
    role: "VP Engineering, HealthTech Corp",
    avatar: "AP",
  },
  {
    quote:
      "Working with Nexalume feels like having a Silicon Valley AI team in Bangalore. World-class engineering, transparent communication, exceptional results.",
    author: "Sarah Mitchell",
    role: "CEO, GlobalRetail Inc",
    avatar: "SM",
  },
];

export const blogPosts = [
  {
    title: "The Rise of Agentic AI in Enterprise",
    excerpt:
      "How autonomous AI agents are reshaping business operations and what leaders need to know.",
    date: "Jun 28, 2026",
    category: "AI Trends",
    readTime: "8 min read",
  },
  {
    title: "Building Production-Ready RAG Systems",
    excerpt:
      "A technical deep-dive into retrieval-augmented generation architecture patterns that scale.",
    date: "Jun 15, 2026",
    category: "Engineering",
    readTime: "12 min read",
  },
  {
    title: "AI Security: Protecting Your LLM Applications",
    excerpt:
      "Essential security practices for deploying large language models in production environments.",
    date: "May 30, 2026",
    category: "Security",
    readTime: "10 min read",
  },
];

export const careers = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Bangalore / Remote",
    type: "Full-time",
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Bangalore / Remote",
    type: "Full-time",
  },
  {
    title: "ML Research Scientist",
    department: "AI Research",
    location: "Bangalore",
    type: "Full-time",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Bangalore / Remote",
    type: "Full-time",
  },
  {
    title: "Business Development Manager",
    department: "Sales",
    location: "Mumbai / Delhi",
    type: "Full-time",
  },
];

export const faqs = [
  {
    question: "What makes Nexalume different from other software companies?",
    answer:
      "We are AI-first by design. Every solution we build incorporates intelligent automation, machine learning, or generative AI at its foundation — not as an add-on. Our team combines Silicon Valley engineering standards with deep expertise in the Indian enterprise landscape.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A focused AI chatbot can be deployed in 4-6 weeks, while enterprise platforms typically take 3-6 months. We use agile methodology with weekly deliverables so you see progress from day one.",
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer:
      "We partner with organizations of all sizes — from funded startups building their MVP to Fortune 500 companies scaling AI initiatives. Our flexible engagement models adapt to your stage and budget.",
  },
  {
    question: "What AI technologies do you specialize in?",
    answer:
      "Our core expertise spans OpenAI GPT models, LangChain, LlamaIndex, custom fine-tuned models, RAG pipelines, agentic AI systems, computer vision, and traditional ML. We select the optimal stack for each use case.",
  },
  {
    question: "How do you ensure data security and compliance?",
    answer:
      "Security is embedded in our development lifecycle. We implement encryption at rest and in transit, role-based access control, audit logging, and comply with relevant standards including GDPR, HIPAA, and Indian data protection regulations.",
  },
  {
    question: "What is your engagement model?",
    answer:
      "We offer fixed-price projects, dedicated team augmentation, and retainer-based partnerships. Every engagement begins with a free discovery call to understand your needs and recommend the best approach.",
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
    { label: "Careers", href: "#careers" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};
