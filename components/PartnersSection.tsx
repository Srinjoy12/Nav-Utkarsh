import { LogoCloud } from "@/components/ui/logo-cloud-3";

const logos = [
  { alt: "World Wildlife Fund (WWF)", src: "https://api.dicebear.com/7.x/initials/svg?seed=WWF" },
  { alt: "School of Fundamental Research", src: "https://api.dicebear.com/7.x/initials/svg?seed=SFR" },
  { alt: "Sri Ramakrishna Sarada Asrama", src: "https://api.dicebear.com/7.x/initials/svg?seed=SRSA" },
  { alt: "NEEDS, Deoghar Jharkhand", src: "https://api.dicebear.com/7.x/initials/svg?seed=NEEDS" },
  { alt: "CInI Tata Trust", src: "https://api.dicebear.com/7.x/initials/svg?seed=TATA" },
  { alt: "PRADAN", src: "https://api.dicebear.com/7.x/initials/svg?seed=PRADAN" },
  { alt: "RAJARHAT PRASARI", src: "https://api.dicebear.com/7.x/initials/svg?seed=RP" },
  { alt: "AQUADAM, Pune", src: "https://api.dicebear.com/7.x/initials/svg?seed=AQ" },
  { alt: "People’s Science Institute", src: "https://api.dicebear.com/7.x/initials/svg?seed=PSI" },
  { alt: "Ammucare Charitable Trust", src: "https://api.dicebear.com/7.x/initials/svg?seed=ACT" },
  { alt: "LUPIN, Maharashtra", src: "https://api.dicebear.com/7.x/initials/svg?seed=LUPIN" },
  { alt: "PARHIT, Madhya Pradesh", src: "https://api.dicebear.com/7.x/initials/svg?seed=PARHIT" },
  { alt: "SEWA, Orissa", src: "https://api.dicebear.com/7.x/initials/svg?seed=SEWA" },
  { alt: "Gram Sudhar Samiti", src: "https://api.dicebear.com/7.x/initials/svg?seed=GSS" },
  { alt: "BAIF", src: "https://api.dicebear.com/7.x/initials/svg?seed=BAIF" },
  { alt: "Manav Jivan Vikas Sansthan", src: "https://api.dicebear.com/7.x/initials/svg?seed=MJVS" },
  { alt: "Foundation for Ecological Security (FES)", src: "https://api.dicebear.com/7.x/initials/svg?seed=FES" },
  { alt: "PRAN, UP", src: "https://api.dicebear.com/7.x/initials/svg?seed=PRAN" },
  { alt: "SEEDS, Andhra Pradesh", src: "https://api.dicebear.com/7.x/initials/svg?seed=SEEDS" },
  { alt: "CYSD", src: "https://api.dicebear.com/7.x/initials/svg?seed=CYSD" },
  { alt: "Digambarpur Angikar", src: "https://api.dicebear.com/7.x/initials/svg?seed=DA" },
  { alt: "Shroff Foundation Trust (SFT)", src: "https://api.dicebear.com/7.x/initials/svg?seed=SFT" },
  { alt: "Gramin Vikas Mancha", src: "https://api.dicebear.com/7.x/initials/svg?seed=GVM" },
  { alt: "VSK, Jharkhand", src: "https://api.dicebear.com/7.x/initials/svg?seed=VSK" },
  { alt: "Jansahajya, Orissa", src: "https://api.dicebear.com/7.x/initials/svg?seed=JS" },
  { alt: "AKRSP(I)", src: "https://api.dicebear.com/7.x/initials/svg?seed=AKRSP" },
  { alt: "DRCSC, West Bengal", src: "https://api.dicebear.com/7.x/initials/svg?seed=DRCSC" },
  { alt: "Tagore Society for Rural Development", src: "https://api.dicebear.com/7.x/initials/svg?seed=TSRD" },
  { alt: "Loka Kalyan Parishad", src: "https://api.dicebear.com/7.x/initials/svg?seed=LKP" },
  { alt: "Shamahita Math", src: "https://api.dicebear.com/7.x/initials/svg?seed=SM" },
  { alt: "Rural Development Association", src: "https://api.dicebear.com/7.x/initials/svg?seed=RDA" },
  { alt: "WASSAN, Jharkhand", src: "https://api.dicebear.com/7.x/initials/svg?seed=WASSAN" },
  { alt: "ASA, Jharkhand", src: "https://api.dicebear.com/7.x/initials/svg?seed=ASA" },
  { alt: "Gramin Vikas Trust", src: "https://api.dicebear.com/7.x/initials/svg?seed=GVT" },
  { alt: "SPWD, Jharkhand", src: "https://api.dicebear.com/7.x/initials/svg?seed=SPWD" },
  { alt: "Kalamandir, Jharkhand", src: "https://api.dicebear.com/7.x/initials/svg?seed=KM" },
  { alt: "Support, Jharkhand", src: "https://api.dicebear.com/7.x/initials/svg?seed=SUPPORT" },
  { alt: "Jan Jagaran Kendra", src: "https://api.dicebear.com/7.x/initials/svg?seed=JJK" },
  { alt: "GSMT, Maharashtra", src: "https://api.dicebear.com/7.x/initials/svg?seed=GSMT" },
  { alt: "Harsha Trust", src: "https://api.dicebear.com/7.x/initials/svg?seed=HT" },
  { alt: "Indian Grameen Services", src: "https://api.dicebear.com/7.x/initials/svg?seed=IGS" },
  { alt: "ASORD, Chhattisgarh", src: "https://api.dicebear.com/7.x/initials/svg?seed=ASORD" },
  { alt: "Samerth Charitable Trust", src: "https://api.dicebear.com/7.x/initials/svg?seed=SCT" },
  { alt: "Bastar Sewak Mandal (BSM)", src: "https://api.dicebear.com/7.x/initials/svg?seed=BSM" },
  { alt: "Lok Shakti Samiti (LSS)", src: "https://api.dicebear.com/7.x/initials/svg?seed=LSS" },
  { alt: "Sahabhagi Samaj Sevi Sanstha", src: "https://api.dicebear.com/7.x/initials/svg?seed=SSSS" },
  { alt: "Sangata Sahabhagi Gramin Vikas Sansthan", src: "https://api.dicebear.com/7.x/initials/svg?seed=SSGVS" },
  { alt: "Surguja Gramin Vikas Sansthan (SGVS)", src: "https://api.dicebear.com/7.x/initials/svg?seed=SGVS" },
  { alt: "CARMDAKSH, Chhattisgarh", src: "https://api.dicebear.com/7.x/initials/svg?seed=CARM" },
  { alt: "SRIJAN", src: "https://api.dicebear.com/7.x/initials/svg?seed=SRIJAN" },
  { alt: "Choupal, Chhattisgarh", src: "https://api.dicebear.com/7.x/initials/svg?seed=CHOUPAL" },
  { alt: "SESTA, Assam", src: "https://api.dicebear.com/7.x/initials/svg?seed=SESTA" },
  { alt: "NERSWN, Assam", src: "https://api.dicebear.com/7.x/initials/svg?seed=NERSWN" },
  { alt: "ANT, Assam", src: "https://api.dicebear.com/7.x/initials/svg?seed=ANT" },
  { alt: "KABIL, Assam", src: "https://api.dicebear.com/7.x/initials/svg?seed=KABIL" },
  { alt: "CONARE, Telangana", src: "https://api.dicebear.com/7.x/initials/svg?seed=CONARE" },
  { alt: "Centre for Peoples Forestry", src: "https://api.dicebear.com/7.x/initials/svg?seed=CPF" },
  { alt: "IIT Delhi", src: "https://api.dicebear.com/7.x/initials/svg?seed=IITD" }
];

export default function PartnersSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Partners & Collaborators</h2>
          <p className="text-muted-foreground max-width-2xl mx-auto">
            Working together with leading organizations across India to drive sustainable rural transformation.
          </p>
        </div>
        
        <LogoCloud logos={logos.slice(0, 30)} />
        <LogoCloud logos={logos.slice(30)} className="mt-8" />
      </div>
    </section>
  );
}
