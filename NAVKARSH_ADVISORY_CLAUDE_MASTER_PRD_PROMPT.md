# PRD & CLAUDE MASTER PROMPT: NAVKARSH ADVISORY (ULTRA-PREMIUM WEBSITE REBUILD)

> **Overview**: This document contains the complete Product Requirement Document (PRD) and a ready-to-use Master Prompt to feed into **Claude (3.5 / 3.7 Sonnet)** along with **21dev MCP** and the **UI UX Pro Max** design guidelines to generate an award-winning, hyper-modern, interactive website for **Navkarsh Advisory** (Dr. Sumit Roy).

---

## PART 1: PRODUCT REQUIREMENT DOCUMENT (PRD)

### 1. Executive Summary
Navkarsh Advisory ("Inspiring Roots, Elevating Excellence") is a premier consultancy and coaching organization founded by **Dr. Sumit Roy** (PhD in Watershed Management, 30+ years experience). The firm specializes in:
- **Integrated Natural Resource Management (INRM)** & Watershed Restoration.
- **Livelihood Development** (Farm/Non-farm, Women & Youth inclusion).
- **Organisational Development (OD)** & Capacity Building for CSOs/NGOs using "Roy’s Method" and Theory of Change.
- **Strategic Consulting & CSR Funding Linkages** (Axis Bank Foundation, Ford Foundation, GIZ, Azim Premji Foundation, Tata Trusts, UNDP, HDFC, etc.).

The goal of this rebuild is to elevate the digital presence from a standard informational site into a **cutting-edge, visually stunning, luxury-grade web experience** (Awwwards/FWA level) featuring GSAP scroll triggers, glassmorphism, micro-interactions, liquid organic gradients, and dynamic storytelling.

---

### 2. Design System & Aesthetic Architecture

#### Palette: "Bio-Organic Earth & Obsidian Luxury"
- **Primary Obsidian Dark**: `#071711` / `#0B1E17` (Deep forest dark background)
- **Bio Emerald Accent**: `#10B981` / `#059669` (Vibrant nature green)
- **Sun Gold Highlight**: `#F59E0B` / `#D97706` (Organic prosperity gold)
- **Parchment Light Mode/Cards**: `#F8F9FA` / `#F1F5F9`
- **Glass Card Background**: `rgba(15, 30, 24, 0.65)` with `backdrop-filter: blur(18px)` & `1px solid rgba(255, 255, 255, 0.12)`

#### Typography
- **Primary Display / Headings**: `Plus Jakarta Sans` or `Outfit` (Bold, clean geometric sans-serif)
- **Body & Captions**: `Inter` or `DM Sans` (High legibility, variable weight)

#### Animation & Micro-Interactions
- **Smooth Scroll**: Powered by `@studio-freight/lenis`
- **Scroll Animations**: `GSAP` + `ScrollTrigger` (Pinning, staggered card reveals, parallax backgrounds, counter incrementation)
- **Cursor & Glow**: Custom magnetic cursor follower + ambient canvas particle background.
- **Components**: Dual infinite marquee loops, 3D card tilt effects (`VanillaTilt.js`), interactive flip gallery, filterable masonry grids, and fluid tabbed interfaces.

---

### 3. Website Structure & Page Specifications

#### **Page 1: Home (`index.html`)**
1. **Dynamic Glass Navigation**: Floating pill navbar, active state indicators, glass overlay mobile menu.
2. **Kinetic Hero Section**: Animated background glow, headline text split animation, brand origin breakdown card (`Nav` = Newness/Resilience, `Karsh` = Utkarsh/Excellence), quote card ("The land does not belong to us — we belong to the land").
3. **Live Counter Metrics**: 30+ Years Experience | 5+ States Covered | 600+ Professionals Mentored | 60+ Organizations Supported.
4. **Vision & Mission Cards**: Dual glass panels with hover reveal effects.
5. **Core Focus Areas**: 3D interactive cards highlighting OD, Capacity Building, and Policy Linkages.
6. **Partner Logo Cloud**: Dual-track horizontal infinite marquee featuring partner logos and CSOs.
7. **"What We Do" Marquee & OD Stepper**: 3 marquee rows of skill badges + 4-phase OD breakdown (Scoping -> Visioning -> Implementation -> Measuring).
8. **"Roy's Method" Circular Interventions**: Visual breakdown of professional development & team building.
9. **Founder Showcase (Dr. Sumit Roy)**: Highlighting 30+ years, PhD in Watershed Management, BRLF, Tata Trusts CInI, IWMP SNLA.
10. **Interactive Gallery**: 3D flip-cards / expandable accordion of real field impact (Watershed, Rural Training, Forest Conservation, Women SHGs, Harvest).
11. **Vertical Marquee Testimonials**: 3-column scrolling testimonial wall featuring mentee quotes.
12. **High-Impact CTA & Organic Footer**: Newsletter, quick links, contact info (`navkarsh.sumit@gmail.com`, `+91-8910877673`), and copyright.

