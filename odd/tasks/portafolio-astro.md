# Portafolio de Jaime Landázuri — implementación con Astro

Portafolio personal de desarrollador, diseño elegido: artboard 03 bold-blocks (design/portafolio-dev/03-bold-blocks.html) con acento lila claro.

## Specs

- **S1**: Stack: Astro. Usuario: «tenia pensado astro» y eligió la opción Astro en la pregunta de stack. TypeScript, sin framework UI por defecto (componentes .astro puros).
- **S2**: El sitio replica la artboard 03 tal como quedó iterada en el canvas: mundo bold-blocks brutalist (fondo #111111, bloques #1c1c1c, bordes #2e2e2e 2px, sombras duras), acento **lila claro #c4b5fd** (usuario: «cambiemos el color verde lima por un lila claro (a lo gentle-sexy), es como mi marca»), tinta #f5f5f0, textos secundarios #a3a39b. Sin voseo: español neutral (usuario: «quita el acento rioplatense en toda la web»).
- **S3**: Contenido real (usuario: «bro llena toda la información con datos reales, obten de tu memoria de engram»):
  - Nombre: Jaime Landázuri. Rol: desarrollador full-stack. Ubicación: Loja, Ecuador. Experiencia: 2 años (usuario: «cambia el nombre por Jaime Landázuri, la presentación también, desde Loja, Ecuador, experiencia de 2 años»).
  - Proyectos con links reales: Loxafact (PHP · CodeIgniter 3 · MySQL · WebSockets — github.com/jaimejhonle/loxafact_ci), Loxafact Laravel (Laravel 11 · Vue · MySQL · Docker — github.com/Jaimewww/loxafact-laravel), Web Veterinaria (Angular · TypeScript · PNPM — PR #3 de jaimejhonle/veterinaria), Futgo (React Native · Expo · Docker, link pendiente).
  - Stack: PHP/Laravel, Vue 3, Angular, React Native, MySQL, Docker.
  - Sección «Programación agéntica» con jerarquía real (usuario: «lo que te decia era de ejemplo... los mcps y el flujo sdd-odd entran en lo que es harness, hazlo como te parezca mas completo»): intro + SDD·ODD (el flujo), Harness (el motor), MCPs (las integraciones).
  - Marca: logo «jaime.dev», footer © 2026 (usuario: «2026 bro»), GitHub Jaimewww, sin LinkedIn (no existe en memoria).
- **S4**: Secciones: header (logo + nav Trabajo/Agéntica/Skills/Contacto), hero (avatar SVG, `$ whoami`, h1 «Jaime Landázuri, desarrollador full-stack.» con highlight lila + cursor parpadeante, lede, CTAs «Mira mi trabajo» / «Escríbeme»), marquee, proyectos (grid 2×2 de cards con sombra dura), programación agéntica (grid etiqueta+descripción), skills (6 bloques), contacto (h2 «¿Creamos algo?», email), footer.
- **S5**: Responsive ≤900px, focus visible, prefers-reduced-motion, contraste AA (verificado: lila sobre #111 ≈ 10.2:1; tinta sobre lila igual).
- **S6**: Datos pendientes del usuario: email real (hoy placeholder hola@jaimelandazuri.dev), link/repo de Futgo. Deben quedar como constantes fáciles de cambiar y marcadas en el código.

## Tasks

- **T1** (S1): Scaffold del proyecto Astro en la raíz (git init, TS, template mínimo, install). Ruta: inline. Commit: separado.
- **T2** (S2, S5): Tokens y estilos globales (design tokens de la S2, selección, scrollbar, focus, reduced-motion, tipografía). Ruta: inline. Commit: con T3.
- **T3** (S2, S4): Header + hero (avatar SVG, whoami, h1+cursor, lede, CTAs) + marquee. Ruta: inline. Commit: con T2.
- **T4** (S3, S4): Sección proyectos: content/collections o data module con los 4 proyectos reales y cards con sombra dura. Ruta: inline. Commit: separado.
- **T5** (S3, S4): Sección programación agéntica (grid etiqueta+descripción, 3 filas). Ruta: inline. Commit: con T4.
- **T6** (S3, S4): Skills strip + contacto + footer (© 2026, GitHub Jaimewww). Ruta: inline. Commit: separado.
- **T7** (S5): Responsive, a11y y pasada de verificación (detector Impeccable + contraste + navegación teclado). Ruta: inline. Commit: separado.
- **T8** (S6): Insertar email real y link de Futgo cuando el usuario los entregue. Ruta: inline. Commit: con T7 o aparte.

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
