// ================= MODALS =================
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.style.display = "block";
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.style.display = "none";
}

// ================= WHATSAPP =================
function openWhatsApp(message) {
  const phone = "9999829152";
  const url =
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.location.href = url; // works on desktop + mobile
}

// ================= HELPER =================
function getAddons(prefix) {
  let addons = [];
  let price = 0;

  if (document.getElementById(`cashews${prefix}`).checked) {
    addons.push("Cashews");
    price += 7;
  }
  if (document.getElementById(`almonds${prefix}`).checked) {
    addons.push("Almonds");
    price += 5;
  }
  if (document.getElementById(`chips${prefix}`).checked) {
    addons.push("Choco Chips");
    price += 10;
  }
  if (document.getElementById(`sprinkles${prefix}`).checked) {
    addons.push("Sprinkles");
    price += 8;
  }

  return { addons, price };
}

// ================= PRODUCT 1 =================
function calculateTotal1() {
  const qty = Number(document.getElementById("qty1").value) || 0;
  const addon = getAddons(1);
  const total = qty * (10 + addon.price);
  document.getElementById("total1").innerText = total;
}

function placeOrder1() {
  const qty = document.getElementById("qty1").value;
  const addon = getAddons(1);
  const total = document.getElementById("total1").innerText;

  const msg = `MELVIQUE ORDER
Product: Mini Joy Chocolate
Quantity: ${qty}
Add-ons: ${addon.addons.join(", ") || "None"}
Total: ₹${total}`;

  closeModal("modal1");
  openWhatsApp(msg);
}

// ================= PRODUCT 2 =================
function calculateTotal2() {
  const qty = Number(document.getElementById("qty2").value) || 0;
  const addon = getAddons(2);
  const total = qty * (25 + addon.price);
  document.getElementById("total2").innerText = total;
}

function placeOrder2() {
  const qty = document.getElementById("qty2").value;
  const addon = getAddons(2);
  const total = document.getElementById("total2").innerText;

  const msg = `MELVIQUE ORDER
Product: Mid-Size Chocolate Bliss
Quantity: ${qty}
Add-ons: ${addon.addons.join(", ") || "None"}
Total: ₹${total}`;

  closeModal("modal2");
  openWhatsApp(msg);
}

// ================= PRODUCT 3 =================
function calculateTotal3() {
  const qty = Number(document.getElementById("qty3").value) || 0;
  const addon = getAddons(3);
  const total = qty * (99 + addon.price);
  document.getElementById("total3").innerText = total;
}

function placeOrder3() {
  const qty = document.getElementById("qty3").value;
  const addon = getAddons(3);
  const total = document.getElementById("total3").innerText;

  const msg = `MELVIQUE ORDER
Product: Big Bite Chocolate Bar
Quantity: ${qty}
Add-ons: ${addon.addons.join(", ") || "None"}
Total: ₹${total}`;

  closeModal("modal3");
  openWhatsApp(msg);
}

// ================= PRODUCT 4 =================
function calculateTotal4() {
  const qty = Number(document.getElementById("qty4").value) || 0;
  const addon = getAddons(4);
  const total = qty * (149 + addon.price);
  document.getElementById("total4").innerText = total;
}

function placeOrder4() {
  const qty = document.getElementById("qty4").value;
  const nameMsg = document.getElementById("name4").value || "—";
  const addon = getAddons(4);
  const total = document.getElementById("total4").innerText;

  const msg = `MELVIQUE ORDER
Product: Personalised Name Chocolate
Quantity: ${qty}
Name/Message: ${nameMsg}
Add-ons: ${addon.addons.join(", ") || "None"}
Total: ₹${total}`;

  closeModal("modal4");
  openWhatsApp(msg);
}
