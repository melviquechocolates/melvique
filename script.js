function addons(i) {
  let p = 0;
  let list = [];

  if (document.getElementById("c"+i).checked) { p+=7; list.push("Cashews"); }
  if (document.getElementById("a"+i).checked) { p+=5; list.push("Almonds"); }
  if (document.getElementById("ch"+i).checked) { p+=10; list.push("Choco Chips"); }
  if (document.getElementById("s"+i).checked) { p+=8; list.push("Sprinkles"); }

  return {price:p, text:list.join(", ") || "None"};
}

function calc(i, base) {
  const q = Number(document.getElementById("qty"+i).value);
  const a = addons(i);
  document.getElementById("t"+i).innerText = q * (base + a.price);
}

function order(i, name, base) {
  const q = document.getElementById("qty"+i).value;
  const a = addons(i);
  const total = document.getElementById("t"+i).innerText;
  const msgExtra = document.getElementById("name4") ? document.getElementById("name4").value : "";

  const msg =
`MELVIQUE ORDER 🍫
Product: ${name}
Quantity: ${q}
Add-ons: ${a.text}
${msgExtra ? "Name/Message: "+msgExtra : ""}
Total: ₹${total}`;

  window.open("https://wa.me/919999829152?text=" + encodeURIComponent(msg));
}

