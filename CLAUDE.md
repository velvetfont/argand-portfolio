# CLAUDE.md — Argand Portfolio
*Claude reads this file automatically every session. Do not delete.*

---

## Who I am

I'm Gabriel Moreno Azcona (Gabo). Bilingual (ES/EN) freelance web developer and IT consultant based in Mexico City, freelancing since 2015 under the brand Argand.mx. CS Engineering degree, Oracle/Sun Java certified, six years prior experience in technical operations at NBC Universal/CNBC in New York.

**I am not a JavaScript or React developer.** I read code but do not write it fluently. I have never built a Next.js project before. You write the code. I review in the browser and describe changes in plain language.

---

## How we work together

- **Explain as you build.** When you create a file or make an architectural decision, say the file path and one sentence about what it does. Not a tutorial — just orientation.
- **One step at a time.** Complete each step fully before moving to the next.
- **Show me where to look.** After each step tell me the URL to open (`localhost:3000/...`) and what I should see.
- **Two options, not silent decisions.** If something can go two ways that affects structure or design, give me both in one sentence and ask which I prefer.
- **Git checkpoints.** After each completed step give me the exact commit command. Example: `git add . && git commit -m "Add Nav component"`
- **TypeScript errors are yours to fix.** If a TypeScript error appears, resolve it yourself without asking me. Use simple types — no complex generics.
- **Mobile last, not never.** Build desktop first, add responsive Tailwind classes at the end of each component.

---

## Stack — decided, do not change

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Fonts:** Space Mono (logo, labels, mono elements) + Outfit (headings, body)
- **Colors:**
  - Background: `#07080a`
  - Surface: `#0b0d10`
  - Border: `rgba(245,158,11,0.08)`
  - Accent primary (amber): `#f59e0b`
  - Accent secondary (cyan — AI section only): `#06b6d4`
  - Text primary: `#e0e6ec`
  - Text muted: `rgba(224,230,236,0.4)`
- **Hosting:** Vercel — connected to GitHub, auto-deploys on push
- **Forms:** Formspree (I will provide endpoint when we reach Contact)
- **Images:** Microlink API for project screenshots

---

## Visual direction

Cyberpunk-editorial blend. Reference: the CSS patterns from the uploaded `index-cyber.html`.

**Mandatory visual elements — use these in every relevant component:**

1. **`ARGAND_` blinking cursor** in the nav logo:
```css
.nav-logo::after {
  content: '_';
  animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }
```

2. **Scanline overlay** on the body:
```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  background: repeating-linear-gradient(
    0deg,
    transparent, transparent 2px,
    rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px
  );
}
```

3. **Grid background** behind the hero:
```css
.hero-grid {
  background-image:
    linear-gradient(rgba(245,158,11,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(245,158,11,0.025) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(ellipse 80% 80% at 60% 40%, black, transparent);
}
```

4. **`//` prefixes** on nav links and section tags
5. **`// 01 / 02 / 03`** numbering on service cards
6. **Outlined headline style** — one word filled, one word outlined (`-webkit-text-stroke`)
7. **Animated scanning bars** on service cards — on hover (desktop), on load (mobile):
```css
.service-bar::after {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #f59e0b, transparent);
  animation: scanbar 2.5s ease-in-out infinite;
}
@keyframes scanbar {
  0% { left: -100%; width: 60%; }
  100% { left: 160%; width: 60%; }
}
```
On desktop: trigger on hover only (`opacity: 0` default, `opacity: 1` on hover).
On mobile (`@media (max-width: 768px)`): always animate.

8. **Amber accent on AI section uses cyan instead** — swap `#f59e0b` for `#06b6d4` in the AI Integration service card and the AI Lab placeholder page.

---

## Bilingual system — ES/EN

Auto-detect language on load using `navigator.language`. If it starts with `en`, serve English. Otherwise Spanish. Manual toggle available in nav.

Implementation pattern — use a React Context:
```tsx
// lib/i18n.tsx
// LanguageContext with { lang, setLang }
// useLanguage() hook
// All text via t('key') function
```

All copy exists in both languages. See the copy section below.

---

## File structure

```
app/
  page.tsx               → Home
  work/
    page.tsx             → Work
  services/
    page.tsx             → Services
  contact/
    page.tsx             → Contact
  ai-lab/
    page.tsx             → AI Lab (placeholder)
  blog/
    page.tsx             → Blog (placeholder)
  layout.tsx             → Global layout, fonts, metadata
  globals.css            → Global styles, CSS variables, scanline

components/
  Nav.tsx                → Navigation, ARGAND_ logo, EN/ES toggle
  Footer.tsx             → Footer
  ProjectCard.tsx        → Project card with Microlink screenshot
  ProjectModal.tsx       → Modal that opens on card click

lib/
  i18n.tsx               → Language context and hook
  projects.ts            → Project data array
  copy.ts                → All bilingual copy strings

public/
  og-image.png           → Generate as typographic image (1200x630)
```