#### **Page 2: About Dr. Sumit Roy (`about.html`)**
1. **Founder Spotlight Hero**: Profile image with floating experience badges.
2. **In-Depth Biography**: Details of 30-year journey across West Bengal, Jharkhand, Chhattisgarh, BRLF, and Tata Trusts.
3. **6 Domain Expertise Hex Cards**: INRM, Livelihoods, CSO Capacity Building, Rural Strategy, Mentoring, Climate Resilience.
4. **5-Step Methodology Timeline**: Interactive step-by-step process (Listen -> Assess -> Design -> Build Capacity -> Sustain Impact).
5. **Values & Philosophy Grid**: Field-Rooted Practice, Inclusive Development, Sustainability First, Continuous Learning.

#### **Page 3: Testimonials & Wall of Impact (`testimonials.html`)**
1. **Interactive Testimonial Grid**: Filter by Mentee, CSO, CSR Partner.
2. **Real Mentee Quotes**: Sandeep Singh (Project Manager), Subrata Ghosh (Program Manager), Niladri Biswas (District PM), Banashree Chakraborty (Programme Manager), Manoj Kumar Yadav (JSLPS), Savitry Mahali (NTPC), Badal Maharana (BRLF), Sumanta Neogi (MSME), Abhirupa Sarmadhikari (Aditya Birla Group), Diksha Satyawali (SRIJAN), Barni Chatterjee (PRADAN), Er. Susheel Kumar Soni (BRLF).

#### **Page 4: Share Your Experience (`experience.html`)**
1. **Interactive Feedback Form**: Fields for Name, Org, Role, Location, Context dropdown, Experience Textarea with 3000-char live counter, Consent Checkbox, and Dynamic Success Dialog.

#### **Page 5: Get in Touch / Consultation (`contact.html`)**
1. **Consultation Request Form**: Direct booking/inquiry form for CSOs, CSRs, and professionals.
2. **Contact Cards**: Email, Phone, Office location chips.

---

---

## PART 2: THE COMPLETE CLAUDE MASTER PROMPT

> **Instructions**: Copy the entire prompt box below and paste it into Claude (3.5 Sonnet / 3.7 Sonnet) with 21dev MCP / UI UX Pro Max enabled.

