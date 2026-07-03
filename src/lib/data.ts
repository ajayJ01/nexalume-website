import {
  Brain,
  Cloud,
  Code2,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Nexalume Solutions",
  domain: "https://nexalume.in",
  tagline: "Building Intelligent Technology for Tomorrow.",
  email: "hello@nexalume.in",
  phone: "+91 86195 06356",
  whatsapp: "918619506356",
  address: "Jaipur, Rajasthan, India",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const trustedCompanies = [
  "GreenLeaf Retail",
  "SkillBridge Academy",
  "MediCare Plus",
  "UrbanBuild",
  "SwiftLogix",
  "DigiMart India",
];

export const stats = [
  { value: 50, suffix: "+", label: "Projects" },
  { value: 30, suffix: "+", label: "Clients" },
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
      "Smart AI products that help your business work faster and smarter.",
    icon: Brain,
    gradient: "from-blue-600/20 to-cyan-500/20",
    services: [
      "Generative AI",
      "AI Chatbots",
      "LLM Applications",
      "RAG Solutions",
      "Machine Learning",
    ],
  },
  {
    id: "software",
    title: "Software Development",
    description:
      "Beautiful, fast web and mobile apps built for real-world growth.",
    icon: Code2,
    gradient: "from-violet-600/20 to-blue-500/20",
    services: [
      "Web Development",
      "Mobile Apps",
      "SaaS Products",
      "Custom Software",
      "API Integrations",
    ],
  },
  {
    id: "automation",
    title: "Automation & Cloud",
    description:
      "Reliable cloud setup and automation that scales with your business.",
    icon: Cloud,
    gradient: "from-cyan-600/20 to-emerald-500/20",
    services: [
      "Cloud Solutions",
      "DevOps",
      "Enterprise Automation",
      "Cyber Security",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "Understand your goals and plan the right solution.",
    icon: Brain,
  },
  {
    step: "02",
    title: "Build",
    description: "Design and develop with weekly progress updates.",
    icon: Code2,
  },
  {
    step: "03",
    title: "Launch",
    description: "Deploy, test, and go live with confidence.",
    icon: Rocket,
  },
];

export const portfolioItems = [
  {
    title: "NexaMind Platform",
    category: "AI Platform",
    description: "AI dashboard for managing models and workflows.",
    tags: ["Next.js", "OpenAI"],
  },
  {
    title: "HealthSync Pro",
    category: "Healthcare",
    description: "Telemedicine app with smart symptom support.",
    tags: ["React", "FastAPI"],
  },
];

export const testimonials = [
  {
    quote:
      "Nexalume built our AI chatbot in 5 weeks. Our support team now saves hours every day.",
    author: "Rajesh Kumar",
    role: "Founder, FinServe Technologies",
    avatar: "RK",
  },
];

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We build AI solutions, web & mobile apps, automation systems, and cloud infrastructure for startups and growing businesses.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Simple projects take 4-6 weeks. Larger apps typically take 2-4 months with weekly updates.",
  },
  {
    question: "How can I get started?",
    answer:
      "Fill the contact form or call us. We offer a free discovery call to understand your needs.",
  },
];

export const footerLinks = {
  services: [
    "AI Solutions",
    "Web Development",
    "Mobile Apps",
    "Cloud & DevOps",
    "Automation",
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