---

## Build sequence — follow this order exactly

### Step 1 — Global configuration
- `app/globals.css` — CSS variables, scanline overlay, base styles
- `app/layout.tsx` — font imports (Space Mono + Outfit from Google Fonts), metadata, language context wrapper
- `tailwind.config.ts` — custom colors and fonts matching the variables above

### Step 2 — i18n system
- `lib/i18n.tsx` — LanguageContext, useLanguage hook, auto-detect on mount
- `lib/copy.ts` — all bilingual strings (use the copy below)

### Step 3 — Nav component
- `components/Nav.tsx`
- Logo: `ARGAND_` with blinking cursor in amber
- Links: `// Trabajo`, `// Servicios`, `// Contacto`, `// AI Lab` (dimmed), `// Blog` (dimmed)
- EN/ES toggle button
- Sticky, backdrop blur, border-bottom in amber at 8% opacity
- Mobile: hamburger menu

### Step 4 — Footer component
- `components/Footer.tsx`
- `© 2026 Gabriel Alejandro Moreno Azcona · Argand`
- Links: GitHub (`github.com/velvetfont`), email
- Bilingual: "Diseñado y desarrollado con IA · CDMX" / "Designed and developed with AI · CDMX"

### Step 5 — Project data and components
- `lib/projects.ts` — array of 5 projects with all data
- `components/ProjectCard.tsx` — card with Microlink screenshot
- `components/ProjectModal.tsx` — modal with full project detail + link to client site

Microlink image pattern:
```tsx
const screenshotUrl = `https://api.microlink.io/?url=${project.url}&screenshot=true&meta=false&embed=screenshot.url`
```

### Step 6 — Home page (`app/page.tsx`)
Sections in order:
1. Hero — grid background, eyebrow, large headline (filled + outlined), subheadline, two CTAs
2. About — who I am, what makes me different
3. Infraestructura digital — definition block
4. Services preview — 3 cards with animated bars (hover desktop, always mobile)
5. Selected work — ProjectCard grid (5 projects)
6. Extended client list — pill grid
7. CTA strip — "Hablemos de tu proyecto" → Contact

### Step 7 — Work page (`app/work/page.tsx`)
- Section intro
- Full grid of 5 ProjectCards
- Click opens ProjectModal

### Step 8 — Services page (`app/services/page.tsx`)
- Infraestructura digital definition
- 3 service cards full detail with bullets
- AI card uses cyan accent instead of amber

### Step 9 — Contact page (`app/contact/page.tsx`)
- Form: Nombre/Name, Email, Mensaje/Message, Submit button
- Formspree endpoint: I will provide this — use a placeholder `YOUR_FORMSPREE_ID` for now
- Right column: location, languages, response time

### Step 10 — Placeholder pages
- `app/ai-lab/page.tsx` — cyan accent, "Próximamente / Coming soon"
- `app/blog/page.tsx` — amber accent, "Próximamente / Coming soon"
- Both use same Nav and Footer

### Step 11 — og:image and favicon
- Favicon: SVG with "A" in amber on dark background
- og:image: typographic 1200x630, "ARGAND_" in amber, tagline below

### Step 12 — Vercel deploy
- Confirm `npm run build` passes with zero errors
- Walk me through connecting GitHub repo to Vercel
- Confirm live on preview URL

---

## Copy — bilingual ES/EN

### Nav
| Element | ES | EN |
|---|---|---|
| Work | Trabajo | Work |
| Services | Servicios | Services |
| Contact | Contacto | Contact |
| AI Lab | AI Lab | AI Lab |
| Blog | Blog | Blog |
| Toggle | EN | ES |

### Hero
**Eyebrow:** `Gabriel Moreno Azcona · Ciudad de México` / `Gabriel Moreno Azcona · Mexico City`

**Headline:**
```
Infraestructura.    / Infrastructure.
Sistemas.           / Systems.
IA.                 / AI.
```
*"Infraestructura" / "Infrastructure" = filled. "IA." / "AI." = amber accent.*

**Subheadline:**
- ES: `Socio técnico bilingüe para empresas mexicanas que toman en serio su operación digital.`
- EN: `Bilingual technical partner for Mexican businesses that take their digital operation seriously.`

**Subheadline 2 (smaller, below):**
- ES: `Ingeniero de sistemas. Constructor de infraestructura. Socio de integración de IA.`
- EN: `Systems thinker. Infrastructure builder. AI integration partner.`

**CTAs:** `Ver trabajo →` / `See my work →` and `Contacto` / `Contact`

### About
**Headline:**
- ES: `No una agencia. No un freelancer de catálogo.`
- EN: `Not an agency. Not a catalog freelancer.`

**Body:**
- ES: `Soy ingeniero en sistemas con más de 11 años construyendo infraestructura digital para empresas mexicanas — y seis años previos en operaciones técnicas para NBC Universal y CNBC en Nueva York. Trabajo directamente con fundadores y tomadores de decisiones. Sin intermediarios, sin equipos que rotan, sin juntas innecesarias. Una sola persona con visión completa de tu operación digital: desde el servidor hasta la interfaz, desde el dominio hasta la integración de IA.`
- EN: `I'm a systems engineer with 11+ years building digital infrastructure for Mexican businesses — and six prior years in technical operations for NBC Universal and CNBC in New York. I work directly with founders and decision-makers. No intermediaries, no rotating teams, no unnecessary meetings. One person with complete visibility of your digital operation: from server to interface, from domain to AI integration.`

