const params = new URLSearchParams(window.location.search);
const product = params.get("product");

const products = {
  mini: { name: "Mini Joy Chocolate", price: 10 },
  mid: { name: "Mid-Size Chocolate Bliss", price: 25 },
  big: { name: "Big Bite Chocolate Bar", price: 99 },
  personal: { name: "Personalised Name Chocolate", price: 149 }
};

const productData = products[product];

document.getElementById("productName").innerText = productData.name;

if (product === "personal") {
  document.getElementById("nameBox").style.display = "block";
}

function calculateTotal() {
  const qty = Number(document.getElementById("qty").value);
  let addonTotal = 0;

  document.querySelectorAll(".addons input:checked").forEach(a => {
    addonTotal += Number(a.value);
  });

  const total = qty * (productData.price + addonTotal);
  document.getElementById("total").innerText = total;
}

document.getElementById("qty").addEventListener("input", calculateTotal);
document.querySelectorAll(".addons input").forEach(a =>
  a.addEventListener("change", calculateTotal)
);

calculateTotal();

function placeOrder() {
  const qty = document.getElementById("qty").value;
  const total = document.getElementById("total").innerText;
  const name = document.getElementById("nameMsg")?.value || "N/A";

  let addons = [];
  document.querySelectorAll(".addons input:checked").forEach(a => {
    addons.push(a.parentElement.innerText);
  });

  const message = `
MELVIQUE ORDER
Product: ${productData.name}
Quantity: ${qty}
Add-ons: ${addons.join(", ") || "None"}
${product === "personal" ? "Name: " + name : ""}
Total: ₹${total}
  `;

  window.location.href =
  "https://wa.me/919999829152?text=" + encodeURIComponent(message);
}

