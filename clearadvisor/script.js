
// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Quote form: send details to WhatsApp (no database required)
const quoteForm = document.getElementById("quoteForm");

quoteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const category = document.getElementById("category").value;
  const details = document.getElementById("details").value.trim();

  if (!name || !phone || !category || !details) {
    alert("Please fill in all required fields.");
    return;
  }

  const message =
    "Hello ClearAdvisor, I would like to request a legal consultation and quote.\n\n" +
    "Name: " + name + "\n" +
    "Mobile Number: " + phone + "\n" +
    "Case Category: " + category + "\n" +
    "Case Details: " + details;

  const whatsappURL =
    "https://wa.me/918299475998?text=" + encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
});
