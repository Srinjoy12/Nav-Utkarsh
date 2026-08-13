# PRD & KIMI K3 MASTER PROMPT: NAVKARSH ADVISORY (ULTRA-PREMIUM WEBSITE REBUILD)

> **Overview**: This document contains the complete Product Requirement Document (PRD) and a tailored **Kimi K3 Master Prompt** to generate an award-winning, hyper-modern, interactive website for **Navkarsh Advisory** (Dr. Sumit Roy).

---

## PART 1: PRODUCT REQUIREMENT DOCUMENT (PRD)

### 1. Executive Summary
Navkarsh Advisory ("Inspiring Roots, Elevating Excellence") is a premier consultancy and coaching organization founded by **Dr. Sumit Roy** (PhD in Watershed Management, 30+ years experience). The firm specializes in:
- **Integrated Natural Resource Management (INRM)** & Watershed Restoration.
- **Livelihood Development** (Farm/Non-farm, Women & Youth inclusion).
- **Organisational Development (OD)** & Capacity Building for CSOs/NGOs using "Roy’s Method" and Theory of Change.
- **Strategic Consulting & CSR Funding Linkages** (Axis Bank Foundation, Ford Foundation, GIZ, Azim Premji Foundation, Tata Trusts, UNDP, HDFC, etc.).

The goal of this rebuild is to elevate the digital presence from a standard informational site into a **cutting-edge, visually stunning, luxury-grade web experience** featuring GSAP scroll triggers, glassmorphism 2.0, micro-interactions, liquid organic gradients, and dynamic storytelling.

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
- **Components**: Dual infinite marquee loops, 3D card tilt effects, interactive flip gallery, filterable masonry grids, and fluid tabbed interfaces.

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

## PART 2: THE COMPLETE KIMI K3 MASTER PROMPT

> **Instructions**: Copy the entire prompt box below and paste it directly into **Kimi K3**. Kimi K3's deep reasoning and context length will build out every file with full code and high visual fidelity.

