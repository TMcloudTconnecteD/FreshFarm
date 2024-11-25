document.addEventListener("DOMContentLoaded", function () {
    const bidders = [
      {
        location: "Nairobi",
        bidder: "John Doe",
        bidAmount: "KSh 5000",
        product: "Potatoes",
        contact: "+254 700 123 456",
        email: "johndoe@example.com",
      },
      {
        location: "Kisumu",
        bidder: "Jane Smith",
        bidAmount: "KSh 8000",
        product: "Tomatoes",
        contact: "+254 700 654 321",
        email: "janesmith@example.com",
      },
      {
        location: "Mombasa",
        bidder: "Ali Khan",
        bidAmount: "KSh 4500",
        product: "French Beans",
        contact: "+254 700 789 123",
        email: "alikhan@example.com",
      },
    ];
  
    const bidderTableBody = document.querySelector("#bidder-info tbody");
  
    bidders.forEach((bidder) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td class="location">${bidder.location}</td>
        <td class="bidder">
          ${bidder.bidder}
          <div class="tooltip">
            <p>Contact: ${bidder.contact}</p>
            <p>Email: ${bidder.email}</p>
          </div>
        </td>
        <td>${bidder.bidAmount}</td>
        <td>${bidder.product}</td>
      `;
      bidderTableBody.appendChild(row);
    });
  
    // Add Background Image to Location Column
    const locationCells = document.querySelectorAll("td.location");
    locationCells.forEach((cell) => {
      cell.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-bBxWA_t143Ja9m_rWe3n7r7_cyXRh-JOKQ&s")'; // Replace with city image
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Categories Data
    const categories = [
      "Cereals",
      "Potatoes",
      "Onions",
      "Tomatoes",
      "Beans",
      "French Beans",
      "French Peas",
      "Shopping",
      "Electronics",
    ];
  
    // Populate Categories
    const categoryGrid = document.getElementById("category-grid");
    categories.forEach((category) => {
      const categoryCard = document.createElement("div");
      categoryCard.classList.add("category-card");
      categoryCard.innerHTML = `
        <h3>${category}</h3>
        <p>Explore ${category}</p>
      `;
      categoryGrid.appendChild(categoryCard);
    });
  
    // Bidding Data
    const bids = [
      { item: "50kg of Potatoes", price: "KSh 5000" },
      { item: "100kg of Tomatoes", price: "KSh 8000" },
      { item: "30kg of French Beans", price: "KSh 4500" },
      { item: "20kg of Beans", price: "KSh 3000" },
      { item: "50kg of Cereals", price: "KSh 7000" },
    ];
  
    // Populate Bidding Area
    const biddingArea = document.getElementById("bidding-area");
    bids.forEach((bid) => {
      const bidCard = document.createElement("div");
      bidCard.classList.add("category-card");
      bidCard.innerHTML = `
        <h4>${bid.item}</h4>
        <p>Price: ${bid.price}</p>
        <button class="place-bid">Place Bid</button>
      `;
      biddingArea.appendChild(bidCard);
    });
  
   
  
    // Transport Options
    const transportOptions = document.getElementById("transport-options");
    const transports = [
      { type: "Motorbike", availability: "Nairobi to Kisumu" },
      { type: "Lorry", availability: "Mombasa to Nakuru" },
      { type: "Truck", availability: "Eldoret to Thika" },
      { type: "Bike", availability: "Timau"},
      { type: "Hilux", availability: "Timau to Nairobi"},
      {type : "Lorry", availability: "Ngobit to Marsabit"},
      {type: "Lorry", availability: "Timau to Marsabit"},
      
    ];
  
    transports.forEach((transport) => {
      const transportCard = document.createElement("div");
      transportCard.classList.add("category-card");
      transportCard.innerHTML = `
        <h4>${transport.type}</h4>
        <p>${transport.availability}</p>
      `;
      transportOptions.appendChild(transportCard);
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Today's Market Prices
    const marketPrices = [
      { item: "Tomatoes", price: "KSh 80/kg" },
      { item: "Potatoes", price: "KSh 50/kg" },
      { item: "Beans", price: "KSh 100/kg" },
      { item: "Onions", price: "KSh 70/kg" },
      { item: "Cereals", price: "KSh 120/kg" },
      { item: "Potatoes", price: "KSh 50/kg" },
      { item: "Beans", price: "KSh 100/kg" },
      { item: "Onions", price: "KSh 70/kg" },
      { item: "Cereals", price: "KSh 120/kg" },
    ];
  
    const marketContainer = document.getElementById("market-prices");
    marketPrices.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("category-card");
      productCard.innerHTML = `
        <h4>${product.item}</h4>
        <p>Price: ${product.price}</p>
      `;
      marketContainer.appendChild(productCard);
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Initialize Scrollable Sections
    const scrollableSections = document.querySelectorAll('.scrollable-section');
  
    scrollableSections.forEach(section => {
      const scrollContent = section.querySelector('.scroll-content');
      const dotsContainer = document.createElement('div');
      dotsContainer.classList.add('dots');
      section.appendChild(dotsContainer);
  
      // Create dots based on number of items
      const items = scrollContent.children;
      Array.from(items).forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
  
        // Scroll to respective item on dot click
        dot.addEventListener('click', () => {
          scrollContent.scrollLeft = index * items[0].offsetWidth;
          updateDots(dotsContainer, index);
        });
      });
  
      // Update dots based on scroll position
      scrollContent.addEventListener('scroll', () => {
        const activeIndex = Math.round(scrollContent.scrollLeft / items[0].offsetWidth);
        updateDots(dotsContainer, activeIndex);
      });
    });
  
    function updateDots(dotsContainer, activeIndex) {
      const dots = dotsContainer.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Dynamic Data Population
    const populateSection = (sectionId, data) => {
      const section = document.getElementById(sectionId);
      data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("category-card");
        card.innerHTML = `<h4>${item.type || item.item}</h4><p>${item.availability || item.price || item.description}</p>`;
        section.appendChild(card);
      });
    };
  
    // Categories
    const categories = ["Cereals", "Potatoes", "Onions", "Tomatoes", "Beans", "Shopping"];
    const categoryGrid = document.getElementById("category-grid");
    populateSection("category-grid", categories.map(cat => ({ item: cat, description: `Explore ${cat}` })));
  
    // Today's Market Prices
    const marketPrices = [
      { item: "Tomatoes", price: "KSh 80/kg" },
      { item: "Potatoes", price: "KSh 50/kg" },
      { item: "Beans", price: "KSh 100/kg" }
    ];
    populateSection("market-prices", marketPrices);
  
    // Bidding Items
    const bids = [
      { item: "50kg of Potatoes", price: "KSh 5000" },
      { item: "100kg of Tomatoes", price: "KSh 8000" }
    ];
    populateSection("bidding-area", bids);
  
    // Transport Options
    const transportOptions = [
      { type: "Lorry", availability: "Mombasa to Nakuru" },
      { type: "Bike", availability: "Timau to Nairobi" }
    ];
    populateSection("transport-options", transportOptions);
  });
  function viewPortfolio(portfolioId) {
    // You can change the portfolio link based on the ID
    if (portfolioId === 'portfolio3') {
      window.location.href = "portfolio.html"; // Replace with the actual link to the portfolio
    } else if (portfolioId === 'portfolio3') {
      window.location.href = "portfolio.html"; // Similarly for other portfolios
    }
  }
  