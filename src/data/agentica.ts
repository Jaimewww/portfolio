// "Programación agéntica" section content — real credentials sourced from Engram
// memory (odd/tasks/portafolio-astro.md S3). Hierarchy per user feedback:
// SDD/ODD is the flow, Harness is the engine, MCPs are the integrations.
export interface AgenticRow {
  tag: string;
  sub: string;
  description: string;
}

export const AGENTIC_INTRO =
  "No uso la IA para que escriba por mí: la orquesto. Especifico antes de codificar, cada tarea cierra con pruebas y el contexto vive entre sesiones — el mismo estándar que le exigiría a un equipo humano, con la velocidad de un agente bien dirigido.";

export const AGENTIC_ROWS: AgenticRow[] = [
  {
    tag: "SDD · ODD",
    sub: "El flujo",
    description:
      "Desarrollo con especificación: ciclos completos de exploración, propuesta, spec, diseño y tareas (SDD), con documentos de feature y log de decisiones verbatim (ODD). Cada tarea se cierra con evidencia RED→GREEN y PRs encadenados — migré módulos enteros de Loxafact a Laravel 11 con suites de más de 900 tests.",
  },
  {
    tag: "Harness",
    sub: "El motor",
    description:
      "El harness de trabajo diario: sesiones de Pi con subagentes de superficie de edición acotada, worktrees por tarea, commits por unidad de trabajo y memoria persistente con Engram — que además pongo a punto y mantengo yo mismo.",
  },
  {
    tag: "MCPs",
    sub: "Las integraciones",
    description:
      "La extensión natural del harness: servidores Model Context Protocol (stdio) configurados y depurados en Pi y OpenCode, con bridges a apps vivas como FilmCraft y Roblox Studio, y diagnóstico de handshake y conexión sobre Linux.",
  },
];
