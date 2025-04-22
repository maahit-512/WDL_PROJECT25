const tours = [
    {
      title: "Digestive Health",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Mentha_arvensis.jpg",
      description: "Explore herbs that aid in digestion and support gut health.",
    },
    {
      title: "Immunity Boosters",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Ocimum_tenuiflorum2.jpg",
      description: "Discover plants that strengthen your immune system.",
    },
    {
      title: "Skin Care Secrets",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Aloe_vera_flower.jpg",
      description: "Learn about natural herbs for radiant and healthy skin.",
    },
    {
      title: "Mental Wellness",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Withania_somnifera_Ashwagandha.jpg",
      description: "Relaxing herbs to reduce stress, anxiety, and promote calm.",
    }
  ];
  
  function loadTours() {
    const grid = document.getElementById("tourGrid");
  
    tours.forEach(tour => {
      const card = document.createElement("div");
      card.className = "tour-card";
  
      card.innerHTML = `
        <img src="${tour.image}" alt="${tour.title}">
        <div class="tour-card-content">
          <h3>${tour.title}</h3>
          <p>${tour.description}</p>
          <button onclick="alert('Launching virtual tour: ${tour.title}')">Start Tour</button>
        </div>
      `;
  
      grid.appendChild(card);
    });
  }
  
  window.onload = loadTours;
  