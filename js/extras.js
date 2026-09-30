(function () {
  'use strict';

  const I = (d) => '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>';
  const ICON = {
    cercania: I('<circle cx="7.5" cy="10" r="5.5"/><circle cx="12.5" cy="10" r="5.5"/>'),
    confianza: I('<path d="M10 2 L17 5 V10 C17 14 14 17 10 18 C6 17 3 14 3 10 V5 Z"/><path d="M7 10l2 2 4-4"/>'),
    innovacion: I('<path d="M10 2 L12 8 L18 10 L12 12 L10 18 L8 12 L2 10 L8 8 Z"/>'),
    profesionalismo: I('<rect x="3" y="7" width="14" height="9" rx="2"/><path d="M7 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>'),
    elegancia: I('<path d="M10 2 L17 8 L10 18 L3 8 Z"/><path d="M3 8h14"/>'),
    humanidad: I('<circle cx="7" cy="6" r="2.3"/><path d="M3 17c0-3 2-5 4-5s4 2 4 5"/><circle cx="15" cy="6" r="2.3"/><path d="M11 17c0-3 2-5 4-5s4 2 4 5"/>'),
    creatividad: I('<path d="M4 16l1-4 8-8 3 3-8 8z"/><path d="M12 5l3 3"/>'),
    compromiso: I('<circle cx="10" cy="10" r="7.5"/><path d="M6.5 10.3l2.3 2.3 4.7-4.9"/>'),
    heart: I('<path d="M10 17s-6.5-4-6.5-8.5A3.5 3.5 0 0 1 10 6.5a3.5 3.5 0 0 1 6.5 2C16.5 13 10 17 10 17z"/>'),
    idea: I('<path d="M7 14h6M8 17h4M10 2a5 5 0 0 0-3 9c.6.5 1 1.2 1 2h4c0-.8.4-1.5 1-2a5 5 0 0 0-3-9z"/>'),
    bolt: I('<path d="M11 2L4 11h5l-1 7 7-9h-5z"/>'),
    star: I('<path d="M10 2l2.4 5 5.6.8-4 3.9.9 5.6L10 14.6 5.1 17.3 6 11.7 2 7.8 7.6 7z"/>'),
    link: I('<path d="M8 12a3 3 0 0 0 4 0l3-3a3 3 0 0 0-4-4l-1 1M12 8a3 3 0 0 0-4 0l-3 3a3 3 0 0 0 4 4l1-1"/>'),
    build: I('<path d="M3 17h14M5 17V8l5-4 5 4v9M8 17v-5h4v5"/>'),
    phone: I('<rect x="6" y="2.5" width="8" height="15" rx="2"/><path d="M9 15h2"/>'),
    split: I('<path d="M10 3v5M10 8L4 15M10 8l6 7"/>'),
    rocket: I('<path d="M10 2c3 2 5 5 5 9l-2 3H7l-2-3c0-4 2-7 5-9zM8 14l-1 4M12 14l1 4"/><circle cx="10" cy="9" r="1.4"/>')
  };

  /* ================= VALORES ================= */
  const VALUES = [
    ['cercania',
      { t: 'Cercanía', g: 'Contigo, no frente a ti', d: 'Escuchamos antes de proponer. Cada cliente tiene una historia y un sueño distintos, y nos sentamos a su lado para entenderlos de verdad. Respondemos rápido, hablamos claro y acompañamos en cada etapa, desde la primera idea hasta el último detalle del evento o del producto.' },
      { t: 'Closeness', g: 'With you, not in front of you', d: 'We listen before we propose. Every client has a different story and dream, and we sit beside them to truly understand it. We reply fast, speak plainly and stay with you at every stage, from the first idea to the last detail of the event or product.' }],
    ['confianza',
      { t: 'Confianza', g: 'Lo prometido, cumplido', d: 'La confianza se gana con hechos. Somos transparentes con tiempos, alcances y costos, cuidamos lo que nos compartes y entregamos lo que acordamos. Preferimos una conversación honesta a tiempo que una sorpresa a destiempo.' },
      { t: 'Trust', g: 'Promises kept', d: 'Trust is earned with actions. We are transparent about timelines, scope and costs, we protect what you share with us and we deliver what we agree on. We prefer an honest conversation on time over a surprise too late.' }],
    ['innovacion',
      { t: 'Innovación', g: 'Ideas que se adelantan', d: 'Combinamos creatividad y tecnología para resolver de otra forma. Exploramos herramientas, formatos y tendencias nuevas, probamos, aprendemos rápido y mejoramos. Así nacieron nuestras invitaciones digitales y la plataforma que estamos construyendo.' },
      { t: 'Innovation', g: 'Ideas that stay ahead', d: 'We combine creativity and technology to solve things differently. We explore new tools, formats and trends, test, learn fast and improve. That is how our digital invitations and the platform we are building were born.' }],
    ['profesionalismo',
      { t: 'Profesionalismo', g: 'Orden, rigor y compromiso', d: 'Detrás de lo emocional hay procesos claros. Planeamos, documentamos y damos seguimiento con roles definidos y metas medibles. Cuidamos la puntualidad, la comunicación y la calidad para que tú solo tengas que disfrutar el resultado.' },
      { t: 'Professionalism', g: 'Order, rigor and commitment', d: 'Behind everything emotional there are clear processes. We plan, document and follow up with defined roles and measurable goals. We care about punctuality, communication and quality so you only have to enjoy the result.' }],
    ['elegancia',
      { t: 'Elegancia', g: 'Belleza con intención', d: 'Para nosotros lo elegante es simple, armónico y con propósito. Cuidamos paletas, texturas, tipografías y proporciones para que cada montaje, diseño o pantalla se sienta refinado, atemporal y coherente con quien lo vive.' },
      { t: 'Elegance', g: 'Beauty with intention', d: 'To us, elegance is simple, harmonious and purposeful. We care for palettes, textures, typography and proportions so every setup, design or screen feels refined, timeless and true to the person living it.' }],
    ['humanidad',
      { t: 'Humanidad', g: 'Las personas primero', d: 'Nuestro origen es una boda y una familia, y eso nos recuerda por qué hacemos lo que hacemos. Ponemos a las personas y sus emociones en el centro de cada decisión, con empatía, respeto y calidez hacia clientes, aliados y equipo.' },
      { t: 'Humanity', g: 'People first', d: 'Our origin is a wedding and a family, and that reminds us why we do what we do. We place people and their emotions at the center of every decision, with empathy, respect and warmth toward clients, partners and our team.' }],
    ['creatividad',
      { t: 'Creatividad', g: 'Emoción hecha diseño', d: 'Cada proyecto empieza en blanco. Nos inspiramos en tu historia para crear conceptos únicos, nunca plantillas repetidas, y los llevamos a la realidad con ingenio, sensibilidad y atención a lo que hará sentir algo a quienes lo vean.' },
      { t: 'Creativity', g: 'Emotion turned into design', d: 'Every project starts from a blank page. We draw on your story to craft unique concepts, never repeated templates, and bring them to life with ingenuity, sensitivity and attention to what will make people feel something.' }],
    ['compromiso',
      { t: 'Compromiso', g: 'Hasta que salga bien', d: 'Tomamos cada proyecto como propio. Asumimos responsabilidad por los resultados, aprendemos de lo que no salió perfecto y nos mantenemos en constante mejora. Nuestro compromiso es contigo, con nuestro equipo y con el ecosistema que estamos construyendo.' },
      { t: 'Commitment', g: 'Until it turns out right', d: 'We treat every project as our own. We take responsibility for results, learn from what did not go perfectly and stay in constant improvement. Our commitment is to you, to our team and to the ecosystem we are building.' }]
  ];

  /* ================= HISTORIA (TIMELINE) ================= */
  const TL = [
    { y: 2024, ic: 'heart', when: ['Junio 2024', 'June 2024'],
      es: ['La boda que lo empezó todo', 'Salma y Eduardo se casan, y la decoración corre por cuenta de Salma y Mayo, hoy nuestra Directora Creativa. Cada centro de mesa, cada rincón y cada detalle salió de sus manos, pensado con cariño para ese día.', 'Los invitados no dejaban de elogiar lo que veían. Entre fotos y felicitaciones surgió una pregunta que ya no se iría: ¿y si esto pudiera ser un negocio?'],
      en: ['The wedding that started it all', 'Salma and Eduardo get married, and the decoration is in the hands of Salma and Mayo, today our Creative Director. Every centerpiece, every corner and every detail came from their hands, designed with love for that day.', 'Guests could not stop praising what they saw. Amid photos and congratulations, a question appeared that would not go away: what if this could be a business?'] },
    { y: 2024, ic: 'idea', when: ['Después de la boda', 'After the wedding'],
      es: ['Una idea en busca de impulso', 'Salma, Eduardo y Mayo empezaron a imaginar un negocio de decoración para eventos. Tenían el talento, la visión y las ganas; lo único que faltaba era la inversión para dar el primer paso.'],
      en: ['An idea looking for a push', 'Salma, Eduardo and Mayo began to imagine an event decoration business. They had the talent, the vision and the drive; the only thing missing was the investment to take the first step.'] },
    { y: 2025, ic: 'bolt', when: ['Enero 2025', 'January 2025'],
      es: ['Un cierre que abrió un camino', 'Eduardo es despedido de su empleo. En lugar de detenerse, decidió destinar su liquidación a respaldar a su esposa y a su suegra, y juntos se lanzaron a iniciar el proyecto Mokino.'],
      en: ['An ending that opened a path', 'Eduardo is laid off from his job. Instead of stopping, he decided to put his severance toward supporting his wife and mother-in-law, and together they set out to start the Mokino project.'],
      quote: ['Apostar por el sueño en familia.', 'Betting on the family dream.'] },
    { y: 2025, ic: 'star', key: 1, badge: ['Nace Mokino', 'Mokino is born'], when: ['3 de marzo de 2025', 'March 3, 2025'],
      es: ['Mokino Decoraciones', 'Con una intención muy clara: llevar momentos únicos a cada evento a través de la decoración. Bodas, cumpleaños y celebraciones se convierten en escenarios diseñados uno por uno, con el sello de nuestro lema.'],
      en: ['Mokino Decoraciones', 'With a very clear intention: to bring unique moments to every event through decoration. Weddings, birthdays and celebrations become settings designed one by one, carrying the spirit of our motto.'],
      quote: ['"Decoramos sueños, creamos emociones"', '"We decorate dreams, we create emotions"'] },
    { y: 2025, ic: 'link', when: ['Semanas después', 'Weeks later'],
      es: ['Llega Paloma y surge Valpa', 'Paloma se suma como coordinadora de contenido digital y atención al cliente. Con ella nace un segundo proyecto, Valpa – Invitaciones Digitales, que hace que la emoción del evento empiece mucho antes del gran día.'],
      en: ['Paloma arrives and Valpa emerges', 'Paloma joins as digital content and customer care coordinator. With her, a second project is born, Valpa – Digital Invitations, which makes the excitement of the event begin long before the big day.'],
      chips: [['Mokino', 'gold'], ['Valpa', 'cyan']] },
    { y: 2025, ic: 'build', when: ['Primer semestre 2025', 'First half of 2025'],
      es: ['Aprender haciendo', 'Llegan los primeros clientes a Mokino y a Valpa. Aún no había una estrategia definida y todo estaba por aprenderse, así que cada evento fue una escuela: probar, equivocarse, ajustar y volver a intentarlo.'],
      en: ['Learning by doing', 'The first clients arrive at Mokino and Valpa. There was no defined strategy yet and everything was still to be learned, so every event became a school: try, stumble, adjust and try again.'] },
    { y: 2025, ic: 'star', key: 1, badge: ['Nace Valkibah', 'Valkibah is born'], when: ['Junio 2025', 'June 2025'],
      es: ['Grupo Valkibah', 'Mokino y Valpa trabajaban con ideas muy parecidas, pero sin un ecosistema que las uniera. Así surge Grupo Valkibah, la matriz de ambas unidades de negocio, con actividades, roles y estrategia definidos, y en constante mejora.'],
      en: ['Grupo Valkibah', 'Mokino and Valpa worked with very similar ideas, but without an ecosystem to bring them together. That is how Grupo Valkibah emerges, the parent company of both business units, with defined activities, roles and strategy, and in constant improvement.'],
      chips: [[['Valkibah · Matriz', 'Valkibah · Parent company'], ''], ['Mokino', 'gold'], ['Valpa', 'cyan']] },
    { y: 2025, ic: 'phone', when: ['Octubre 2025', 'October 2025'],
      es: ['Comienza Mobah', 'Arranca Mobah, una aplicación móvil para Android y iOS que será nuestra tercera unidad de negocio. Sigue en desarrollo y su propósito es conectar a quien tiene un evento en puerta con los proveedores adecuados.'],
      en: ['Mobah begins', 'Mobah kicks off, a mobile app for Android and iOS that will be our third business unit. It is still in development, and its purpose is to connect anyone with an upcoming event to the right vendors.'],
      chips: [['Android', ''], ['iOS', ''], [['En desarrollo', 'In development'], '']] },
    { y: 2026, ic: 'split', key: 1, when: ['Marzo 2026', 'March 2026'],
      es: ['Dos vértices, una sola visión', 'Para crecer con más foco y claridad, Valkibah organiza su ecosistema en dos grandes líneas de trabajo.'],
      en: ['Two vertices, one vision', 'To grow with more focus and clarity, Valkibah organizes its ecosystem into two main lines of work.'],
      chips: [[['Experiencias para Eventos', 'Event Experiences'], 'gold'], [['Experiencias Tecnológicas', 'Technology Experiences'], 'cyan']],
      extra: [['Eventos: coordinación, planeación de bodas y eventos, planificación y producción.', 'Events: coordination, wedding and event planning, scheduling and production.'], ['Tecnología: aplicaciones móviles y plataformas web.', 'Technology: mobile apps and web platforms.']] },
    { y: 2026, ic: 'rocket', when: ['Hoy y lo que viene', 'Today and beyond'],
      es: ['Lo mejor está por construirse', 'Seguimos aprendiendo, creciendo y sumando personas a un ecosistema que nació de una boda, un sueño y mucha fe. Tu historia puede ser la próxima que acompañemos.'],
      en: ['The best is yet to be built', 'We keep learning, growing and welcoming new people into an ecosystem born from a wedding, a dream and a lot of faith. Your story could be the next one we accompany.'] }
  ];

  /* ================= ROLES ================= */
  const ROLES = {
    salma: { img: 'salma-castillo', name: 'Salma Castillo', units: ['Valkibah', 'Mokino', 'Valpa'],
      es: { r: 'Fundadora · Estrategia de Marca, Ventas y Operaciones', d: 'Define la estrategia comercial y de crecimiento del ecosistema, impulsa nuevas oportunidades y asegura que cada unidad mantenga una identidad sólida y una operación eficiente.', a: ['Definir la estrategia de marca y el posicionamiento del grupo', 'Dirigir ventas, cotizaciones y relación con clientes clave', 'Coordinar la operación diaria entre unidades de negocio', 'Detectar alianzas y nuevas oportunidades de crecimiento', 'Cuidar la coherencia de identidad entre Mokino, Valpa y Valkibah', 'Dar seguimiento a metas, procesos y mejora continua'] },
      en: { r: 'Founder · Brand Strategy, Sales & Operations', d: "Defines the ecosystem's commercial and growth strategy, drives new opportunities and ensures every unit keeps a solid identity and an efficient operation.", a: ['Define brand strategy and the group positioning', 'Lead sales, quotes and key client relationships', 'Coordinate daily operations across business units', 'Spot partnerships and new growth opportunities', 'Keep identity consistent across Mokino, Valpa and Valkibah', 'Track goals, processes and continuous improvement'] } },
    eduardo: { img: 'eduardo-rico', name: 'Eduardo Rico', units: ['Valkibah', 'Mokino', 'Valpa', 'Mobah'],
      es: { r: 'Coordinador de Operaciones', d: 'Coordina la operación del ecosistema para que cada proyecto avance en tiempo y forma, y aporta su visión de producto y tecnología al desarrollo de las soluciones digitales de Valkibah.', a: ['Coordinar la operación diaria y los tiempos de cada proyecto', 'Dar seguimiento a tareas, procesos y responsables entre unidades', 'Organizar la logística y los recursos de los eventos', 'Cuidar que se cumpla lo acordado con cada cliente', 'Liderar el desarrollo de Mobah y las plataformas digitales', 'Impulsar la mejora continua y la automatización de procesos'] },
      en: { r: 'Operations Coordinator', d: "Coordinates the ecosystem's operations so every project moves forward on time and as agreed, and contributes his product and technology vision to the development of Valkibah's digital solutions.", a: ['Coordinate daily operations and the timeline of every project', 'Follow up on tasks, processes and owners across units', 'Organize event logistics and resources', 'Make sure what was agreed with each client is fulfilled', 'Lead the development of Mobah and the digital platforms', 'Drive continuous improvement and process automation'] } },
    mayo: { img: 'mayo-espinola', name: 'Mayo Espinola', units: ['Mokino'],
      es: { r: 'Directora Creativa · Mokino', d: 'Lidera la dirección creativa de Mokino, conceptualizando y diseñando experiencias visuales memorables que transforman espacios en escenarios que conectan con las personas.', a: ['Conceptualizar la línea creativa de cada evento', 'Diseñar decoraciones, paletas y ambientaciones', 'Elaborar tableros de inspiración y propuestas visuales para clientes', 'Supervisar el montaje para cuidar cada detalle', 'Seleccionar materiales, flores y elementos decorativos', 'Mantener la identidad visual y el estilo de Mokino'] },
      en: { r: 'Creative Director · Mokino', d: "Leads Mokino's creative direction, conceiving and designing memorable visual experiences that turn spaces into settings that connect with people.", a: ["Conceive each event's creative concept", 'Design decor, palettes and atmospheres', 'Create moodboards and visual proposals for clients', 'Oversee setup to protect every detail', 'Select materials, flowers and decorative elements', "Maintain Mokino's visual identity and style"] } },
    paloma: { img: 'paloma-arvizu', name: 'Paloma Arvizu', units: ['Valpa', 'Valkibah'],
      es: { r: 'Coordinadora de Contenido Digital & Atención al Cliente', d: 'Fortalece la comunicación entre Valkibah y su comunidad mediante contenido de valor y una atención cercana, acompañando a cada cliente durante toda su experiencia.', a: ['Planear y crear contenido para redes y canales digitales', 'Dar atención y seguimiento personalizado a clientes', 'Coordinar el proceso de las invitaciones digitales de Valpa', 'Resolver dudas y recopilar información de los eventos', 'Gestionar la comunidad y las conversaciones con clientes', 'Recoger opiniones para mejorar la experiencia'] },
      en: { r: 'Digital Content & Customer Care Coordinator', d: 'Strengthens communication between Valkibah and its community through valuable content and close attention, accompanying every client throughout their experience.', a: ['Plan and create content for social and digital channels', 'Provide personalized client care and follow-up', "Coordinate Valpa's digital invitation process", 'Answer questions and gather event information', 'Manage community and client conversations', 'Collect feedback to improve the experience'] } }
  };

  const UI = {
    es: { hist: 'Conoce nuestra historia completa', org_lead: '¿Quién está detrás de cada unidad?', org_btn: 'Ver organigrama', org_eyebrow: 'Estructura', org_title: 'Organigrama de <em>Grupo Valkibah</em>', org_sub: 'Una matriz, tres unidades de negocio y personas comprometidas en cada una. Toca a cada integrante para conocer su rol.', org_root: 'Matriz', org_dir: 'Dirección', org_soon: 'Equipo en formación', prev: 'Anterior', next: 'Siguiente', more: 'Saber más', val_eyebrow: 'Lo que nos guía', val_t1: 'Nuestra esencia,', val_t2: 'nuestros valores', val_lede: 'Ocho principios que guían cada decisión, cada proyecto y cada conversación en Grupo Valkibah.', close: 'Cerrar', eyebrow: 'Nuestra historia', title: 'De una boda a un <em>ecosistema</em>', sub: 'Un recorrido por los momentos, las personas y las decisiones que dieron vida a Grupo Valkibah.', endp: 'Y esta historia sigue escribiéndose contigo.', cta: 'Construyamos algo juntos', acts: 'Actividades principales', units: 'Unidades donde participa' },
    en: { hist: 'Discover our full story', org_lead: 'Who is behind each unit?', org_btn: 'View org chart', org_eyebrow: 'Structure', org_title: 'Grupo Valkibah <em>org chart</em>', org_sub: 'One parent company, three business units and committed people in each. Tap any member to learn about their role.', org_root: 'Parent company', org_dir: 'Leadership', org_soon: 'Team being formed', prev: 'Previous', next: 'Next', more: 'Learn more', val_eyebrow: 'What guides us', val_t1: 'Our essence,', val_t2: 'our values', val_lede: 'Eight principles that guide every decision, every project and every conversation at Grupo Valkibah.', close: 'Close', eyebrow: 'Our story', title: 'From a wedding to an <em>ecosystem</em>', sub: 'A journey through the moments, people and decisions that gave life to Grupo Valkibah.', endp: 'And this story is still being written with you.', cta: "Let's build something together", acts: 'Key activities', units: 'Business units' }
  };

  const lang = () => ((document.documentElement.lang || 'es').slice(0, 2) === 'en' ? 'en' : 'es');
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const idx = () => (lang() === 'en' ? 1 : 0);

  function renderValues() {
    const g = document.getElementById('valoresGrid');
    if (!g) return;
    const l = idx() + 1;
    g.innerHTML = VALUES.map((v) => {
      const x = v[l];
      return '<article class="valor-card"><span class="valor-card-icon">' + ICON[v[0]] + '</span><h4>' + x.t + '</h4><p class="valor-card-tag">' + x.g + '</p><p class="valor-card-text">' + x.d + '</p></article>';
    }).join('');
  }

  function timelineHTML() {
    const L = lang(); const i = idx(); const u = UI[L];
    const years = TL.map((s) => s.y).filter((y, k, arr) => arr.indexOf(y) === k);
    const items = TL.map((s, n) => {
      const c = s[L];
      const text = c.slice(1).map((p) => '<p>' + esc(p) + '</p>').join('');
      const quote = s.quote ? '<p class="tl-quote">' + esc(s.quote[i]) + '</p>' : '';
      const chips = s.chips ? '<div class="tl-chips">' + s.chips.map((k) => '<span class="tl-chip ' + k[1] + '">' + esc(Array.isArray(k[0]) ? k[0][i] : k[0]) + '</span>').join('') + '</div>' : '';
      const extra = s.extra ? '<p style="margin-top:.7rem">' + esc(s.extra[0][i]) + '<br>' + esc(s.extra[1][i]) + '</p>' : '';
      const badge = s.badge ? '<span class="tl-badge">' + esc(s.badge[i]) + '</span>' : '';
      return '<div class="tl-item' + (s.key ? ' is-key' : '') + '" data-y="' + s.y + '"><span class="tl-node">' + ICON[s.ic] + '</span><div class="tl-card" data-n="' + String(n + 1).padStart(2, '0') + '"><span class="tl-date">' + esc(s.when[i]) + '</span>' + badge + '<h4>' + esc(c[0]) + '</h4>' + text + quote + chips + extra + '</div></div>';
    }).join('');
    const yb = years.map((y) => '<button type="button" class="vk-year" data-year="' + y + '">' + y + '</button>').join('');
    return '<div class="vk-hist-head"><span class="vk-eyebrow">' + u.eyebrow + '</span><h3 id="vkHistTitle">' + u.title + '</h3><p>' + u.sub + '</p>' +
      '<div class="vk-nav"><div class="vk-years">' + yb + '</div><div class="vk-steps"><span class="vk-count"><b id="vkCur">1</b> / ' + TL.length + '</span><button type="button" class="vk-step" data-step="-1" aria-label="' + u.prev + '">' + I('<path d="M5 12l5-5 5 5"/>') + '</button><button type="button" class="vk-step" data-step="1" aria-label="' + u.next + '">' + I('<path d="M5 8l5 5 5-5"/>') + '</button></div></div>' +
      '<div class="vk-progress"><span id="vkProg"></span></div></div>' +
      '<div class="vk-scroll" id="vkScroll"><div class="tl"><div class="tl-line"></div><div class="tl-fill" id="tlFill"></div>' + items + '</div><div class="tl-end"><p>' + u.endp + '</p><a href="#contacto" data-close>' + u.cta + '</a></div></div>';
  }

  function orgHTML() {
    const L = lang(); const u = UI[L]; const en = L === 'en';
    const person = (k, short) => '<button type="button" class="org-person" data-role="' + k + '"><img src="assets/img/team/' + ROLES[k].img + '.png" alt=""><span><b>' + ROLES[k].name + '</b><em>' + short + '</em></span></button>';
    const unit = (cls, logo, name, tag) => '<div class="org-unit ' + cls + '">' + logo + '<b>' + name + '</b><em>' + tag + '</em></div>';
    const img = (f) => '<img src="assets/img/' + f + '.png" alt="">';
    const mobIcon = ICON.phone;
    return '<div class="vk-hist-head"><span class="vk-eyebrow">' + u.org_eyebrow + '</span><h3 id="vkOrgTitle">' + u.org_title + '</h3><p>' + u.org_sub + '</p></div>' +
      '<div class="vk-scroll"><div class="org">' +
      '<div class="org-root">' + img('logo-valkibah') + '<b>Grupo Valkibah</b><em>' + u.org_root + '</em></div><i class="org-stem"></i>' +
      '<div class="org-dir"><span class="org-dir-label">' + u.org_dir + '</span>' +
      person('salma', en ? 'Founder · Brand, sales and operations' : 'Fundadora · Marca, ventas y operaciones') +
      person('eduardo', en ? 'Operations Coordinator' : 'Coordinador de operaciones') + '</div><i class="org-stem"></i>' +
      '<div class="org-branch">' +
      '<div class="org-col">' + unit('gold', img('logo-mokino'), 'Mokino', en ? 'Event decoration' : 'Decoración para eventos') + '<i class="org-stem short"></i>' + person('mayo', en ? 'Creative Director' : 'Directora creativa') + '</div>' +
      '<div class="org-col">' + unit('cyan', img('logo-valpa'), 'Valpa', en ? 'Digital invitations' : 'Invitaciones digitales') + '<i class="org-stem short"></i>' + person('paloma', en ? 'Digital content and customer care' : 'Contenido digital y atención al cliente') + '</div>' +
      '<div class="org-col">' + unit('mint', '<span class="org-unit-ico">' + mobIcon + '</span>', 'Mobah', en ? 'Mobile app · In development' : 'Aplicación móvil · En desarrollo') + '<i class="org-stem short"></i><div class="org-soon">' + u.org_soon + '</div></div>' +
      '</div></div></div>';
  }

  function roleHTML(k) {
    const r = ROLES[k]; const L = lang(); const u = UI[L]; const d = r[L];
    return '<div class="vk-role-body"><div class="vk-role-top"><img src="assets/img/team/' + r.img + '.png" alt="' + esc(r.name) + '"><div><h3 id="vkRoleTitle">' + esc(r.name) + '</h3><p>' + esc(d.r) + '</p></div></div>' +
      '<div class="vk-role-content"><p>' + esc(d.d) + '</p><h5>' + u.acts + '</h5><ul class="vk-acts">' + d.a.map((a) => '<li>' + esc(a) + '</li>').join('') + '</ul><h5>' + u.units + '</h5><div class="vk-units">' + r.units.map((x) => '<span class="tl-chip ' + (x === 'Mokino' ? 'gold' : x === 'Valpa' ? 'cyan' : '') + '">' + x + '</span>').join('') + '</div></div></div>';
  }

  /* ================= Modal engine ================= */
  let modal, lastFocus, hist;
  function closeModal() {
    if (!modal) return;
    const m = modal; modal = null;
    m.classList.remove('is-open');
    document.body.classList.remove('vk-lock');
    setTimeout(() => m.remove(), 600);
    document.removeEventListener('keydown', onKey);
    hist = null;
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    resetCarouselScroll();
  }
  /* Enfocar un botón dentro del carrusel puede desplazar su contenedor
     (overflow oculto) y sacar de vista las flechas y los puntos. */
  function resetCarouselScroll() {
    document.querySelectorAll('.carousel, .carousel-slide, .carousel-media').forEach((el) => { el.scrollTop = 0; el.scrollLeft = 0; });
  }
  function onKey(e) {
    if (e.key === 'Escape') return closeModal();
    if (hist && (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'PageDown' || e.key === 'PageUp')) {
      e.preventDefault(); hist.step(e.key === 'ArrowDown' || e.key === 'PageDown' ? 1 : -1);
    }
    if (e.key === 'Tab' && modal) {
      const f = modal.querySelectorAll('a[href],button');
      if (!f.length) return;
      const a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    }
  }
  function openModal(inner, cls, labelId, returnTo) {
    if (modal) return;
    lastFocus = returnTo || document.activeElement;
    modal = document.createElement('div');
    modal.className = 'vk-modal';
    modal.innerHTML = '<div class="vk-backdrop" data-close></div><div class="vk-dialog ' + cls + '" role="dialog" aria-modal="true" aria-labelledby="' + labelId + '"><button class="vk-close" type="button" data-close aria-label="' + UI[lang()].close + '">' + I('<path d="M4 4l12 12M16 4L4 16"/>') + '</button>' + inner + '</div>';
    document.body.appendChild(modal);
    document.body.classList.add('vk-lock');
    modal.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeModal(); });
    document.addEventListener('keydown', onKey);
    requestAnimationFrame(() => requestAnimationFrame(() => { modal.classList.add('is-open'); modal.querySelector('.vk-close').focus(); }));
  }

  function openHistory() {
    openModal(timelineHTML(), '', 'vkHistTitle');
    const sc = modal.querySelector('#vkScroll'); const tl = modal.querySelector('.tl');
    const fill = modal.querySelector('#tlFill'); const prog = modal.querySelector('#vkProg'); const cur = modal.querySelector('#vkCur');
    const items = Array.prototype.slice.call(modal.querySelectorAll('.tl-item'));
    const yearBtns = modal.querySelectorAll('.vk-year');
    let active = -1;
    const setActive = (n) => {
      if (n === active) return;
      active = n; cur.textContent = n + 1;
      items.forEach((it, k) => it.classList.toggle('is-active', k === n));
      yearBtns.forEach((b) => b.classList.toggle('is-active', Number(b.dataset.year) === TL[n].y));
    };
    const update = () => {
      const vp = sc.getBoundingClientRect(); const tr = tl.getBoundingClientRect();
      const mark = vp.top + vp.height * 0.5;
      fill.style.height = Math.max(0, Math.min(tr.height, mark - tr.top)) + 'px';
      prog.style.width = (sc.scrollTop / Math.max(1, sc.scrollHeight - sc.clientHeight) * 100) + '%';
      let a = 0;
      items.forEach((it, k) => {
        const r = it.getBoundingClientRect();
        if (r.top < vp.top + vp.height * 0.82 && !it.classList.contains('is-in')) {
          it.classList.add('is-in'); setTimeout(() => it.classList.add('is-settled'), 1000);
        }
        if (r.top + 40 < mark) a = k;
      });
      setActive(a);
    };
    const goTo = (k) => {
      k = Math.max(0, Math.min(items.length - 1, k));
      const r = items[k].getBoundingClientRect(); const v = sc.getBoundingClientRect();
      sc.scrollTo({ top: sc.scrollTop + (r.top - v.top) - v.height * 0.28, behavior: 'smooth' });
    };
    hist = { step: (d) => goTo((active < 0 ? 0 : active) + d) };
    modal.querySelectorAll('.vk-step').forEach((b) => b.addEventListener('click', () => hist.step(Number(b.dataset.step))));
    yearBtns.forEach((b) => b.addEventListener('click', () => goTo(items.findIndex((it) => it.dataset.y === b.dataset.year))));
    items.forEach((it, k) => {
      it.addEventListener('click', (e) => { if (!e.target.closest('a')) goTo(k); });
      const card = it.querySelector('.tl-card');
      card.addEventListener('pointermove', (e) => {
        if (e.pointerType !== 'mouse') return;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--ry', (((e.clientX - r.left) / r.width - 0.5) * 6).toFixed(2) + 'deg');
        card.style.setProperty('--rx', ((0.5 - (e.clientY - r.top) / r.height) * 6).toFixed(2) + 'deg');
      });
      card.addEventListener('pointerleave', () => { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); });
    });
    let raf; sc.addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); }, { passive: true });
    setTimeout(update, 80);
  }

  function openOrg() { openModal(orgHTML(), 'vk-org', 'vkOrgTitle'); }

  function applyStatic() {
    const u = UI[lang()];
    document.querySelectorAll('[data-vk="historia_btn"]').forEach((e) => { e.textContent = u.hist; });
    document.querySelectorAll('[data-vk="org_btn"]').forEach((e) => { e.textContent = u.org_btn; });
    document.querySelectorAll('[data-vk="more_btn"]').forEach((e) => { e.textContent = u.more; });
    ['val_eyebrow', 'val_t1', 'val_t2', 'val_lede', 'org_lead'].forEach((k) => {
      const el = document.querySelector('[data-vk="' + k + '"]');
      if (el) el.textContent = u[k];
    });
    renderValues();
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('#openHistoria')) return openHistory();
    if (e.target.closest('#openOrg')) return openOrg();
    const p = e.target.closest('.org-person');
    if (p && modal) {
      const back = lastFocus; const k = p.dataset.role;
      closeModal(); openModal(roleHTML(k), 'vk-role', 'vkRoleTitle', back); return;
    }
    const b = e.target.closest('.team-more');
    if (b) openModal(roleHTML(b.dataset.role), 'vk-role', 'vkRoleTitle');
  });

  applyStatic();
  new MutationObserver(applyStatic).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();