**Stats:**
| ES | EN |
|---|---|
| 11 años independiente | 11 years independent |
| NBC Universal / CNBC — Nueva York | NBC Universal / CNBC — New York |
| Ciudad de México | Mexico City |
| Español nativo · Inglés profesional | Native Spanish · Full professional English |

### Infraestructura digital definition
- ES: `Todo lo que hace que tu negocio funcione en internet: tu sitio, tu tienda, tu correo, tus herramientas, tus integraciones. No solo que existan — que estén bien construidas, que no fallen, que escalen cuando los necesites. La diferencia entre tener presencia digital y tener infraestructura digital es la diferencia entre una tarjeta de presentación y una operación real.`
- EN: `Everything that makes your business run on the internet: your site, your store, your email, your tools, your integrations. Not just that they exist — that they're well built, that they don't fail, that they scale when you need them to. The difference between having a digital presence and having digital infrastructure is the difference between a business card and a real operation.`

### Services
**Headline:** `Lo que construyo.` / `What I build.` *("construyo"/"build" = outlined)*

**Intro:**
- ES: `No soy una agencia. Soy un ingeniero independiente que trabaja directamente con los tomadores de decisiones para construir infraestructura digital que funciona y dura.`
- EN: `I'm not an agency. I'm an independent engineer who works directly with decision-makers to build digital infrastructure that works and lasts.`

**// 01 — Infraestructura Web / Web Infrastructure**
- ES: `Sitios y plataformas construidos para durar. Implemento diseño con precisión técnica y me aseguro de que tu operación digital tenga bases sólidas.`
- EN: `Sites and platforms built to last. I implement design with technical precision and ensure your digital operation has solid foundations.`
- Bullets: `WordPress / Gutenberg / Elementor`, `Shopify Store 2.0`, `Laravel / PHP`, `CSS / JS personalizado / Custom CSS / JS`, `DigitalOcean / Hosting / DNS / SSL`

**// 02 — Integración de IA / AI Integration** *(cyan accent)*
- ES: `Herramientas de inteligencia artificial integradas en tu operación. Automatización real que ahorra tiempo y genera resultados medibles — no demos, no experimentos, implementaciones que funcionan.`
- EN: `AI tools integrated into your operation. Real automation that saves time and generates measurable results — not demos, not experiments, implementations that work.`
- Bullets: `Integración API Claude / GPT / Claude / GPT API integration`, `Chatbots para WhatsApp y web / WhatsApp and web chatbots`, `Flujos de contenido con IA / AI content workflows`, `Automatización con Zapier / Make / Zapier / Make automation`, `SEO potenciado con IA / AI-powered SEO`

**// 03 — Consultoría Técnica / Technical Consulting**
- ES: `Pensamiento de ingeniero aplicado a tus decisiones digitales. Si necesitas claridad técnica para tomar mejores decisiones — de tecnología, de proveedores, de infraestructura — trabajo contigo directamente.`
- EN: `Engineer's thinking applied to your digital decisions. If you need technical clarity to make better decisions — on technology, vendors, infrastructure — I work with you directly.`
- Bullets: `Auditoría de infraestructura digital / Digital infrastructure audit`, `Estrategia de adopción de IA / AI adoption strategy`, `Selección de stack tecnológico / Technology stack selection`, `Seguridad y mantenimiento / Security and maintenance`, `Soporte técnico mensual / Monthly technical support`

