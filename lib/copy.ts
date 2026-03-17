type BilingualString = { es: string; en: string };

export const copy: Record<string, BilingualString> = {
  // ─── Nav ──────────────────────────────────────────────────────────────
  "nav.work":     { es: "Trabajo",   en: "Work" },
  "nav.services": { es: "Servicios", en: "Services" },
  "nav.contact":  { es: "Contacto",  en: "Contact" },
  "nav.ailab":    { es: "AI Lab",    en: "AI Lab" },
  "nav.blog":     { es: "Blog",      en: "Blog" },
  "nav.toggle":   { es: "EN",        en: "ES" },

  // ─── Hero ─────────────────────────────────────────────────────────────
  "hero.eyebrow": {
    es: "Gabriel Moreno Azcona · Ciudad de México",
    en: "Gabriel Moreno Azcona · Mexico City",
  },
  "hero.headline.1": { es: "Infraestructura.", en: "Infrastructure." },
  "hero.headline.2": { es: "Sistemas.",        en: "Systems." },
  "hero.headline.3": { es: "IA.",              en: "AI." },
  "hero.sub1": {
    es: "Socio técnico bilingüe para empresas mexicanas que toman en serio su operación digital.",
    en: "Bilingual technical partner for Mexican businesses that take their digital operation seriously.",
  },
  "hero.sub2": {
    es: "Ingeniero de sistemas. Constructor de infraestructura. Socio de integración de IA.",
    en: "Systems thinker. Infrastructure builder. AI integration partner.",
  },
  "hero.cta.work":    { es: "Ver trabajo →",  en: "See my work →" },
  "hero.cta.contact": { es: "Contacto",        en: "Contact" },

  // ─── About ────────────────────────────────────────────────────────────
  "about.headline": {
    es: "No una agencia. No un freelancer de catálogo.",
    en: "Not an agency. Not a catalog freelancer.",
  },
  "about.body": {
    es: "Soy ingeniero en sistemas con más de 11 años construyendo infraestructura digital para empresas mexicanas — y seis años previos en operaciones técnicas para NBC Universal y CNBC en Nueva York. Trabajo directamente con fundadores y tomadores de decisiones. Sin intermediarios, sin equipos que rotan, sin juntas innecesarias. Una sola persona con visión completa de tu operación digital: desde el servidor hasta la interfaz, desde el dominio hasta la integración de IA.",
    en: "I'm a systems engineer with 11+ years building digital infrastructure for Mexican businesses — and six prior years in technical operations for NBC Universal and CNBC in New York. I work directly with founders and decision-makers. No intermediaries, no rotating teams, no unnecessary meetings. One person with complete visibility of your digital operation: from server to interface, from domain to AI integration.",
  },
  "about.stat.years":    { es: "11 años independiente",                 en: "11 years independent" },
  "about.stat.nbc":      { es: "NBC Universal / CNBC — Nueva York",     en: "NBC Universal / CNBC — New York" },
  "about.stat.location": { es: "Ciudad de México",                      en: "Mexico City" },
  "about.stat.langs":    { es: "Español nativo · Inglés profesional",   en: "Native Spanish · Full professional English" },

  // ─── Infraestructura digital definition ──────────────────────────────
  "infra.definition": {
    es: "Todo lo que hace que tu negocio funcione en internet: tu sitio, tu tienda, tu correo, tus herramientas, tus integraciones. No solo que existan — que estén bien construidas, que no fallen, que escalen cuando los necesites. La diferencia entre tener presencia digital y tener infraestructura digital es la diferencia entre una tarjeta de presentación y una operación real.",
    en: "Everything that makes your business run on the internet: your site, your store, your email, your tools, your integrations. Not just that they exist — that they're well built, that they don't fail, that they scale when you need them to. The difference between having a digital presence and having digital infrastructure is the difference between a business card and a real operation.",
  },

  // ─── Services ─────────────────────────────────────────────────────────
  "services.headline":      { es: "Lo que",    en: "What I" },
  "services.headline.verb": { es: "construyo.", en: "build." },
  "services.intro": {
    es: "No soy una agencia. Soy un ingeniero independiente que trabaja directamente con los tomadores de decisiones para construir infraestructura digital que funciona y dura.",
    en: "I'm not an agency. I'm an independent engineer who works directly with decision-makers to build digital infrastructure that works and lasts.",
  },

  "services.01.number": { es: "// 01", en: "// 01" },
  "services.01.title":  { es: "Infraestructura Web",  en: "Web Infrastructure" },
  "services.01.body": {
    es: "Sitios y plataformas construidos para durar. Implemento diseño con precisión técnica y me aseguro de que tu operación digital tenga bases sólidas.",
    en: "Sites and platforms built to last. I implement design with technical precision and ensure your digital operation has solid foundations.",
  },
  "services.01.bullets": {
    es: "WordPress / Gutenberg / Elementor\nShopify Store 2.0\nLaravel / PHP\nCSS / JS personalizado\nDigitalOcean / Hosting / DNS / SSL",
    en: "WordPress / Gutenberg / Elementor\nShopify Store 2.0\nLaravel / PHP\nCustom CSS / JS\nDigitalOcean / Hosting / DNS / SSL",
  },

  "services.02.number": { es: "// 02", en: "// 02" },
  "services.02.title":  { es: "Integración de IA",  en: "AI Integration" },
  "services.02.body": {
    es: "Herramientas de inteligencia artificial integradas en tu operación. Automatización real que ahorra tiempo y genera resultados medibles — no demos, no experimentos, implementaciones que funcionan.",
    en: "AI tools integrated into your operation. Real automation that saves time and generates measurable results — not demos, not experiments, implementations that work.",
  },
  "services.02.bullets": {
    es: "Integración API Claude / GPT\nChatbots para WhatsApp y web\nFlujos de contenido con IA\nAutomatización con Zapier / Make\nSEO potenciado con IA",
    en: "Claude / GPT API integration\nWhatsApp and web chatbots\nAI content workflows\nZapier / Make automation\nAI-powered SEO",
  },

  "services.03.number": { es: "// 03", en: "// 03" },
  "services.03.title":  { es: "Consultoría Técnica",  en: "Technical Consulting" },
  "services.03.body": {
    es: "Pensamiento de ingeniero aplicado a tus decisiones digitales. Si necesitas claridad técnica para tomar mejores decisiones — de tecnología, de proveedores, de infraestructura — trabajo contigo directamente.",
    en: "Engineer's thinking applied to your digital decisions. If you need technical clarity to make better decisions — on technology, vendors, infrastructure — I work with you directly.",
  },
  "services.03.bullets": {
    es: "Auditoría de infraestructura digital\nEstrategia de adopción de IA\nSelección de stack tecnológico\nSeguridad y mantenimiento\nSoporte técnico mensual",
    en: "Digital infrastructure audit\nAI adoption strategy\nTechnology stack selection\nSecurity and maintenance\nMonthly technical support",
  },

  // ─── Work ─────────────────────────────────────────────────────────────
  "work.section.tag":   { es: "// Trabajo selecto", en: "// Selected work" },
  "work.section.title": { es: "Proyectos.",          en: "Projects." },

  // ─── Extended client list ─────────────────────────────────────────────
  "clients.tag": { es: "// Clientes", en: "// Clients" },

  // ─── Home CTA strip ───────────────────────────────────────────────────
  "cta.headline": {
    es: "Hablemos de tu proyecto.",
    en: "Let's talk about your project.",
  },
  "cta.button": { es: "Ir a contacto →", en: "Go to contact →" },

  // ─── Contact ──────────────────────────────────────────────────────────
  "contact.headline.1": { es: "Hablemos de tu",      en: "Let's talk about" },
  "contact.headline.2": { es: "proyecto.",            en: "your project." },
  "contact.intro": {
    es: "Trabajo directamente con fundadores y tomadores de decisiones. Sin intermediarios, sin juntas innecesarias. Si tienes un problema digital real, puedo ayudarte.",
    en: "I work directly with founders and decision-makers. No intermediaries, no unnecessary meetings. If you have a real digital problem, I can help.",
  },
  "contact.form.name":    { es: "Nombre",                    en: "Name" },
  "contact.form.email":   { es: "Correo electrónico",        en: "Email" },
  "contact.form.message": { es: "¿En qué puedo ayudarte?",   en: "How can I help you?" },
  "contact.form.submit":  { es: "Enviar mensaje",            en: "Send message" },
  "contact.info.location": {
    es: "Ciudad de México · Proyectos remotos en todo el mundo",
    en: "Mexico City · Remote projects worldwide",
  },
  "contact.info.langs": {
    es: "Español nativo · Inglés profesional completo",
    en: "Native Spanish · Full professional English",
  },
  "contact.info.response": {
    es: "Menos de 24 horas hábiles",
    en: "Less than 24 business hours",
  },

  // ─── AI Lab placeholder ───────────────────────────────────────────────
  "ailab.tag": { es: "// AI Lab", en: "// AI Lab" },
  "ailab.body": {
    es: "// Próximamente — Experimentos reales de integración de IA para negocios mexicanos.",
    en: "// Coming soon — Real AI integration experiments for Mexican businesses.",
  },

  // ─── Blog placeholder ─────────────────────────────────────────────────
  "blog.tag": { es: "// Blog", en: "// Blog" },
  "blog.body": {
    es: "// Próximamente — Notas sobre infraestructura digital, IA y tecnología para empresas que hacen las cosas bien.",
    en: "// Coming soon — Notes on digital infrastructure, AI, and technology for businesses that do things right.",
  },

  // ─── Footer ───────────────────────────────────────────────────────────
  "footer.copy": {
    es: "© 2026 Gabriel Alejandro Moreno Azcona · Argand · Diseñado y desarrollado con IA · CDMX",
    en: "© 2026 Gabriel Alejandro Moreno Azcona · Argand · Designed and developed with AI · CDMX",
  },
};
