// List of cookie names, image filenames, and unique prices
const cookies = [
  { name: "Chocolate Chip", img: "chocolatechip.jpg", price: 350 },
  { name: "Oatmeal Raisin", img: "oatmealraisin.jpg", price: 300 },
  { name: "Peanut Butter", img: "peanutbutter.jpg", price: 320 },
  { name: "Snickerdoodles", img: "snickerdoodles.jpg", price: 330 },
  { name: "Sugar", img: "sugar.jpg", price: 280 },
  { name: "Gingerbread", img: "gingerbread.jpg", price: 360 },
  { name: "Shortbread", img: "shortbread.jpg", price: 340 },
  { name: "Macarons", img: "macarons.jpg", price: 500 },
  { name: "Biscotti", img: "biscotti.jpg", price: 390 },
  { name: "Linzer", img: "linzer.jpg", price: 410 },
  { name: "Thumbprint", img: "thumbprint.jpg", price: 370 },
  { name: "Molasses", img: "molasses.jpg", price: 300 },
  { name: "Butter", img: "butter.jpg", price: 270 },
  { name: "Double Chocolate", img: "doublechocolate.jpg", price: 420 },
  { name: "White Chocolate Macadamia", img: "whitechocolatemacadamia.jpg", price: 450 },
  { name: "Almond", img: "almond.jpg", price: 350 },
  { name: "Coconut Macaroons", img: "coconutmacaroons.jpg", price: 370 },
  { name: "Fortune", img: "fortune.jpg", price: 260 },
  { name: "Lemon", img: "lemon.jpg", price: 310 },
  { name: "Spritz", img: "spritz.jpg", price: 290 }
];

// Function to create cookie menu cards dynamically
function populateMenu() {
  const menuContainer = document.getElementById("cookieMenuContainer");
  cookies.forEach((cookie, index) => {
    const col = document.createElement("div");
    col.className = "col-md-4 col-lg-3 mb-4";

    col.innerHTML = `
      <div class="card h-100 shadow">
        <img src="${cookie.img}" class="card-img-top" alt="${cookie.name} Cookies" />
        <div class="card-body text-center">
          <h5 class="card-title">${cookie.name} Cookies</h5>
          <p class="card-text">Rs. ${cookie.price}</p>
          <button class="btn btn-primary buy-btn" data-cookie="${cookie.name}">Buy Now</button>
        </div>
      </div>
    `;

    menuContainer.appendChild(col);
  });

  // Add click event to "Buy Now" buttons
  document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", (e) => {
      const cookieName = e.target.getAttribute("data-cookie");
      alert(`You selected to buy: ${cookieName} Cookies!`);
      // You can later replace this alert with actual order logic
    });
  });
}

// Function to populate the select dropdown in the order form
function populateSelect() {
  const select = document.getElementById("cookieSelect");
  cookies.forEach(cookie => {
    const option = document.createElement("option");
    option.value = cookie.name;
    option.textContent = `${cookie.name} Cookies - Rs. ${cookie.price}`;
    select.appendChild(option);
  });
}

// Handle form submission
function handleFormSubmit() {
  const form = document.getElementById("orderForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const cookie = document.getElementById("cookieSelect").value;
    const notes = document.getElementById("notes").value.trim();

    if (!name || !phone || !cookie) {
      alert("Please fill all required fields!");
      return;
    }

    alert(`Thank you, ${name}! Your order for ${cookie} Cookies has been received.\nWe will contact you at ${phone}.\nNotes: ${notes || "None"}`);

    form.reset();
  });
}

// Initialize page
function init() {
  populateMenu();
  populateSelect();
  handleFormSubmit();
}

document.addEventListener("DOMContentLoaded", init);
