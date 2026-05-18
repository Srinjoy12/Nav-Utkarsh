const partners = [
    { name: "World Wildlife Fund (WWF)", category: "Conservation" },
    { name: "School of Fundamental Research", category: "Research" },
    { name: "Sri Ramakrishna Sarada Asrama", category: "Livelihood" },
    { name: "NEEDS, Deoghar Jharkhand", category: "Livelihood" },
    { name: "CInI Tata Trust", category: "Smart Village" },
    { name: "PRADAN", category: "Watershed" },
    { name: "RAJARHAT PRASARI", category: "Livelihood" },
    { name: "AQUADAM, Pune", category: "Groundwater" },
    { name: "People’s Science Institute", category: "Groundwater" },
    { name: "Ammucare Charitable Trust", category: "Groundwater" },
    { name: "LUPIN, Maharashtra", category: "Groundwater" },
    { name: "PARHIT, Madhya Pradesh", category: "Groundwater" },
    { name: "SEWA, Orissa", category: "Livelihood" },
    { name: "Gram Sudhar Samiti", category: "Livelihood" },
    { name: "BAIF", category: "Livelihood" },
    { name: "Manav Jivan Vikas Sansthan", category: "Livelihood" },
    { name: "Foundation for Ecological Security", category: "Ecology" },
    { name: "PRAN, UP", category: "Agriculture" },
    { name: "SEEDS, Andhra Pradesh", category: "Agriculture" },
    { name: "CYSD", category: "Watershed" },
    { name: "Digambarpur Angikar", category: "Livelihood" },
    { name: "Shroff Foundation Trust", category: "Livelihood" },
    { name: "Gramin Vikas Mancha", category: "Livelihood" },
    { name: "VSK, Jharkhand", category: "Agriculture" },
    { name: "Jansahajya, Orissa", category: "Livelihood" },
    { name: "AKRSP(I)", category: "Smart Village" },
    { name: "DRCSC, West Bengal", category: "Watershed" },
    { name: "Tagore Society for Rural Development", category: "Watershed" },
    { name: "Loka Kalyan Parishad", category: "Watershed" },
    { name: "Shamahita Math", category: "Watershed" },
    { name: "Rural Development Association", category: "Watershed" },
    { name: "WASSAN, Jharkhand", category: "Research" },
    { name: "ASA, Jharkhand", category: "Watershed" },
    { name: "Gramin Vikas Trust", category: "Watershed" },
    { name: "SPWD, Jharkhand", category: "Watershed" },
    { name: "Kalamandir, Jharkhand", category: "Watershed" },
    { name: "Support, Jharkhand", category: "Watershed" },
    { name: "Jan Jagaran Kendra", category: "Watershed" },
    { name: "GSMT, Maharashtra", category: "Development" },
    { name: "Harsha Trust", category: "Watershed" },
    { name: "Indian Grameen Services", category: "Livelihood" },
    { name: "ASORD, Chhattisgarh", category: "Watershed" },
    { name: "Samerth Charitable Trust", category: "Watershed" },
    { name: "Bastar Sewak Mandal", category: "Watershed" },
    { name: "Lok Shakti Samiti", category: "Watershed" },
    { name: "Sahabhagi Samaj Sevi Sanstha", category: "Watershed" },
    { name: "Sangata Sahabhagi Gramin Vikas Sansthan", category: "Watershed" },
    { name: "Surguja Gramin Vikas Sansthan", category: "Watershed" },
    { name: "CARMDAKSH, Chhattisgarh", category: "Watershed" },
    { name: "SRIJAN", category: "Watershed" },
    { name: "Choupal, Chhattisgarh", category: "Watershed" },
    { name: "SESTA, Assam", category: "Livelihood" },
    { name: "NERSWN, Assam", category: "Livelihood" },
    { name: "ANT, Assam", category: "Livelihood" },
    { name: "KABIL, Assam", category: "Livelihood" },
    { name: "CONARE, Telangana", category: "Livelihood" },
    { name: "Centre for Peoples Forestry", category: "Forestry" },
    { name: "IIT Delhi", category: "Research" }
];

function initLogoMarquee() {
    const track1 = document.getElementById('logoTrack1');
    const track2 = document.getElementById('logoTrack2');
    
    if (!track1 || !track2) return;

    // Split partners into two groups for two rows
    const midPoint = Math.ceil(partners.length / 2);
    const group1 = partners.slice(0, midPoint);
    const group2 = partners.slice(midPoint);

    function createLogoItem(partner) {
        const div = document.createElement('div');
        div.className = 'logo-item';
        
        div.innerHTML = `<span>${partner.name}</span>`;
        return div;
    }

    // Populate track 1
    group1.forEach(p => {
        track1.appendChild(createLogoItem(p));
    });
    // Duplicate for infinite effect
    group1.forEach(p => {
        track1.appendChild(createLogoItem(p));
    });

    // Populate track 2
    group2.forEach(p => {
        track2.appendChild(createLogoItem(p));
    });
    // Duplicate for infinite effect
    group2.forEach(p => {
        track2.appendChild(createLogoItem(p));
    });
}

document.addEventListener('DOMContentLoaded', initLogoMarquee);
