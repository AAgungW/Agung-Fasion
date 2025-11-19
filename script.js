let cart = [];
let total = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const id = product.dataset.id;
        const name = product.dataset.name;
        const priceStr = product.dataset.price;
        
        // Validasi harga: pastikan angka valid
        const price = parseInt(priceStr);
        if (isNaN(price) || price <= 0) {
            alert(`Harga produk "${name}" tidak valid! Periksa data-price.`);
            return; // Jangan tambah ke keranjang
        }
        
        cart.push({ id, name, price });
        total += price;
        updateCart();
    });
});

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total').textContent = total;
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', total);
}