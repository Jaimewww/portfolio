// Real projects, sourced from Engram memory (odd/tasks/portafolio-astro.md S3).
// All repos are private (sensitive work): cards render without links, with a
// "Código privado" note instead of a CTA. Public showcase links land here later (T9).
export interface Project {
  title: string;
  description: string;
  stack: string;
}

export const PRIVATE_NOTE = "Código privado";

// Public showcase repositories (odd/tasks/portafolio-astro.md S6, T9).
export interface Showcase {
  name: string;
  url: string;
  note: string;
}

export const SHOWCASES: Showcase[] = [
  {
    name: "Este portafolio",
    url: "https://github.com/Jaimewww/portfolio",
    note: "Astro · este repo",
  },
  {
    name: "Laravel modular starter",
    url: "https://github.com/Jaimewww/laravel-modular-starter",
    note: "Laravel 11 · módulos + tests",
  },
  {
    name: "odd-cli",
    url: "https://github.com/Jaimewww/odd-cli",
    note: "TypeScript · 0 dependencias",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Loxafact",
    description:
      "Sistema de gestión y facturación en producción: módulo de restaurante con comandas y mesas, servicio técnico con órdenes de reparación, ventas e inventario.",
    stack: "PHP · CodeIgniter 3 · MySQL · WebSockets",
  },
  {
    title: "Loxafact Laravel",
    description:
      "Migración del sistema legacy a Laravel 11 con arquitectura modular, Vue 3, migración documentada y suite de más de 900 tests.",
    stack: "Laravel 11 · Vue · MySQL · Docker",
  },
  {
    title: "Web Veterinaria",
    description:
      "Plataforma web multi-tenant para clínicas veterinarias: landing pública con datos del tenant, gestión de pacientes y citas.",
    stack: "Angular · TypeScript · PNPM",
  },
  {
    title: "Futgo",
    description:
      "App móvil desarrollada con React Native y Expo, conectada a una API propia y con entorno de desarrollo dockerizado de punta a punta.",
    stack: "React Native · Expo · Docker",
  },
];

export const SKILLS = [
  { name: "PHP / Laravel", level: "Producción" },
  { name: "Vue 3", level: "Producción" },
  { name: "Angular", level: "Producción" },
  { name: "React Native", level: "En curso" },
  { name: "MySQL", level: "Sólido" },
  { name: "Docker", level: "Sólido" },
] as const;

export const MARQUEE_TECHS = ["PHP", "Laravel", "Vue", "Angular", "React Native", "MySQL", "Docker"] as const;