```markdown
Role: Principal Creative Frontend Engineer & UI/UX Design System Architect.

Task: Build a hyper-modern, award-winning multi-page web platform for **Navkarsh Advisory** (Founder: Dr. Sumit Roy). 

### 🎯 BRAND IDENTITY & CORE DETAILS
- **Entity**: Navkarsh Advisory
- **Tagline**: Inspiring Roots, Elevating Excellence
- **Founder**: Dr. Sumit Roy (PhD in Watershed Management, 30+ Years Experience, ex-Senior Program Officer & Technical Advisor at BRLF, ex-CInI Tata Trusts, BRLF Usharmukti, Lakpati Kisan Smart Village, IWMP SNLA).
- **Core Domain**: Integrated Natural Resource Management (INRM), Rural Livelihoods, Capacity Building for CSOs/NGOs, Organisational Development ("Roy's Method"), CSR Funding Linkages.
- **Target Audience**: CSOs/NGOs, Development Professionals, CSR Foundations (Axis Bank Foundation, Ford Foundation, GIZ, Azim Premji Foundation, Tata Trusts, UNDP), Government Agencies.

---

### 🎨 DESIGN SYSTEM & TOKEN SPECIFICATIONS

#### 1. CSS Variables (`:root`)
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

#### 2. Typography & Aesthetics
- Headings: `'Plus Jakarta Sans'`, sans-serif (Weights: 600, 700, 800)
- Body: `'Inter'`, sans-serif (Weights: 300, 400, 500)
- Glassmorphism 2.0: `backdrop-filter: blur(18px)` with subtle gradient border strokes (`1px solid rgba(255, 255, 255, 0.15)`).

#### 3. Animations & Interactions (GSAP + Lenis + ScrollTrigger)
- **Lenis Smooth Scroll**: `@studio-freight/lenis` smooth inertia scrolling.
- **GSAP ScrollTrigger**: Staggered text reveals, parallax image cards, animated count-ups for metric stats (`30+` Years, `5+` States, `600+` Mentored, `60+` Organizations).
- **Infinite Marquees**: Dual-track horizontal partner logo marquee & 3-track skill badges marquee.
- **3D Interactive Elements**: Card tilt effects, 3D flip impact gallery, and 3-column continuous scrolling testimonial walls.

---

### 📂 COMPLETE PAGE ARCHITECTURE & EXACT COPY

Build complete code files for all 5 pages:

#### PAGE 1: `index.html` (Home)
- **Floating Glass Navbar**: Brand logo (`assets/images/logo.png`), links (Home, About, Testimonials, Your Comments, Get in Touch CTA), and mobile toggle menu.
- **Kinetic Hero**: Animated ambient glow background, split headline *"Empowering Rural Futures Through Knowledge & Action"*, quote block *"The land does not belong to us — we belong to the land. When we nurture it with wisdom, it nurtures generations."*, primary green glowing CTA, and brand origin card (`Nav` = Newness/Resilience, `Karsh` = Utkarsh/Excellence).
- **Animated Metrics Ribbon**: Count-up numbers for 30+ Years, 5+ States, 600+ Mentored, 60+ Organizations.
- **Vision & Mission**: Dual glass panels with hover glow.
- **Core Focus Areas**: 3D Glass Cards for Organisational Development, Capacity Building, and Strategic Consulting.
- **Partner & Collaboration Marquee**: Scrolling marquee with Axis Bank Foundation, Ford Foundation, GIZ, Azim Premji Foundation, HUF, HDFC, WABAG, Cummins, Tata Trusts, UNDP, BRLF.
- **What We Do Marquee**: 3 scrolling rows of tag badges (Participatory Rural Appraisal, Livelihood Assessment, Community Workshops, Impact Modelling, Institution Building, SROI Analysis, Value Chain Gaps, Policy Alignment, etc.).
- **4-Stage OD Process**: Scoping & Diagnosing -> Visioning & Designing -> Implementation -> Measuring & Adapting.
- **Roy's Method & Circular Interventions**: Professional development and team building model.
- **Founder Showcase**: Dr. Sumit Roy feature card with 30+ years experience badge.
- **Interactive Impact Gallery**: 3D flip-cards for real field projects (Watershed, Rural Training, Forest Conservation, Women SHGs, Harvest).
- **Testimonial Wall**: 3-column continuous vertical scrolling wall with quotes from Sandeep Singh, Subrata Ghosh, Niladri Biswas, Banashree Chakraborty, Manoj Kumar Yadav, Savitry Mahali, Badal Maharana, Sumanta Neogi, Abhirupa Sarmadhikari, Diksha Satyawali, Barni Chatterjee, Er. Susheel Kumar Soni.
- **CTA & Footer**: Glass consultation CTA block and multi-column organic footer with email `navkarsh.sumit@gmail.com` & phone `+91-8910877673`.

#### PAGE 2: `about.html` (About Dr. Sumit Roy)
- **Profile Hero**: Photo showcase with 30+ Years experience badge.
- **Detailed Bio**: 30-year journey across West Bengal, Jharkhand, Chhattisgarh, BRLF, Tata Trusts CInI, IWMP SNLA.
- **6 Expertise Hex Cards**: INRM, Livelihoods, CSO Capacity Building, Rural Project Strategy & DPR, Mentoring, Climate Resilience.
- **5-Step Methodology**: Listen -> Assess -> Design -> Build Capacity -> Sustain Impact.
- **Values & Philosophy**: Field-Rooted Practice, Inclusive Development, Sustainability First, Continuous Learning.

#### PAGE 3: `testimonials.html` (Wall of Impact)
- **Filterable Grid**: All, Mentees, CSOs, Funding Partners.
- **12 Full Mentee Testimonial Cards**: Complete quotes, avatar initials, names, and current leadership designations.

#### PAGE 4: `experience.html` (Share Your Comments)
- **Feedback Form**: Fields for Name, Org, Role, Location, Context dropdown, Experience Textarea with live character counter (`0 / 3000`), Consent Checkbox, and dynamic submission modal.

#### PAGE 5: `contact.html` (Get in Touch / Consultation)
- **Consultation Request Form**: Name, Designation, Organisation, Phone, Email, Support Required text box (with character counter).
- **Contact Info Chips**: Email (`navkarsh.sumit@gmail.com`), Phone (`+91-8910877673`), Location (`India`).

---

### 💻 FILE STRUCTURE & OUTPUT FORMAT
Please provide the COMPLETE, non-truncated code for:
1. `index.html`
2. `about.html`
3. `testimonials.html`
4. `experience.html`
5. `contact.html`
6. `css/style.css` (Complete design system, tokens, layouts, glassmorphism, responsive queries)
7. `css/animations.css` (GSAP keyframes, marquees, 3D flips, glowing trails)
8. `js/main.js` (Lenis initialization, GSAP ScrollTrigger setups, counters, forms, mobile menu)
```