### Projects
| ID | Client | ES description | EN description | URL | Stack | Badge |
|---|---|---|---|---|---|---|
| 001 | Bala.mx | Plataforma de e-commerce para marca mexicana de lifestyle y deporte. Desarrollo de tema personalizado y optimización de rendimiento. | E-commerce platform for a Mexican lifestyle and sports brand. Custom theme development and performance optimization. | https://bala.mx | Shopify | — |
| 002 | SMPS Legal | Sitio web e infraestructura digital para despacho de abogados en Ciudad de México. Cliente activo — hosting, mantenimiento y soporte técnico mensual. | Website and digital infrastructure for a Mexico City law firm. Active retainer client — hosting, maintenance, and monthly technical support. | https://smpslegal.com | WordPress | — |
| 003 | Foro Boca | Infraestructura digital para uno de los festivales de música clásica más importantes de México. Cliente activo — Boca del Río, Veracruz. | Digital infrastructure for one of Mexico's most important classical music festivals. Active retainer client — Boca del Río, Veracruz. | https://foroboca.mx | WordPress | — |
| 004 | Cru Cru | Implementación técnica del sitio web para cervecería artesanal mexicana. El diseño gráfico del proyecto fue reconocido con el German Design Award 2026. | Technical implementation of the website for a Mexican craft brewery. The project's graphic design was recognized with the German Design Award 2026. | https://casacerveceracrucru.com | WordPress | German Design Award 2026 |
| 005 | Scimmia.mx | E-commerce e infraestructura digital completa para marca mexicana de moda. Setup integral desde hosting hasta tienda en línea. | Full e-commerce and digital infrastructure for a Mexican fashion brand. Complete setup from hosting to online store. | https://scimmia.mx | WordPress · WooCommerce | — |

### Extended client list
Taller Multidisciplinar · Hotel Nana Vida · Grupo Ruz · American Polo · Paseo Destino · Eliot Awards · Eliot Channel · Eliot Media · Innout Casa Productora · Shanti Casa Productora · Peluches Shinymals · Melding.tv · Academia Stage Danza · Priesto Estudio · Divots Sportsbar · Caretas VicoverPro · Mochilas Truzt · Ocean Wise · Glis Packaging · Mexaheads · Fotógrafo Pablo Navajas · Peek Toys

### Contact
**Headline:** `Hablemos de tu proyecto.` / `Let's talk about your project.` *("proyecto"/"project" = outlined)*

**Intro:**
- ES: `Trabajo directamente con fundadores y tomadores de decisiones. Sin intermediarios, sin juntas innecesarias. Si tienes un problema digital real, puedo ayudarte.`
- EN: `I work directly with founders and decision-makers. No intermediaries, no unnecessary meetings. If you have a real digital problem, I can help.`

**Form fields:** Nombre/Name, Correo electrónico/Email, ¿En qué puedo ayudarte?/How can I help you?, Enviar mensaje/Send message

**Info:**
- ES: `Ciudad de México · Proyectos remotos en todo el mundo` / `Español nativo · Inglés profesional completo` / `Menos de 24 horas hábiles`
- EN: `Mexico City · Remote projects worldwide` / `Native Spanish · Full professional English` / `Less than 24 business hours`

### Placeholders
**AI Lab:**
- ES: `// Próximamente — Experimentos reales de integración de IA para negocios mexicanos.`
- EN: `// Coming soon — Real AI integration experiments for Mexican businesses.`

**Blog:**
- ES: `// Próximamente — Notas sobre infraestructura digital, IA y tecnología para empresas que hacen las cosas bien.`
- EN: `// Coming soon — Notes on digital infrastructure, AI, and technology for businesses that do things right.`

### Footer
- ES: `© 2026 Gabriel Alejandro Moreno Azcona · Argand · Diseñado y desarrollado con IA · CDMX`
- EN: `© 2026 Gabriel Alejandro Moreno Azcona · Argand · Designed and developed with AI · CDMX`

---

## Emergency protocol

If something breaks or goes wrong, stop and describe what you see. Do not try to fix things by adding more code on top of broken code.

**If a TypeScript error appears:** fix it yourself, do not ask me.
**If the build fails:** show me the exact error message.
**If the layout looks wrong:** I will describe what I see and you fix only that.
**If you are unsure about a design decision:** show me two options, I pick one.

---

## Start here

Begin with Step 1. Say the file path before writing each file.