```markdown
You are a World-Class Principal Creative Frontend Engineer and Senior UI/UX Architect specializing in award-winning luxury web platforms (Awwwards, FWA, CSS Design Awards).

Your task is to build a hyper-modern, breathtaking, ultra-responsive multi-page web platform for **Navkarsh Advisory** (Founder: Dr. Sumit Roy). 

### 🎯 PROJECT SUMMARY & IDENTITY
- **Brand Name**: Navkarsh Advisory
- **Tagline**: Inspiring Roots, Elevating Excellence
- **Founder**: Dr. Sumit Roy (PhD in Watershed Management, 30+ Years Experience, former Senior Program Officer & Technical Advisor at Bharat Rural Livelihoods Foundation (BRLF), ex-CInI Tata Trusts, BRLF Usharmukti, Lakpati Kisan Smart Village).
- **Niche**: Integrated Natural Resource Management (INRM), Rural Development, Livelihood Enhancement, Organisational Development (OD) for CSOs, and CSR Linkages.
- **Target Audience**: CSOs/NGOs, Development Professionals, CSR Foundations (Axis Bank Foundation, Ford Foundation, GIZ, Azim Premji Foundation, Tata Trusts, UNDP), Government Agencies.

---

### 🎨 DESIGN SYSTEM & VISUAL ARCHITECTURE (UI/UX PRO MAX SPECIFICATIONS)

#### 1. Color Palette (Bio-Organic Earth & Obsidian Luxury Dark Mode)
```css
:root {
  --bg-dark: #071711;
  --bg-dark-surface: #0b1e17;
  --bg-card: rgba(15, 30, 24, 0.65);
  --primary-emerald: #10b981;
  --primary-emerald-glow: rgba(16, 185, 129, 0.3);
  --accent-gold: #f59e0b;
  --accent-gold-light: #fcd34d;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  --border-glass: rgba(255, 255, 255, 0.12);
  --glass-blur: blur(18px);
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 9999px;
  --shadow-glow: 0 0 35px rgba(16, 185, 129, 0.15);
}
```

#### 2. Typography
- Headings: `'Plus Jakarta Sans'`, sans-serif (Weights: 600, 700, 800)
- Body: `'Inter'`, sans-serif (Weights: 300, 400, 500)
- Accents/Quotes: `'Outfit'`, sans-serif

#### 3. Core UI Effects & Components
- **Glassmorphism 2.0**: Translucent backgrounds with `backdrop-filter: blur(18px)`, linear gradient border strokes (`1px solid rgba(255,255,255,0.15)`), and ambient radial light glows.
- **GSAP & ScrollTrigger Animations**:
  - Smooth page scrolling via Lenis (`@studio-freight/lenis`).
  - Text splitting & stagger reveal for all section headers and titles.
  - Parallax image reveals on scroll.
  - Animated stat counter numbers when scrolled into view.
- **Micro-Interactions**:
  - Custom magnetic cursor with glowing trail effect.
  - Hover tilt 3D effects on service and feature cards (`VanillaTilt` or CSS 3D transforms).
  - Multi-track horizontal infinite marquee for partner logos and core skill tags.
  - Interactive gallery card flip/expand animations.
  - Vertical infinite smooth-scrolling columns for testimonials.

---

### 📂 PAGES & CONTENT SPECIFICATIONS

Please generate all 5 full pages with COMPLETE real content (no `lorem ipsum` placeholders!):

#### PAGE 1: `index.html` (Home)
- **Header/Navbar**: Glassmorphic floating navigation pill with logo image (`assets/images/logo.png`), brand title, page links (Home, About, Testimonials, Your Comments, Get in Touch button), and responsive mobile drawer menu.
- **Hero Section**:
  - Background: Organic floating radial orbs and ambient dark forest gradient canvas.
  - Headline: "Empowering Rural Futures Through Knowledge & Action".
  - Quote: *"The land does not belong to us — we belong to the land. When we nurture it with wisdom, it nurtures generations."*
  - CTAs: Primary Glowing Green Button ("Get in Touch") & Glass Button ("Discover Our Story").
  - Brand Origin Card: Explaining **"Nav"** (Newness, Innovation, Completeness) and **"Karsh"** (Derived from Utkarsh: Upliftment, Prosperity & Excellence).
- **Impact Stats Ribbon**: Animated count-up counters for:
  - `30+` Years Experience
  - `5+` States Covered
  - `600+` Professionals Mentored
  - `60+` Organizations Supported
- **Vision & Mission Section**: Dual glass cards detailing sustainable environmental & social impact, technical advisory, M&E strategies, and CSR partnerships.
- **Core Focus Areas**: 3D Glass Cards:
  1. *Organisational Development*: Culture, structure, and Theory of Change.
  2. *Capacity Building*: Professional development, team resilience.
  3. *Strategic Consulting*: Bridging grassroots action with CSR & government policies.
- **Partner & Collaboration Marquee**: Dual-track scrolling marquee featuring organizations & funding partners (Axis Bank Foundation, Ford Foundation, GIZ, Azim Premji Foundation, HUF, HDFC, WABAG, Cummins, Tata Trusts, UNDP, BRLF).
- **What We Do Marquee**: 3 scrolling rows of tag badges (Participatory Rural Appraisal, Livelihood Assessment, Community Workshops, Impact Modelling, Institution Building, SROI Analysis, Value Chain Gaps, Policy Alignment, etc.).
- **4-Stage OD Process Grid**: Scoping & Diagnosing -> Visioning & Designing -> Implementation -> Measuring & Adapting.
- **Roy's Method & Circular Interventions**: Showcase of professional growth and team building methods.
- **Founder Profile Highlight**: Dr. Sumit Roy feature card with experience badge and overview.
- **Interactive Impact Gallery**: 3D tilt cards showcasing rural watershed restoration, capacity building, forest conservation, women SHGs, and harvest fields.
- **Testimonial Wall**: 3-column continuous scrolling testimonial cards with real quotes from Sandeep Singh, Subrata Ghosh, Niladri Biswas, Banashree Chakraborty, Manoj Kumar Yadav, Savitry Mahali, Badal Maharana, Sumanta Neogi, Abhirupa Sarmadhikari, Diksha Satyawali, Barni Chatterjee, Er. Susheel Kumar Soni.
- **Call-to-Action & Footer**: Full-width glass CTA card and multi-column organic footer with email `navkarsh.sumit@gmail.com`, phone `+91-8910877673`, and quick navigation.

#### PAGE 2: `about.html` (About Dr. Sumit Roy)
- **Profile Hero**: Dr. Sumit Roy bio, PhD background, 30+ years journey across IWMP SNLA, Tata Trusts CInI (Lakpati Kisan Smart Village), and Senior Technical Advisor at BRLF.
- **6 Key Areas of Expertise Cards**: INRM, Livelihood Development, Capacity Building of CSOs, Rural Project Strategy & DPR, Training & Mentoring, Climate Resilience.
- **5-Step Methodology Timeline**: Listen -> Assess -> Design -> Build Capacity -> Sustain Impact.
- **Core Philosophy & Values**: Field-Rooted Practice, Inclusive Development, Sustainability First, Continuous Learning.

#### PAGE 3: `testimonials.html` (Testimonials & Mentee Stories)
- **Filterable Grid Header**: All, Mentees, CSOs, Funding Partners.
- **Full Testimonial Grid**: Highlighting all 12 real mentee testimonials with avatar badges, roles, and full text quotes.

#### PAGE 4: `experience.html` (Your Comments / Share Experience)
- **Interactive Form**:
  - Fields: Name (optional), Organization (optional), Role (optional), Location (optional), How you know Dr. Roy (Dropdown selector).
  - Story / Experience Textarea: Live character counter (`0 / 3000`).
  - Consent Checkbox.
  - Interactive Submit Button with loading animation and success pop-up.

#### PAGE 5: `contact.html` (Get in Touch / Consultation)
- **Consultation Request Form**: Name, Designation, Organisation, Phone, Email, Support Required text box (with character counter).
- **Contact Chips**: Email (`navkarsh.sumit@gmail.com`), Phone (`+91-8910877673`), Location (`India`).

---

### 🛠 TECHNICAL REQUIREMENTS & CODE QUALITY
1. **Modern Stack**: HTML5 + Vanilla CSS3 (Custom Properties, CSS Grid, Flexbox, Container Queries) + Modern ES6 JavaScript.
2. **Animation Libraries (CDN links included)**:
   - GSAP 3 (`https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js`)
   - ScrollTrigger (`https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js`)
   - Lenis Smooth Scroll (`https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js`)
3. **Mobile First & Fully Responsive**: Breakpoints at `480px`, `768px`, `1024px`, `1280px`.
4. **Performance & SEO**: Semantic HTML tags (`<main>`, `<article>`, `<section>`, `<nav>`, `<footer>`), ARIA attributes (`aria-label`, `aria-hidden`), optimized image lazy loading.

Generate the full code files cleanly organized into `index.html`, `about.html`, `testimonials.html`, `experience.html`, `contact.html`, `css/style.css`, `css/animations.css`, and `js/main.js`!
```
