/* ======================================================
   VALKIBAH — MAIN.JS
   Tema, idioma (ES/EN), navbar, menú móvil, revelado en
   scroll, selector de experiencias, pila de equipo,
   scrollspy, botón volver arriba, formulario de contacto
   ====================================================== */

(function () {
  'use strict';

  /* Preferencia de movimiento reducido — se consulta una sola vez y se
     reutiliza en el carrusel, el parallax y cualquier otra animación. */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ======================================================
     Diccionario de traducción
     ====================================================== */
  const translations = {
    es: {
      page_title: 'Valkibah — Unidos para conectar, inspirar y crear contigo',
      page_description: 'Valkibah es un Venture Builder que conecta personas, ideas y talento para crear productos, experiencias y negocios con impacto.',
      skip_link: 'Saltar al contenido',
      nav_esencia: 'Esencia', nav_ecosistema: 'Ecosistema', nav_experiencias: 'Experiencias',
      nav_equipo: 'Equipo', nav_contacto: 'Contacto', nav_cta: 'Hablemos',
      theme_toggle_aria: 'Cambiar tema', nav_toggle_aria: 'Abrir menú',
      hero_eyebrow: 'Venture Builder · Guanajuato, México',
      hero_pre: 'Unidos para', hero_gradient: 'conectar', hero_em: 'inspirar', hero_tail: 'y crear contigo.',
      hero_lede: 'Somos un ecosistema de personas apasionadas por construir. Acompañamos a marcas, equipos y soñadores desde una idea hasta convertirla en una solución real — con la calidez de quien construye contigo, no para ti.',
      hero_cta_primary: 'Hablemos de tu idea', hero_cta_secondary: 'Conoce el ecosistema', hero_scroll: 'Descubre más',

      esencia_eyebrow: 'Nuestra esencia',
      esencia_title_1: 'No construimos empresas.', esencia_title_2: 'Construimos relaciones de confianza.',
      esencia_lede: 'Valkibah es un venture builder que reúne distintas unidades de negocio bajo una misma visión: conectar personas, ideas y talento para crear productos, experiencias y negocios con impacto. No llegamos a vender un servicio — llegamos a acompañarte desde la idea hasta la solución real.',
      esencia_mision_label: 'Misión',
      esencia_mision_text: 'Conectar personas, ideas y talento para construir productos, experiencias y negocios que generen un impacto real — acompañando a cada cliente desde la primera idea hasta la solución construida.',
      esencia_vision_label: 'Visión',
      esencia_vision_text: 'Ser reconocidos como el venture builder que convierte ideas en negocios con propósito, construyendo un ecosistema de marcas y personas que crecen y crean juntas.',
      valor_cercania: 'Cercanía', valor_confianza: 'Confianza', valor_innovacion: 'Innovación',
      valor_profesionalismo: 'Profesionalismo', valor_elegancia: 'Elegancia', valor_humanidad: 'Humanidad',
      valor_cercania_desc: 'Escuchamos primero y construimos a tu lado, sin distancia ni frialdad.',
      valor_confianza_desc: 'Cumplimos lo que prometemos, y lo demostramos en cada entrega.',
      valor_innovacion_desc: 'Buscamos ideas frescas y soluciones que se adelantan a lo esperado.',
      valor_profesionalismo_desc: 'Cuidamos cada detalle con seriedad, orden y compromiso.',
      valor_elegancia_desc: 'Diseñamos con buen gusto, simplicidad y atención estética.',
      valor_humanidad_desc: 'Ponemos a las personas en el centro de cada decisión.',
      historia_title: 'Nuestra historia',
      historia_text: 'Valkibah nace de la unión de personas que antes construían por separado: quienes diseñaban experiencias para eventos, quienes desarrollaban tecnología y quienes creían que las marcas también pueden tener alma. Un día decidimos dejar de trabajar en paralelo y empezar a construir juntos — así nació un ecosistema, no una empresa más.',
      historia_quote: '"Detrás de cada proyecto hay personas con sueños. Nuestro trabajo es acompañarlas, inspirarlas y construir junto a ellas."',

      ecosistema_eyebrow: 'Nuestro ecosistema',
      ecosistema_title_1: 'Un mismo propósito.', ecosistema_title_2: 'Distintas formas de crearlo.',
      ecosistema_lede: 'Cada unidad de negocio tiene su propia personalidad, pero todas comparten el mismo origen y la misma forma de trabajar: primero las personas, después las soluciones.',
      ecosistema_hub_label: 'El punto de partida',
      brand_mobah_status: 'En desarrollo',
      brand_mobah_tag: 'Producto propio del ecosistema Valkibah',
      brand_mobah_text: 'Nuestra aplicación móvil propia, actualmente en desarrollo. No es un servicio que ofrecemos — es un producto que estamos construyendo.',
      brand_valpa_tag: 'Invitaciones digitales · Próx. Marketing & Branding',
      brand_valpa_text: 'Moderna, creativa y tecnológica. Hoy diseña invitaciones digitales; pronto sumará marketing digital, branding y soluciones digitales.',
      brand_mokino_tag: 'Decoración para todo tipo de eventos',
      brand_mokino_text: 'Elegancia, creatividad y calidez para transformar espacios en experiencias memorables. Enfocada únicamente en decoración.',
      brand_link_more: 'Conocer más →', brand_link_ig: 'Ver Instagram →',

      experiencias_eyebrow: 'Experiencias',
      experiencias_title_1: 'Cada proyecto gira', experiencias_title_2: 'alrededor de las personas.',
      experiencias_lede: 'No entregamos servicios sueltos. Diseñamos experiencias — para un evento que se vive una sola vez, o para un producto tecnológico que crecerá contigo durante años. Elige qué quieres conocer.',
      exp_sel_eventos_title: 'Experiencias para Eventos', exp_sel_eventos_sub: 'Coordinación, producción y momentos memorables',
      exp_sel_tech_title: 'Experiencias Tecnológicas', exp_sel_tech_sub: 'Producto, software e inteligencia artificial',
      exp_ev_1_title: 'Coordinación de eventos', exp_ev_1_text: 'Cada detalle resuelto para que tú solo tengas que disfrutar.',
      exp_ev_2_title: 'Wedding Planner', exp_ev_2_text: 'Acompañamiento completo para el día más importante.',
      exp_ev_3_title: 'Producción', exp_ev_3_text: 'Escenografía, montaje y ejecución impecable.',
      exp_ev_4_title: 'Planeación integral', exp_ev_4_text: 'Una visión completa, desde la idea hasta el último detalle.',
      exp_ev_5_title: 'Renta de mobiliario', exp_ev_5_text: 'Piezas que visten el espacio con estilo y calidez.',
      exp_tech_1_title: 'Apps móviles', exp_tech_1_text: 'Productos que la gente usa todos los días.',
      exp_tech_2_title: 'Plataformas web', exp_tech_2_text: 'Experiencias rápidas, claras y a tu medida.',
      exp_tech_3_title: 'Arquitectura, MVPs y Software a Medida',
      exp_tech_3_text: 'Diseñamos la arquitectura, construimos tu software a la medida y validamos ideas con MVPs reales — la base técnica correcta para crecer.',
      exp_tech_4_title: 'Automatización de procesos', exp_tech_4_text: 'Menos tareas repetitivas, más tiempo para crear.',
      exp_tech_5_title: 'Inteligencia Artificial', exp_tech_5_text: 'Modelos y datos al servicio de tu producto.',
      exp_tech_6_title: 'Consultoría tecnológica', exp_tech_6_text: 'Claridad y dirección antes de escribir una línea de código.',
      exp_tech_7_title: 'Estrategia de producto', exp_tech_7_text: 'Definimos qué construir, y sobre todo, por qué.',

      metodologia_eyebrow: 'Nuestra metodología',
      metodologia_title_1: 'Primero entendemos.', metodologia_title_2: 'Después construimos.',
      metodologia_lede: 'No desarrollamos por desarrollar. Cada proyecto sigue el mismo camino, sin importar si es un evento o una plataforma tecnológica.',
      rail_1_title: 'Conectamos', rail_1_text: 'Escuchamos tu idea y conectamos con tu visión, tu equipo y tu propósito.',
      rail_2_title: 'Comprendemos', rail_2_text: 'Entendemos el problema real antes de proponer cualquier solución.',
      rail_3_title: 'Diseñamos', rail_3_text: 'Definimos la estrategia y diseñamos la experiencia correcta.',
      rail_4_title: 'Construimos', rail_4_text: 'Desarrollamos la solución con calidad y atención al detalle.',
      rail_5_title: 'Evolucionamos', rail_5_text: 'Acompañamos el crecimiento del proyecto junto contigo.',

      equipo_eyebrow: 'Equipo',
      equipo_title_1: 'Detrás de Valkibah,', equipo_title_2: 'personas apasionadas por crear.',
      equipo_lede: 'Cuatro personas, un mismo propósito: acompañarte desde la idea hasta la solución construida. Desplázate para conocerlas.',
      equipo_group_caption: 'El equipo completo de Valkibah',
      carousel_aria_label: 'Equipo Valkibah',
      carousel_intro_eyebrow: 'El ecosistema, en persona',
      carousel_intro_title: 'El equipo completo de Valkibah',
      carousel_intro_text: 'Cuatro personas, cuatro formas de aportar, un mismo propósito. Conoce a cada una.',
      carousel_prev_aria: 'Anterior', carousel_next_aria: 'Siguiente',
      carousel_pause_aria: 'Pausar carrusel', carousel_play_aria: 'Reanudar carrusel',
      carousel_swipe_hint: 'Desliza para ver más',
      team_salma_role: 'Fundadora · Estrategia de Marca, Ventas y Operaciones',
      team_salma_desc: 'Define la estrategia comercial y de crecimiento del ecosistema, impulsando nuevas oportunidades de negocio y asegurando que cada unidad mantenga una identidad sólida y una operación eficiente.',
      team_salma_quote: '"Las grandes ideas necesitan dirección, pasión y personas comprometidas para convertirse en negocios con impacto."',
      team_eduardo_role: 'Fundador · Estrategia de Producto, Tecnología e Innovación',
      team_eduardo_desc: 'Responsable de la visión tecnológica de Valkibah y del desarrollo de soluciones digitales. Lidera la estrategia de producto, la arquitectura tecnológica y la evolución del ecosistema, asegurando que cada iniciativa combine innovación, escalabilidad y un enfoque centrado en las personas.',
      team_eduardo_quote: '"Cada idea tiene el potencial de transformar vidas. En Valkibah construimos con propósito, conectando tecnología, creatividad y personas para hacerla realidad."',
      team_mayo_role: 'Directora Creativa · Mokino',
      team_mayo_desc: 'Lidera la dirección creativa de Mokino, conceptualizando y diseñando experiencias visuales memorables. Su trabajo transforma espacios en escenarios que conectan emocionalmente con las personas y hacen de cada evento una experiencia única.',
      team_mayo_quote: '"La creatividad florece cuando nace desde el corazón y se convierte en experiencias que las personas nunca olvidan."',
      team_paloma_role: 'Coordinadora de Contenido Digital & Atención al Cliente',
      team_paloma_desc: 'Responsable de fortalecer la comunicación entre Valkibah y su comunidad mediante contenido de valor y una atención cercana. Su enfoque es construir relaciones de confianza y acompañar a cada cliente durante toda su experiencia.',
      team_paloma_quote: '"Cada conversación es una oportunidad para crear confianza, conectar con las personas y construir algo extraordinario."',

      colaboradores_eyebrow: 'Colaboradores',
      colaboradores_title_1: 'Marcas y aliados', colaboradores_title_2: 'que crecen con nosotros.',
      colaboradores_lede: 'Esta sección está en construcción. Muy pronto verás aquí a las empresas, marcas y profesionales que forman parte de nuestra red de confianza.',
      colaboradores_cta_text: '¿Quieres que tu marca aparezca aquí?', colaboradores_cta_link: 'Hablemos.',

      testimonios_eyebrow: 'Testimonios',
      testimonios_title_1: 'Historias que aún', testimonios_title_2: 'estamos construyendo juntos.',
      testimonios_lede: 'Muy pronto, las personas y marcas con las que trabajamos compartirán aquí su experiencia con Valkibah.',
      testimonios_ghost_text: 'Pronto compartiremos aquí las historias de quienes han confiado en nosotros.',

      contacto_eyebrow: 'Contacto',
      contacto_title_1: 'Hablemos de tu idea', contacto_title_2: 'y construyámosla juntos.',
      contacto_lede: 'Cuéntanos qué estás imaginando. Nosotros ponemos la estrategia, la tecnología y las manos para construirlo contigo.',
      contacto_call: 'Llamar', contacto_email: 'Correo', contacto_location: 'Ubicación',
      form_name: 'Nombre', form_name_ph: '¿Cómo te llamas?',
      form_email: 'Correo',
      form_phone: 'Teléfono', form_optional: '(opcional)', form_phone_ph: '10 dígitos',
      form_message: 'Cuéntanos tu idea', form_message_ph: '¿Qué te gustaría construir?',
      form_submit: 'Enviar mensaje',
      form_note: 'Al enviar, se abrirá tu aplicación de correo con el mensaje listo para confirmar.',
      form_success: 'Se abrió tu aplicación de correo. Solo confirma el envío para que recibamos tu mensaje.',

      footer_tagline: 'Unidos para conectar, inspirar y crear contigo.',
      footer_nav_title: 'Navegación', footer_ecosistema_title: 'Ecosistema', footer_contact_title: 'Contacto',
      footer_rights_pre: '©', footer_rights: 'Todos los derechos reservados.',
      footer_privacy: 'Aviso de privacidad', footer_terms: 'Términos y condiciones',
      back_to_top_aria: 'Volver arriba'
    },

    en: {
      page_title: 'Valkibah — United to connect, inspire and create with you',
      page_description: 'Valkibah is a Venture Builder that connects people, ideas and talent to create products, experiences and businesses with impact.',
      skip_link: 'Skip to content',
      nav_esencia: 'Essence', nav_ecosistema: 'Ecosystem', nav_experiencias: 'Experiences',
      nav_equipo: 'Team', nav_contacto: 'Contact', nav_cta: "Let's talk",
      theme_toggle_aria: 'Toggle theme', nav_toggle_aria: 'Open menu',
      hero_eyebrow: 'Venture Builder · Guanajuato, Mexico',
      hero_pre: 'United to', hero_gradient: 'connect', hero_em: 'inspire', hero_tail: 'and create with you.',
      hero_lede: "We're an ecosystem of people passionate about building. We accompany brands, teams and dreamers from an idea all the way to a real solution — with the warmth of someone who builds with you, not for you.",
      hero_cta_primary: "Let's talk about your idea", hero_cta_secondary: 'Explore the ecosystem', hero_scroll: 'Discover more',

      esencia_eyebrow: 'Our essence',
      esencia_title_1: "We don't build companies.", esencia_title_2: 'We build relationships of trust.',
      esencia_lede: 'Valkibah is a venture builder that brings together different business units under one vision: connecting people, ideas and talent to create products, experiences and businesses with impact. We never just sell a service — we accompany you from the idea to the real solution.',
      esencia_mision_label: 'Mission',
      esencia_mision_text: 'Connect people, ideas and talent to build products, experiences and businesses that create real impact — accompanying every client from the first idea to the finished solution.',
      esencia_vision_label: 'Vision',
      esencia_vision_text: 'To be recognized as the venture builder that turns ideas into purposeful businesses, building an ecosystem of brands and people who grow and create together.',
      valor_cercania: 'Closeness', valor_confianza: 'Trust', valor_innovacion: 'Innovation',
      valor_profesionalismo: 'Professionalism', valor_elegancia: 'Elegance', valor_humanidad: 'Humanity',
      valor_cercania_desc: 'We listen first and build alongside you, with no distance or coldness.',
      valor_confianza_desc: 'We deliver on what we promise, and prove it with every milestone.',
      valor_innovacion_desc: 'We look for fresh ideas and solutions that stay ahead of what is expected.',
      valor_profesionalismo_desc: 'We handle every detail with seriousness, order and commitment.',
      valor_elegancia_desc: 'We design with good taste, simplicity and attention to aesthetics.',
      valor_humanidad_desc: 'We put people at the center of every decision.',
      historia_title: 'Our story',
      historia_text: 'Valkibah was born from the union of people who used to build separately: those who designed event experiences, those who developed technology, and those who believed brands can have a soul too. One day we decided to stop working in parallel and start building together — that is how an ecosystem was born, not just another company.',
      historia_quote: '"Behind every project there are people with dreams. Our job is to accompany them, inspire them, and build alongside them."',

      ecosistema_eyebrow: 'Our ecosystem',
      ecosistema_title_1: 'One shared purpose.', ecosistema_title_2: 'Different ways of creating it.',
      ecosistema_lede: 'Each business unit has its own personality, but they all share the same origin and the same way of working: people first, solutions second.',
      ecosistema_hub_label: 'The starting point',
      brand_mobah_status: 'In development',
      brand_mobah_tag: "Valkibah's own product",
      brand_mobah_text: "Our own mobile app, currently in development. It isn't a service we offer — it's a product we're building.",
      brand_valpa_tag: 'Digital invitations · Coming soon: Marketing & Branding',
      brand_valpa_text: 'Modern, creative and tech-driven. Today it designs digital invitations; soon it will add digital marketing, branding and digital solutions.',
      brand_mokino_tag: 'Decoration for every type of event',
      brand_mokino_text: 'Elegance, creativity and warmth that transform spaces into memorable experiences. Focused solely on decoration.',
      brand_link_more: 'Learn more →', brand_link_ig: 'View Instagram →',

      experiencias_eyebrow: 'Experiences',
      experiencias_title_1: 'Every project revolves', experiencias_title_2: 'around people.',
      experiencias_lede: "We don't deliver standalone services. We design experiences — for an event lived once, or a tech product that will grow with you for years. Choose what you'd like to explore.",
      exp_sel_eventos_title: 'Experiences for Events', exp_sel_eventos_sub: 'Coordination, production and memorable moments',
      exp_sel_tech_title: 'Technology Experiences', exp_sel_tech_sub: 'Product, software and artificial intelligence',
      exp_ev_1_title: 'Event coordination', exp_ev_1_text: 'Every detail handled so you only have to enjoy it.',
      exp_ev_2_title: 'Wedding Planning', exp_ev_2_text: 'Full support for the most important day.',
      exp_ev_3_title: 'Production', exp_ev_3_text: 'Staging, setup and flawless execution.',
      exp_ev_4_title: 'Full-scope planning', exp_ev_4_text: 'A complete vision, from idea to last detail.',
      exp_ev_5_title: 'Furniture rental', exp_ev_5_text: 'Pieces that dress the space with style and warmth.',
      exp_tech_1_title: 'Mobile apps', exp_tech_1_text: 'Products people use every single day.',
      exp_tech_2_title: 'Web platforms', exp_tech_2_text: 'Fast, clear experiences built to your needs.',
      exp_tech_3_title: 'Architecture, MVPs & Custom Software',
      exp_tech_3_text: 'We design the architecture, build your custom software and validate ideas with real MVPs — the right technical foundation to grow.',
      exp_tech_4_title: 'Process automation', exp_tech_4_text: 'Less repetitive work, more time to create.',
      exp_tech_5_title: 'Artificial Intelligence', exp_tech_5_text: 'Models and data at the service of your product.',
      exp_tech_6_title: 'Technology consulting', exp_tech_6_text: 'Clarity and direction before writing a single line of code.',
      exp_tech_7_title: 'Product strategy', exp_tech_7_text: 'We define what to build, and above all, why.',

      metodologia_eyebrow: 'Our methodology',
      metodologia_title_1: 'First we understand.', metodologia_title_2: 'Then we build.',
      metodologia_lede: "We don't develop for the sake of developing. Every project follows the same path, whether it's an event or a technology platform.",
      rail_1_title: 'Connect', rail_1_text: 'We listen to your idea and connect with your vision, your team and your purpose.',
      rail_2_title: 'Understand', rail_2_text: 'We understand the real problem before proposing any solution.',
      rail_3_title: 'Design', rail_3_text: 'We define the strategy and design the right experience.',
      rail_4_title: 'Build', rail_4_text: 'We develop the solution with quality and attention to detail.',
      rail_5_title: 'Evolve', rail_5_text: 'We accompany the project as it grows alongside you.',

      equipo_eyebrow: 'Team',
      equipo_title_1: 'Behind Valkibah,', equipo_title_2: 'people passionate about creating.',
      equipo_lede: 'Four people, one shared purpose: accompanying you from the idea to the finished solution. Scroll to meet them.',
      equipo_group_caption: 'The full Valkibah team',
      carousel_aria_label: 'Valkibah team',
      carousel_intro_eyebrow: 'The ecosystem, in person',
      carousel_intro_title: 'The full Valkibah team',
      carousel_intro_text: 'Four people, four ways of contributing, one shared purpose. Meet each of them.',
      carousel_prev_aria: 'Previous', carousel_next_aria: 'Next',
      carousel_pause_aria: 'Pause carousel', carousel_play_aria: 'Resume carousel',
      carousel_swipe_hint: 'Swipe to see more',
      team_salma_role: 'Founder · Brand Strategy, Sales & Operations',
      team_salma_desc: "Defines the ecosystem's commercial and growth strategy, driving new business opportunities and ensuring every unit keeps a solid identity and an efficient operation.",
      team_salma_quote: '"Great ideas need direction, passion and committed people to become businesses with impact."',
      team_eduardo_role: 'Founder · Product Strategy, Technology & Innovation',
      team_eduardo_desc: "Responsible for Valkibah's technology vision and the development of digital solutions. Leads product strategy, technical architecture and the evolution of the ecosystem, making sure every initiative combines innovation, scalability and a people-first approach.",
      team_eduardo_quote: '"Every idea has the potential to change lives. At Valkibah we build with purpose, connecting technology, creativity and people to make it real."',
      team_mayo_role: 'Creative Director · Mokino',
      team_mayo_desc: "Leads Mokino's creative direction, conceiving and designing memorable visual experiences. Her work transforms spaces into settings that connect emotionally with people and turn every event into a unique experience.",
      team_mayo_quote: '"Creativity flourishes when it comes from the heart and becomes experiences people never forget."',
      team_paloma_role: 'Digital Content & Customer Care Coordinator',
      team_paloma_desc: "Responsible for strengthening communication between Valkibah and its community through valuable content and close attention. Her focus is building relationships of trust and accompanying every client through their whole experience.",
      team_paloma_quote: '"Every conversation is a chance to build trust, connect with people and create something extraordinary."',

      colaboradores_eyebrow: 'Collaborators',
      colaboradores_title_1: 'Brands and partners', colaboradores_title_2: 'growing with us.',
      colaboradores_lede: "This section is under construction. Soon you'll see here the companies, brands and professionals that are part of our network of trust.",
      colaboradores_cta_text: 'Want your brand to appear here?', colaboradores_cta_link: "Let's talk.",

      testimonios_eyebrow: 'Testimonials',
      testimonios_title_1: "Stories we're still", testimonios_title_2: 'building together.',
      testimonios_lede: 'Soon, the people and brands we work with will share their experience with Valkibah right here.',
      testimonios_ghost_text: "We'll soon share here the stories of those who have trusted us.",

      contacto_eyebrow: 'Contact',
      contacto_title_1: "Let's talk about your idea", contacto_title_2: "and build it together.",
      contacto_lede: "Tell us what you're imagining. We bring the strategy, the technology and the hands to build it with you.",
      contacto_call: 'Call', contacto_email: 'Email', contacto_location: 'Location',
      form_name: 'Name', form_name_ph: "What's your name?",
      form_email: 'Email',
      form_phone: 'Phone', form_optional: '(optional)', form_phone_ph: '10 digits',
      form_message: 'Tell us your idea', form_message_ph: 'What would you like to build?',
      form_submit: 'Send message',
      form_note: "When you submit, your email app will open with the message ready to confirm.",
      form_success: 'Your email app just opened. Simply confirm sending so we receive your message.',

      footer_tagline: 'United to connect, inspire and create with you.',
      footer_nav_title: 'Navigation', footer_ecosistema_title: 'Ecosystem', footer_contact_title: 'Contact',
      footer_rights_pre: '©', footer_rights: 'All rights reserved.',
      footer_privacy: 'Privacy notice', footer_terms: 'Terms & conditions',
      back_to_top_aria: 'Back to top'
    }
  };

  const LANG_KEY = 'valkibah-lang';
  let currentLang = localStorage.getItem(LANG_KEY) || (navigator.language || 'es').slice(0, 2);
  if (!translations[currentLang]) currentLang = 'es';

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.es[key] || '';
  }

  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key] !== undefined) el.setAttribute('placeholder', translations[lang][key]);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria-label');
      if (translations[lang][key] !== undefined) el.setAttribute('aria-label', translations[lang][key]);
    });

    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    const playPauseBtn = document.getElementById('carouselPlayPause');
    if (playPauseBtn) {
      const isPaused = playPauseBtn.classList.contains('is-paused');
      playPauseBtn.setAttribute('aria-label', t(isPaused ? 'carousel_play_aria' : 'carousel_pause_aria'));
    }

    // Título de la pestaña y metadatos para compartir (SEO / redes sociales)
    document.title = translations[lang].page_title;
    const metaMap = {
      pageDescription: translations[lang].page_description,
      ogTitle: translations[lang].page_title,
      ogDescription: translations[lang].page_description,
      twitterTitle: translations[lang].page_title,
      twitterDescription: translations[lang].page_description
    };
    Object.keys(metaMap).forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.setAttribute('content', metaMap[id]);
    });
  }

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang-btn')));
  });

  applyLanguage(currentLang);

  /* ======================================================
     Tema claro / oscuro
     ====================================================== */
  const THEME_KEY = 'valkibah-theme';
  const root = document.documentElement;
  const themeToggleBtns = document.querySelectorAll('[data-theme-toggle]');

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  applyTheme(getPreferredTheme());

  themeToggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(next);
    });
  });

  /* ======================================================
     Navbar: estado al hacer scroll + scrollspy
     ====================================================== */
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar-links a[href^="#"]');
  const spySections = Array.from(navLinks)
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  function updateNavbar() {
    if (!navbar) return;
    navbar.classList.toggle('is-scrolled', window.scrollY > 24);
  }

  updateNavbar();
  window.addEventListener('scroll', updateNavbar, { passive: true });

  if ('IntersectionObserver' in window && spySections.length) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = '#' + entry.target.id;
          navLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === id));
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    spySections.forEach((sec) => spyObserver.observe(sec));
  }

  /* ======================================================
     Menú móvil
     ====================================================== */
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  /* ======================================================
     Selector de Experiencias (acordeón suave)
     ====================================================== */
  const expButtons = document.querySelectorAll('.exp-select-btn');

  expButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      const wrap = document.querySelector(`.exp-panel-wrap[data-panel="${target}"]`);
      const isOpen = btn.classList.contains('is-active');

      expButtons.forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-expanded', 'false');
      });
      document.querySelectorAll('.exp-panel-wrap').forEach((w) => w.classList.remove('is-open'));

      if (!isOpen) {
        btn.classList.add('is-active');
        btn.setAttribute('aria-expanded', 'true');
        if (wrap) {
          wrap.classList.add('is-open');
          setTimeout(() => {
            wrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 150);
        }
      }
    });
  });

  /* ======================================================
     Carrusel de equipo — auto-avance horizontal
     ====================================================== */
  const carousel = document.getElementById('teamCarousel');
  const carouselTrack = document.getElementById('carouselTrack');
  const carouselSlides = document.querySelectorAll('.carousel-slide');
  const carouselDots = document.querySelectorAll('.carousel-dot');
  const carouselPrev = document.getElementById('carouselPrev');
  const carouselNext = document.getElementById('carouselNext');
  const carouselPlayPause = document.getElementById('carouselPlayPause');

  if (carousel && carouselTrack && carouselSlides.length) {
    const SLIDE_DURATION = 5500;
    let activeIndex = 0;
    let autoplayId = null;
    let userPaused = prefersReducedMotion; // respeta la preferencia del sistema desde el inicio

    function renderSlide(index) {
      activeIndex = (index + carouselSlides.length) % carouselSlides.length;

      carouselTrack.style.transform = `translateX(-${activeIndex * 100}%)`;

      carouselSlides.forEach((slide, i) => {
        slide.classList.toggle('is-active', i === activeIndex);
      });

      carouselDots.forEach((dot) => {
        const isActive = Number(dot.getAttribute('data-index')) === activeIndex;
        // Se quita y se vuelve a agregar para reiniciar la animación de progreso
        dot.classList.remove('is-active');
        void dot.offsetWidth;
        dot.classList.toggle('is-active', isActive);
      });
    }

    function goNext() { renderSlide(activeIndex + 1); }
    function goPrev() { renderSlide(activeIndex - 1); }

    function startAutoplay() {
      if (userPaused) return;
      stopAutoplay();
      autoplayId = setInterval(goNext, SLIDE_DURATION);
      carousel.classList.remove('is-paused');
    }

    function stopAutoplay() {
      if (autoplayId) clearInterval(autoplayId);
      autoplayId = null;
    }

    function pauseAutoplay() {
      stopAutoplay();
      carousel.classList.add('is-paused');
    }

    renderSlide(0);
    startAutoplay();

    if (prefersReducedMotion && carouselPlayPause) {
      carousel.classList.add('is-paused');
      carouselPlayPause.classList.add('is-paused');
      carouselPlayPause.setAttribute('aria-pressed', 'true');
      carouselPlayPause.setAttribute('aria-label', t('carousel_play_aria'));
    }

    // Aviso de "desliza" — solo en móvil, solo la primera vez que la
    // persona llega a esta sección, y desaparece con cualquier interacción
    const swipeHint = document.getElementById('carouselSwipeHint');
    const SWIPE_HINT_KEY = 'valkibah-swipe-hint-seen';
    let swipeHintTimeout = null;

    function dismissSwipeHint() {
      if (!swipeHint) return;
      swipeHint.classList.remove('is-visible');
      localStorage.setItem(SWIPE_HINT_KEY, '1');
      if (swipeHintTimeout) clearTimeout(swipeHintTimeout);
    }

    if (swipeHint && !localStorage.getItem(SWIPE_HINT_KEY) && window.matchMedia('(max-width: 720px)').matches) {
      if ('IntersectionObserver' in window) {
        const hintObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setTimeout(() => swipeHint.classList.add('is-visible'), 700);
                swipeHintTimeout = setTimeout(dismissSwipeHint, 4200);
                hintObserver.disconnect();
              }
            });
          },
          { threshold: 0.4 }
        );
        hintObserver.observe(carousel);
      }
    }

    carouselNext.addEventListener('click', () => { goNext(); if (!userPaused) startAutoplay(); dismissSwipeHint(); });
    carouselPrev.addEventListener('click', () => { goPrev(); if (!userPaused) startAutoplay(); dismissSwipeHint(); });

    carouselDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        renderSlide(Number(dot.getAttribute('data-index')));
        if (!userPaused) startAutoplay();
        dismissSwipeHint();
      });
    });

    // Pausa suave al pasar el cursor o hacer focus — se reanuda al salir,
    // a menos que la persona haya pausado explícitamente con el botón
    carousel.addEventListener('mouseenter', pauseAutoplay);
    carousel.addEventListener('mouseleave', () => { if (!userPaused) startAutoplay(); });
    carousel.addEventListener('focusin', pauseAutoplay);
    carousel.addEventListener('focusout', () => { if (!userPaused) startAutoplay(); });

    // Botón de pausa/reproducción explícito, siempre visible, para dar
    // control total a quien no quiera que las tarjetas avancen solas
    if (carouselPlayPause) {
      carouselPlayPause.addEventListener('click', () => {
        userPaused = !userPaused;
        carouselPlayPause.classList.toggle('is-paused', userPaused);
        carouselPlayPause.setAttribute('aria-pressed', String(userPaused));
        carouselPlayPause.setAttribute('aria-label', t(userPaused ? 'carousel_play_aria' : 'carousel_pause_aria'));
        if (userPaused) pauseAutoplay();
        else startAutoplay();
        dismissSwipeHint();
      });
    }

    // Pausa cuando la sección no está visible en pantalla, para no
    // desperdiciar ciclos ni sorprender al usuario al volver a hacer scroll
    if ('IntersectionObserver' in window) {
      const carouselVisibility = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) { if (!userPaused) startAutoplay(); }
            else stopAutoplay();
          });
        },
        { threshold: 0.3 }
      );
      carouselVisibility.observe(carousel);
    }

    // Deslizar con gestos táctiles
    let touchStartX = 0;
    carouselTrack.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; pauseAutoplay(); dismissSwipeHint(); }, { passive: true });
    carouselTrack.addEventListener('touchend', (e) => {
      const delta = e.changedTouches[0].clientX - touchStartX;
      if (delta > 40) goPrev();
      else if (delta < -40) goNext();
      if (!userPaused) startAutoplay();
    }, { passive: true });
  }

  /* ======================================================
     Valores: descripción al pasar el cursor o al tocar
     ====================================================== */
  const valorChips = document.querySelectorAll('.valor-chip');

  valorChips.forEach((chip) => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const willOpen = !chip.classList.contains('is-open');
      valorChips.forEach((c) => c.classList.remove('is-open'));
      if (willOpen) chip.classList.add('is-open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.valor-chip')) {
      valorChips.forEach((c) => c.classList.remove('is-open'));
    }
  });

  /* ======================================================
     Botón volver arriba
     ====================================================== */
  const backToTop = document.getElementById('backToTop');

  if (backToTop) {
    window.addEventListener(
      'scroll',
      () => backToTop.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.8),
      { passive: true }
    );
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ======================================================
     Enlaces legales del footer (aún sin página propia):
     evitan el salto a inicio típico de href="#" vacío
     ====================================================== */
  document.querySelectorAll('.footer-legal-link').forEach((link) => {
    link.addEventListener('click', (e) => e.preventDefault());
  });

  /* ======================================================
     Año dinámico en el footer
     ====================================================== */
  const footerYear = document.getElementById('footerYear');
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  /* ======================================================
     Formulario de contacto
     El sitio es estático (GitHub Pages): al enviar se arma
     un mailto: con los datos para que la persona confirme
     el envío desde su propio correo. Para recibir mensajes
     sin ese paso, conecta el <form> a un servicio como
     Formspree o Getform.
     ====================================================== */
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = contactForm.nombre.value.trim();
      const correo = contactForm.correo.value.trim();
      const telefono = contactForm.telefono.value.trim();
      const mensaje = contactForm.mensaje.value.trim();

      const subject = encodeURIComponent(`Nuevo contacto desde el sitio — ${nombre}`);
      const body = encodeURIComponent(
        `Nombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono || 'No proporcionado'}\n\nMensaje:\n${mensaje}`
      );

      window.location.href = `mailto:grupovalkibah@gmail.com?subject=${subject}&body=${body}`;

      if (formNote) {
        formNote.textContent = t('form_success');
        formNote.classList.add('is-success');
      }
    });
  }

  /* ======================================================
     Parallax con el cursor — motivo de nodos conectados
     (hero y "Nuestra historia"). Solo en dispositivos con
     mouse real y sin preferencia de movimiento reducido.
     ====================================================== */
  function initParallax(containerEl, targetEl, maxOffset) {
    if (!containerEl || !targetEl) return;
    containerEl.addEventListener('mousemove', (e) => {
      const rect = containerEl.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const py = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetEl.style.setProperty('--px', px.toFixed(3));
      targetEl.style.setProperty('--py', py.toFixed(3));
    });
    containerEl.addEventListener('mouseleave', () => {
      targetEl.style.setProperty('--px', 0);
      targetEl.style.setProperty('--py', 0);
    });
  }

  if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
    initParallax(document.querySelector('.hero'), document.getElementById('heroVisual'));
    initParallax(document.querySelector('.historia'), document.getElementById('historiaVisual'));
  }

  /* ======================================================
     Revelado al hacer scroll
     ====================================================== */
  const revealEls = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }
})();
