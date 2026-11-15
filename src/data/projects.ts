// Real projects, sourced from Engram memory (odd/tasks/portafolio-astro.md S3).
export interface Project {
  title: string;
  description: string;
  stack: string;
  href: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Loxafact",
    description:
      "Sistema de gestión y facturación en producción: módulo de restaurante con comandas y mesas, servicio técnico con órdenes de reparación, ventas e inventario.",
    stack: "PHP · CodeIgniter 3 · MySQL · WebSockets",
    href: "https://github.com/jaimejhonle/loxafact_ci",
  },
  {
    title: "Loxafact Laravel",
    description:
      "Migración del sistema legacy a Laravel 11 con arquitectura modular, Vue 3, migración documentada y suite de más de 900 tests.",
    stack: "Laravel 11 · Vue · MySQL · Docker",
    href: "https://github.com/Jaimewww/loxafact-laravel",
  },
  {
    title: "Web Veterinaria",
    description:
      "Plataforma web multi-tenant para clínicas veterinarias: landing pública con datos del tenant, gestión de pacientes y citas.",
    stack: "Angular · TypeScript · PNPM",
    href: "https://github.com/jaimejhonle/veterinaria/pull/3",
  },
  {
    title: "Futgo",
    description:
      "App móvil desarrollada con React Native y Expo, conectada a una API propia y con entorno de desarrollo dockerizado de punta a punta.",
    stack: "React Native · Expo · Docker",
    // TODO(S6): pending repo/demo link from the user.
    href: "#",
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
