// ================= PRODUCT SETUP =================
const params = new URLSearchParams(window.location.search);
const product = params.get("product");

let basePrice = 0;
let productName = "";

if (product === "mini") {
  basePrice = 10;
  productName = "Mini Joy Chocolate";
}

if (product === "mid") {
  basePrice = 25;
  productName = "Mid-Size Chocolate Bliss";
}

if (product === "big") {
  basePrice = 99;
  productName = "Big Bite Chocolate Bar";
}

if (product === "name") {
  basePrice = 149;
  productName = "Personalised Name Chocolate";
  document.getElementById("nameBox").style.display = "block";
}

// ================= DOM REFERENCES =================
const title = document.getElementById("productTitle");
const qty = document.getElementById("qty");
const total = document.getElementById("total");

const cashews = document.getElementById("cashews");
const almonds = document.getElementById("almonds");
const chips = document.getElementById("chips");
const sprinkles = document.getElementById("sprinkles");

if (title) title.innerText = productName;

// ================= CALCULATION =================
function calculateTotal() {
  let addonPrice = 0;

  if (cashews && cashews.checked) addonPrice += 7;
  if (almonds && almonds.checked) addonPrice += 5;
  if (chips && chips.checked) addonPrice += 10;
  if (sprinkles && sprinkles.checked) addonPrice += 8;

  const quantity = Number(qty.value) || 1;
  const finalTotal = quantity * (basePrice + addonPrice);

  if (total) total.innerText = finalTotal;
}

// attach live update
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("change", calculateTotal);
  input.addEventListener("keyup", calculateTotal);
});

calculateTotal();

// ================= WHATSAPP ORDER =================
function placeOrder() {
  const quantity = qty.value;
  const totalPrice = total.innerText;

  let addons = [];
  if (cashews && cashews.checked) addons.push("Cashews");
  if (almonds && almonds.checked) addons.push("Almonds");
  if (chips && chips.checked) addons.push("Choco Chips");
  if (sprinkles && sprinkles.checked) addons.push("Sprinkles");

  const nameMsgEl = document.getElementById("customName");
  const nameMsg = nameMsgEl ? nameMsgEl.value : "";

  const message = `
MELVIQUE ORDER 🍫
Product: ${productName}
Quantity: ${quantity}
Add-ons: ${addons.length ? addons.join(", ") : "None"}
${nameMsg ? "Name/Message: " + nameMsg : ""}
Total: ₹${totalPrice}
`;

  window.location.href =
    "https://wa.me/919999829152?text=" +
    encodeURIComponent(message);
}
