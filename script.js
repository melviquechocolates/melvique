function calculateTotal() {
  let basePrice = 149;
  let quantity = Number(document.getElementById("quantity").value);
  let addons = document.querySelectorAll(".addons input:checked");

  let addonsTotal = 0;
  addons.forEach(addon => {
    addonsTotal += Number(addon.value);
  });

  let total = (basePrice + addonsTotal) * quantity;
  document.getElementById("total").innerText = total;
}

function placeOrder() {
  let customerName = document.getElementById("customerName").value;
  let chocoName = document.getElementById("chocoName").value;
  let quantity = document.getElementById("quantity").value;
  let total = document.getElementById("total").innerText;

  let message =
    `Order from MELVIQUE 🍫%0A` +
    `Customer: ${customerName}%0A` +
    `Name on Chocolate: ${chocoName}%0A` +
    `Quantity: ${quantity}%0A` +
    `Total Price: ₹${total}`;

  window.location.href =
    "https://wa.me/919999829152?text=" + message;
}
