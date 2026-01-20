const params = new URLSearchParams(window.location.search);
const product = params.get("product");

let base = 0;
let name = "";

if (product === "mini") { base = 10; name="Mini Joy Chocolate"; }
if (product === "mid") { base = 25; name="Mid Size Chocolate Bliss"; }
if (product === "big") { base = 99; name="Big Bite Chocolate Bar"; }
if (product === "name") {
  base = 149;
  name="Personalised Name Chocolate";
  document.getElementById("nameBox").style.display="block";
}

document.getElementById("title").innerText = name;
document.getElementById("total").innerText = base;

function calculate() {
  const q = Number(qty.value);
  let addon = 0;

  if (c.checked) addon += 7;
  if (a.checked) addon += 5;
  if (ch.checked) addon += 10;
  if (s.checked) addon += 8;

  total.innerText = q * (base + addon);
}

function placeOrder() {
  const q = qty.value;
  const totalPrice = total.innerText;
  const msgText = msg ? msg.value : "";

  const text =
`MELVIQUE ORDER 🍫
Product: ${name}
Quantity: ${q}
${msgText ? "Name/Message: "+msgText : ""}
Total: ₹${totalPrice}`;

  window.location.href =
    "https://wa.me/919999829152?text=" + encodeURIComponent(text);
}
