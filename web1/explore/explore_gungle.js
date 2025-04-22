const plants = [
    {
      name: "Tulsi (Holy Basil)",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Ocimum_tenuiflorum2.jpg",
      description: "Used for respiratory health, immunity, and stress relief."
    },
    {
      name: "Aloe Vera",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Aloe_vera_flower.jpg",
      description: "Soothes skin, aids digestion, and has anti-inflammatory properties."
    },
    {
      name: "Ashwagandha",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Withania_somnifera_Ashwagandha.jpg",
      description: "Boosts energy, reduces anxiety, and improves stamina."
    },
    {
      name: "Neem",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Neem_leaf.jpg",
      description: "Purifies blood, supports skin health, and acts as an antibacterial."
    }
  ];
  
  function loadPlants() {
    const grid = document.getElementById("plantGrid");
  
    plants.forEach((plant) => {
      const card = document.createElement("div");
      card.className = "plant-card";
  
      card.innerHTML = `
        <img src="${plant.image}" alt="${plant.name}">
        <div class="plant-card-content">
          <h3>${plant.name}</h3>
          <p>${plant.description}</p>
          <button onclick="alert('More info about ${plant.name} coming soon!')">Learn More</button>
        </div>
      `;
  
      grid.appendChild(card);
    });
  }
  
  window.onload = loadPlants;
  