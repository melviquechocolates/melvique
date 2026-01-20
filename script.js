function orderWhatsApp(productName, price) {
  const phone = "9999829152"; // your WhatsApp number
  const message = `Hi MELVIQUE 🍫
I want to order:
Product: ${productName}
Price: ₹${price}`;

  const url = `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
