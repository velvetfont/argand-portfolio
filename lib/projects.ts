export interface Project {
  id:          string;
  client:      string;
  url:         string;
  stack:       string;
  badge?:      string;
  descEs:      string;
  descEn:      string;
}

export const projects: Project[] = [
  // ─── Anchor case studies ──────────────────────────────────────────────
  {
    id:     "001",
    client: "Bala.mx",
    url:    "https://bala.mx",
    stack:  "Shopify",
    descEs: "Infraestructura digital para una de las agencias de branding más importantes de México. Desarrollo de tema personalizado y optimización de rendimiento.",
    descEn: "Digital infrastructure for one of Mexico's most important branding agencies. Custom theme development and performance optimization.",
  },
  {
    id:     "002",
    client: "SMPS Legal",
    url:    "https://smpslegal.com",
    stack:  "WordPress",
    descEs: "Sitio web e infraestructura digital para despacho de abogados en Ciudad de México. Cliente activo — hosting, mantenimiento y soporte técnico mensual.",
    descEn: "Website and digital infrastructure for a Mexico City law firm. Active retainer client — hosting, maintenance, and monthly technical support.",
  },
  {
    id:     "003",
    client: "Foro Boca",
    url:    "https://foroboca.mx",
    stack:  "WordPress",
    descEs: "Infraestructura digital para el foro de música y artes desarrollado por Rojkind Arquitectos en Boca del Río, Veracruz. Cliente activo.",
    descEn: "Digital infrastructure for the music and arts venue developed by Rojkind Arquitectos in Boca del Río, Veracruz. Active retainer client.",
  },
  {
    id:     "004",
    client: "Cru Cru",
    url:    "https://casacerveceracrucru.com",
    stack:  "WordPress",
    badge:  "German Design Award 2026",
    descEs: "Implementación técnica del sitio web para cervecería artesanal mexicana. El diseño gráfico del proyecto fue reconocido con el German Design Award 2026.",
    descEn: "Technical implementation of the website for a Mexican craft brewery. The project's graphic design was recognized with the German Design Award 2026.",
  },
  {
    id:     "005",
    client: "Scimmia.mx",
    url:    "https://scimmia.mx",
    stack:  "WordPress · WooCommerce",
    descEs: "E-commerce e infraestructura digital completa para marca mexicana de moda. Setup integral desde hosting hasta tienda en línea.",
    descEn: "Full e-commerce and digital infrastructure for a Mexican fashion brand. Complete setup from hosting to online store.",
  },

  // ─── Extended portfolio ───────────────────────────────────────────────
  {
    id:     "006",
    client: "NaNa Vida",
    url:    "https://nanavida.com",
    stack:  "WordPress · Sirvoy",
    descEs: "Sitio web e integración de sistema de reservaciones para cadena de hoteles boutique en Oaxaca, Morelia y CDMX. Sincronización de disponibilidad entre Booking.com, Despegar, Airbnb y sitio propio vía Sirvoy.",
    descEn: "Website and booking system integration for a boutique hotel chain in Oaxaca, Morelia, and CDMX. Availability sync across Booking.com, Despegar, Airbnb, and own site via Sirvoy.",
  },
  {
    id:     "007",
    client: "Perro de San Juan",
    url:    "https://perrodesanjuan.mx",
    stack:  "WordPress",
    descEs: "Sitio bilingüe para marca de mezcal artesanal de Oaxaca. Catálogo de productos, proceso de producción, mixología y contacto.",
    descEn: "Bilingual site for an artisanal mezcal brand from Oaxaca. Product catalog, production process, mixology, and contact.",
  },
  {
    id:     "008",
    client: "Shinymals",
    url:    "https://shinymals.com.mx",
    stack:  "WordPress",
    descEs: "Mundo digital para línea de peluches de Grupo Ruz. Personajes animados, entorno ilustrado y navegación personalizada para audiencia infantil.",
    descEn: "Digital world for a Grupo Ruz plush toy line. Animated characters, illustrated environment, and custom navigation for a young audience.",
  },
  {
    id:     "009",
    client: "INK PR",
    url:    "https://ink.argand.mx",
    stack:  "WordPress",
    descEs: "Sitio original para agencia de relaciones públicas e influencer marketing con sede en Colonia Juárez, CDMX. Clientes incluyen NBA, Formula 1 y HBO Max.",
    descEn: "Original site for a public relations and influencer marketing agency based in Colonia Juárez, CDMX. Clients include NBA, Formula 1, and HBO Max.",
  },
  {
    id:     "010",
    client: "Mexaheads",
    url:    "https://mexaheads.com",
    stack:  "WordPress",
    descEs: "Sitio interactivo para línea de juguetes de diseño 100% mexicana. Mapa de culturas mesoamericanas, ediciones especiales con artesanos de Campeche. Exhibido en Museo del Objeto (CDMX) y Didrichsen Art Museum (Finlandia). En colaboración con Scimmia.",
    descEn: "Interactive site for a 100% Mexican designer toy line. Map of Mesoamerican cultures, special editions with Campeche artisans. Exhibited at Museo del Objeto (CDMX) and Didrichsen Art Museum (Finland). In collaboration with Scimmia.",
  },
  {
    id:     "011",
    client: "Eliot Awards",
    url:    "https://ea.argand.mx",
    stack:  "WordPress",
    descEs: "Implementación técnica para los premios de redes sociales más importantes de México — los 'Oscares mexicanos' del medio digital. En colaboración con Amalgama Studio.",
    descEn: "Technical implementation for Mexico's most important social media awards — the Mexican 'Oscars' of the digital industry. In collaboration with Amalgama Studio.",
  },
  {
    id:     "012",
    client: "Paseo Destino",
    url:    "https://pd.argand.mx",
    stack:  "WordPress",
    descEs: "Landing site para centro comercial de alto perfil en Puebla. En colaboración con Gurú Brand Buró.",
    descEn: "Landing site for a high-profile shopping mall in Puebla. In collaboration with Gurú Brand Buró.",
  },
  {
    id:     "013",
    client: "American Polo",
    url:    "https://americanpolo.argand.mx",
    stack:  "WordPress · WooCommerce",
    descEs: "Sitio de marca para línea de ropa premium. Diseño de alta calidad por Gurú Brand Buró, implementación técnica por Argand.",
    descEn: "Brand site for a premium clothing line. High-quality design by Gurú Brand Buró, technical implementation by Argand.",
  },
  {
    id:     "014",
    client: "Shanti Films",
    url:    "https://shanti.argand.mx",
    stack:  "WordPress",
    descEs: "Sitio para productora de comerciales de televisión. Showcase de comerciales con reproducción en modal. Clientes de grandes marcas.",
    descEn: "Site for a TV commercial production company. Commercial showcase with modal playback. Major brand clients.",
  },
  {
    id:     "015",
    client: "Danza Stage",
    url:    "https://stage.argand.mx",
    stack:  "WordPress",
    badge:  "Listo para producción",
    descEs: "Rediseño completo para academia de danza en CDMX. Sitio entregado y listo para subir a producción.",
    descEn: "Full redesign for a dance academy in CDMX. Site delivered and ready to go live.",
  },
];