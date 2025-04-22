const researchItems = [
    {
      title: "The Antibacterial Properties of Neem Extracts",
      description: "A detailed study on the antimicrobial efficacy of Azadirachta indica (Neem) leaves and bark.",
      link: "https://example.com/neem-research-paper"
    },
    {
      title: "Tulsi: A Queen of Herbs in Ayurveda",
      description: "Analyzing the adaptogenic, anti-inflammatory, and immunomodulatory roles of Ocimum sanctum.",
      link: "https://example.com/tulsi-study"
    },
    {
      title: "Ashwagandha and Cognitive Function",
      description: "Clinical evidence of Withania somnifera improving memory and reducing stress in adults.",
      link: "https://example.com/ashwagandha-research"
    },
    {
      title: "Aloe Vera in Dermatology",
      description: "Scientific review of Aloe Vera applications for burns, wounds, and skin rejuvenation.",
      link: "https://example.com/aloe-vera-study"
    }
  ];
  
  function loadResearch() {
    const grid = document.getElementById("researchGrid");
  
    researchItems.forEach(item => {
      const card = document.createElement("div");
      card.className = "research-card";
  
      card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a href="${item.link}" target="_blank">Read More</a>
      `;
  
      grid.appendChild(card);
    });
  }
  
  window.onload = loadResearch;
  