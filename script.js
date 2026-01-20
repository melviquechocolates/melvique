// Product data
const products = {
    'mini-joy': { name: 'Mini Joy Chocolate', price: 10, img: 'https://source.unsplash.com/300x200/?mini,chocolate' },
    'mid-size': { name: 'Mid Size Chocolate Bliss', price: 25, img: 'https://source.unsplash.com/300x200/?chocolate,bliss' },
    'big-bite': { name: 'Big Bite Chocolate Bar', price: 99, img: 'https://source.unsplash.com/300x200/?chocolate,bar' },
    'personalised': { name: 'Personalised Name Chocolate', price: 149, img: 'https://source.unsplash.com/300x200/?personalized,chocolate' }
};

// Get product from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product');
const product = products[productId];

if (!product) {
    alert('Invalid product. Redirecting to homepage.');
    window.location.href = 'index.html';
}

// Populate page
document.getElementById('product-img').src = product.img;
document.getElementById('product-name').textContent = product.name;
document.getElementById('base-price').textContent = `Base Price: ₹${product.price} per piece`;

// Show personalised field only for personalised product
if (productId === 'personalised') {
    document.getElementById('personalised-field').style.display = 'block';
}

// Live price calculation
function calculateTotal() {
    const qty = parseInt(document.getElementById('quantity').value) || 1;
    let addOnTotal = 0;
    const addOns = [];
    document.querySelectorAll('.addon:checked').forEach(cb => {
        addOnTotal += parseInt(cb.dataset.price);
        addOns.push(cb.parentElement.textContent.split(' +')[0]);
    });
    const total = qty * (product.price + addOnTotal);
    document.getElementById('total').textContent = total;
    return { qty, addOns, total };
}

// Event listeners
document.getElementById('quantity').addEventListener('input', calculateTotal);
document.querySelectorAll('.addon').forEach(cb => cb.addEventListener('change', calculateTotal));
calculateTotal(); // Initial calc

// WhatsApp order
document.getElementById('order-btn').addEventListener('click', () => {
    const { qty, addOns, total } = calculateTotal();
    const nameMsg = productId === 'personalised' ? document.getElementById('name-msg').value : '';
    const message = `MELVIQUE ORDER\nProduct: ${product.name}\nQuantity: ${qty}\nAdd-ons: ${addOns.length ? addOns.join(', ') : 'None'}${nameMsg ? '\nName/Message: ' + nameMsg : ''}\nTotal Price: ₹${total}`;
    const phone = '919999829152';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
});
