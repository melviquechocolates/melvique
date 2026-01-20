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

document.getElementById("productTitle").innerText = productName;

const qty = document.getElementById("qty");
const total = document.getElementById("total");

function calculateTotal() {
  let addons = 0;
  if (cashews.checked) addons += 7;
  if (almonds.checked) addons += 5;
  if (chips.checked) addons += 10;
  if (sprinkles.checked) addons += 8;

  total.innerText = qty.value * (basePrice + addons);
}

document.querySelectorAll("input").forEach(i =>
  i.addEventListener("change", calculateTotal)
);

calculateTotal();

function placeOrder() {
  const nameMsg = document.getElementById("customName")
    ? document.getElementById("customName").value
    : "";

  const message = `MELVIQUE ORDER 🍫
Product: ${productName}
Quantity: ${qty.value}
${nameMsg ? "Name/Message: " + nameMsg : ""}
Total: ₹${total.innerText}`;

  window.location.href =
    "https://wa.me/919999829152?text=" +
    encodeURIComponent(message);
}
