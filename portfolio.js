// Scroll to Home Function
function scrollToHome() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Smooth Scroll to Any Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

// Toggle Videos in Footer
const toggleVideosButton = document.createElement("button");
toggleVideosButton.textContent = "Show/Hide Videos";
toggleVideosButton.className = "toggle-videos-btn";
document.querySelector(".footer").prepend(toggleVideosButton);

toggleVideosButton.addEventListener("click", () => {
    const videos = document.querySelector(".videos");
    if (videos.style.display === "none" || !videos.style.display) {
        videos.style.display = "block";
        toggleVideosButton.textContent = "Hide Videos";
    } else {
        videos.style.display = "none";
        toggleVideosButton.textContent = "Show Videos";
    }
});

// Back-to-Top Button
const backToTopButton = document.createElement("button");
backToTopButton.textContent = "↑";
backToTopButton.className = "back-to-top-btn";
document.body.appendChild(backToTopButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    scrollToHome();
});

// Modal Popup for Product Details
const productCards = document.querySelectorAll(".product-card");
const modal = document.createElement("div");
modal.className = "modal";
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-btn">&times;</span>
        <div class="modal-details"></div>
    </div>
`;
document.body.appendChild(modal);

productCards.forEach((card, index) => {
    card.addEventListener("click", () => {
        const modalDetails = modal.querySelector(".modal-details");
        modalDetails.innerHTML = `
            <h2>${card.querySelector("h3").textContent}</h2>
            <img src="${card.querySelector("img").src}" alt="Product Image">
            <p>${card.querySelector("p").textContent}</p>
        `;
        modal.style.display = "block";
    });
});

modal.querySelector(".close-btn").addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
// Call Button Functionality
document.querySelector(".call-button").addEventListener("click", () => {
    const phoneNumber = "+254700912695"; // Replace with the user's phone number
    window.location.href = `tel:${phoneNumber}`;
  });
  
  // Email Button Functionality
  document.querySelector(".email-button").addEventListener("click", () => {
    const emailAddress = "aobizness@gmail.com"; // Replace with the user's email
    window.location.href = `mailto:${emailAddress}`;
  });
  
  // Navigation Buttons (e.g., Home)
  document.querySelector("#home-button").addEventListener("click", () => {
    window.location.href = "farmlnk.html"; // Replace with the actual home page URL
  });
  
  // Recipes Button Functionality
  document.querySelector("#view-recipes").addEventListener("click", () => {
    // Dynamically load the recipe section
    const recipeContainer = document.querySelector("#recipe-section");
  
    // Example recipes
    const recipes = [
      {
        title: "Fresh Tomato Salad",
        steps: "Slice fresh tomatoes and mix with olive oil, salt, and basil.",
      },
      {
        title: "Potato Wedges",
        steps: "Cut potatoes into wedges, season with spices, and bake for 30 minutes.",
      },
      {
        title: "Onion Soup",
        steps: "Caramelize onions, add broth, and simmer for 45 minutes.",
      },
    ];
  
    // Clear existing content
    recipeContainer.innerHTML = "";
  
    // Add recipes dynamically
    recipes.forEach((recipe) => {
      const recipeCard = document.createElement("div");
      recipeCard.classList.add("recipe-card");
      recipeCard.innerHTML = `
        <h4>${recipe.title}</h4>
        <p>${recipe.steps}</p>
      `;
      recipeContainer.appendChild(recipeCard);
    });
  
    // Scroll to the recipe section
    recipeContainer.scrollIntoView({ behavior: "smooth" });
  });
  
  // Certificates Interactive Feature
  document.querySelectorAll(".certificate-item").forEach((certificate) => {
    certificate.addEventListener("click", () => {
      alert("This is a valid certificate for trading or organic farming.");
    });
  });
  