import { NavItem, ProcessStep } from "@/types";

export const navigationLinks: NavItem[] = [
  { title: "Work", href: "#work" },
  { title: "Services", href: "#services" },
  { title: "About", href: "#about" },
  { title: "Process", href: "#process" },
  { title: "Contact", href: "#contact" },
];

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    stepNumber: "01",
    title: "Discover",
    description: "Understand goals, deep-dive research, and strategic planning."
  },
  {
    id: "strategy",
    stepNumber: "02",
    title: "Strategy",
    description: "Planning the right technical approach and architectural structure."
  },
  {
    id: "design",
    stepNumber: "03",
    title: "Design",
    description: "Crafting beautiful, functional, and accessible user interfaces."
  },
  {
    id: "develop",
    stepNumber: "04",
    title: "Develop",
    description: "Building clean, performant, and scalable frontend solutions."
  },
  {
    id: "launch",
    stepNumber: "05",
    title: "Launch",
    description: "Rigorous testing, flawless deployment, and continuous support."
  }
];
