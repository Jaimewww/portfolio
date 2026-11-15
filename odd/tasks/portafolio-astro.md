# Portafolio de Jaime Landázuri — implementación con Astro

Portafolio personal de desarrollador, diseño elegido: artboard 03 bold-blocks (design/portafolio-dev/03-bold-blocks.html) con acento lila claro.

## Specs

- **S1**: Stack: Astro. Usuario: «tenia pensado astro» y eligió la opción Astro en la pregunta de stack. TypeScript, sin framework UI por defecto (componentes .astro puros).
- **S2**: El sitio replica la artboard 03 tal como quedó iterada en el canvas: mundo bold-blocks brutalist (fondo #111111, bloques #1c1c1c, bordes #2e2e2e 2px, sombras duras), acento **lila claro #c4b5fd** (usuario: «cambiemos el color verde lima por un lila claro (a lo gentle-sexy), es como mi marca»), tinta #f5f5f0, textos secundarios #a3a39b. Sin voseo: español neutral (usuario: «quita el acento rioplatense en toda la web»).
- **S3**: Contenido real (usuario: «bro llena toda la información con datos reales, obten de tu memoria de engram»):
  - Nombre: Jaime Landázuri. Rol: desarrollador full-stack. Ubicación: Loja, Ecuador. Experiencia: 2 años (usuario: «cambia el nombre por Jaime Landázuri, la presentación también, desde Loja, Ecuador, experiencia de 2 años»).
  - Proyectos reales SIN enlaces: todos los repos son privados por trabajo sensible (usuario: «bro todos los repos son privados, porque es trabajo sensible y no puedo ponerlos publicos»). Cards solo descriptivas con nota de código privado: Loxafact (PHP · CodeIgniter 3 · MySQL · WebSockets), Loxafact Laravel (Laravel 11 · Vue · MySQL · Docker), Web Veterinaria (Angular · TypeScript · PNPM), Futgo (React Native · Expo · Docker).
  - Stack: PHP/Laravel, Vue 3, Angular, React Native, MySQL, Docker.
  - Sección «Programación agéntica» con jerarquía real (usuario: «lo que te decia era de ejemplo... los mcps y el flujo sdd-odd entran en lo que es harness, hazlo como te parezca mas completo»): intro + SDD·ODD (el flujo), Harness (el motor), MCPs (las integraciones).
  - Marca: logo «jaime.dev», footer © 2026 (usuario: «2026 bro»), GitHub Jaimewww, sin LinkedIn (no existe en memoria).
- **S4**: Secciones: header (logo + nav Trabajo/Agéntica/Skills/Contacto), hero (avatar SVG, `$ whoami`, h1 «Jaime Landázuri, desarrollador full-stack.» con highlight lila + cursor parpadeante, lede, CTAs «Mira mi trabajo» / «Escríbeme»), marquee, proyectos (grid 2×2 de cards con sombra dura), programación agéntica (grid etiqueta+descripción), skills (6 bloques), contacto (h2 «¿Creamos algo?», email), footer.
- **S5**: Responsive ≤900px, focus visible, prefers-reduced-motion, contraste AA (verificado: lila sobre #111 ≈ 10.2:1; tinta sobre lila igual).
- **S6**: Email real: jaimeldz.dev@gmail.com (usuario: «a todo esto usemos el correo de jaimeldz.dev@gmail.com y mi link a github ya lo sabes»). GitHub: Jaimewww. Pendiente: definir y construir 2-3 mini-proyectos públicos de showcase derivados de su experiencia (decisión del usuario: «Quitar links + showcases»).

## Tasks

- **T1** (S1): ✅ Scaffold del proyecto Astro en la raíz. Commit: `4454b60`.
- **T2** (S2, S5): ✅ Tokens y estilos globales (`src/styles/global.css`, datos de sitio y proyectos en `src/data/`). Commit: `0e80b98` (con T3).
- **T3** (S2, S4): ✅ Header + hero (avatar SVG, whoami, h1+cursor, lede, CTAs) + marquee. Commit: `0e80b98`.
- **T4** (S3, S4): ✅ Sección proyectos con los 4 proyectos reales (`src/components/Projects.astro`, data en `src/data/projects.ts`). Commit: `65a0ec7` (con T5).
- **T5** (S3, S4): ✅ Sección programación agéntica (grid etiqueta+descripción, 3 filas). Commit: `65a0ec7`.
- **T6** (S3, S4): ✅ Skills strip + contacto + footer + `Base.astro` + `index.astro` (worker, con build en verde). Commit: `222ecb0`.
- **T7** (S5): ✅ Verificación final: `npm run build` exit 0; detector Impeccable sobre `dist/index.html`: 0 hallazgos; landmarks y aria (nav principal, retrato), reduced-motion, 4 anchors presentes, 5 `rel="noopener"`; contraste verificado (lila vs #111 ≈ 10.2:1). Responsive ≤900px por componente. Sin commit (solo verificación, doc: `0ee56a8` pendiente de nombrar — ver Log L12).
- **T8** (S6): ✅ Email real jaimeldz.dev@gmail.com en contacto y cards sin enlace con nota «Código privado» (todos los repos privados por trabajo sensible). Commit: pendiente de nombrar.
- **T9** (S6): Definir y construir 2-3 mini-proyectos públicos de showcase derivados de la experiencia real; enlazarlos en la sección proyectos. Ruta: inline/delegada. Commit: uno por showcase.

## Log

- **L1**: Usuario pidió «calques este diseño para empezar a armar mi portafolio como desarrollador, dame 3 propuestas» con imagen de referencia oscura estilo dev/terminal. Se crearon 3 artboards en design/portafolio-dev/.
- **L2**: «estan bien, solamente me gustaria que agregues un avatar y apliques el skill de impecabble sobre los 3, para que todo quede mas ordenado y limpio» — avatar SVG en las 3 + pasada de polish; el usuario corrigió que la skill impeccable (npx impeccable install) sí estaba instalada y se aplicó formalmente (contexto, polish, craft-floor, detector).
- **L3**: Serie de comentarios de canvas portando dispositivos de la 01 a la 03: «agrega esto a la propuesta 3» ($ whoami), «agrega esto tambien a la propuesta 3» (martin.dev), «agrega esta presentacion a la propuesta 3» (presentación con nombre), «agrega esta animación a la propuesta 3» (cursor parpadeante). La 03 quedó como candidata.
- **L4**: «cambia el nombre por Jaime Landázuri, la presentación también, desde Loja, Ecuador, experiencia de 2 años» — datos reales del usuario.
- **L5**: «quita el acento rioplatense en toda la web» — español neutral.
- **L6**: «bro llena toda la información con datos reales, obten de tu memoria de engram, por ejemplo: Loxafact legacy, Loxafact laravel, Web veterinaria, futgo, etc» — contenido real desde Engram.
- **L7**: «2026 bro» — año del footer.
- **L8**: «agrega una seccion de programación agentica: SDD, ODD, Harness, mcps, agrega con lo que tengo experiencia segun tu memoria de engram» y luego «lo que te decia era de ejemplo, ya que los mcps y el flujo sdd-odd entran en lo que es harness, hazlo como te parezca mas completo» — sección jerarquizada intro + flujo/motor/integraciones.
- **L9**: «quita simulación» del stack del bloque ODD.
- **L10**: «cambiemos el color verde lima por un lila claro (a lo gentle-sexy), es como mi marca, pero ten en cuenta que debe mantener armonia y todo debe mantenerse legible» — acento #c4b5fd, contraste verificado.
- **L11**: «listo, me gusta mas... definamos el stack, tenia pensado astro, que otras opciones me das? usemos odd para esto» — stack decidido: Astro.
- **L12**: Implementación T1-T7 completada en rama `feat/portafolio-astro` (commits 4454b60, 0e80b98, 65a0ec7, 222ecb0). T6 delegada a worker gentle-ai-worker por backstop de contexto; build exit 0 y detector Impeccable limpio. Pendiente T8 (email real + link Futgo).
- **L13**: «bro todos los repos son privados, porque es trabajo sensible y no puedo ponerlos publicos, que me recomiendas? dejarlo asi sin enlaces o hacer algunos proyectos para que se vea algo del trabajo (a todo esto usemos el correo de jaimeldz.dev@gmail.com y mi link a github ya lo sabes)» — decisión: quitar links + construir showcases públicos (opción B). Email real aplicado.
