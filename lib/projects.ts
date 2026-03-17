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
  {
    id:     "001",
    client: "Bala.mx",
    url:    "https://bala.mx",
    stack:  "Shopify",
    descEs: "Plataforma de e-commerce para marca mexicana de lifestyle y deporte. Desarrollo de tema personalizado y optimización de rendimiento.",
    descEn: "E-commerce platform for a Mexican lifestyle and sports brand. Custom theme development and performance optimization.",
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
    descEs: "Infraestructura digital para uno de los festivales de música clásica más importantes de México. Cliente activo — Boca del Río, Veracruz.",
    descEn: "Digital infrastructure for one of Mexico's most important classical music festivals. Active retainer client — Boca del Río, Veracruz.",
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
];
