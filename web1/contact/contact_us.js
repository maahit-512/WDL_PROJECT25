document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const response = document.getElementById("formResponse");
  
    if (!name || !email || !message) {
      alert("Please fill out all required fields.");
      return;
    }
  
    // Simulate form submission
    response.classList.remove("hidden");
    this.reset();
  });
  