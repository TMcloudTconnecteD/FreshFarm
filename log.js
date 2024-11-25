document.getElementById("forgot-password").addEventListener("click", function () {
    alert("Password reset instructions sent to your email.");
  });
  
  document.getElementById("remove-number").addEventListener("click", function () {
    const phone = document.getElementById("phone").value;
    if (phone) {
      alert(`Phone number ${phone} flagged for removal. Contact support to confirm.`);
      document.getElementById("phone").value = "";
    } else {
      alert("Please enter a phone number to remove.");
    }
  });
  
  document.getElementById("user-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email && password) {
      alert("Login successful! Redirecting...");
      window.location.href = "farmlnk.html"; // Placeholder URL
    } else {
      alert("Please complete all required fields.");
    }
  });
  function viewPortfolio(portfolioId) {
    // You can change the portfolio link based on the ID
    if (portfolioId === 'portfolio1') {
      window.location.href = "portfolio1.html"; // Replace with the actual link to the portfolio
    } else if (portfolioId === 'portfolio2') {
      window.location.href = "portfolio2.html"; // Similarly for other portfolios
    }
  }
  