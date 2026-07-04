// ===============================
// LAYORA SHOPPING CART
// ===============================

let cart = JSON.parse(localStorage.getItem("layoraCart")) || [];

function saveCart() {
    localStorage.setItem("layoraCart", JSON.stringify(cart));
}

function addToCart(id, name, price, image = "") {

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            id,
            name,
            price,
            image,
            qty: 1
        });
    }

    saveCart();
    updateCartCount();

    alert(name + " added to cart.");
}

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();

    updateCartCount();

    renderCart();

}

function changeQty(id, type) {

    const item = cart.find(i => i.id === id);

    if (!item) return;

    if (type === "plus") {

        item.qty++;

    } else {

        item.qty--;

        if (item.qty <= 0) {

            removeFromCart(id);

            return;

        }

    }

    saveCart();

    renderCart();

    updateCartCount();

}

function updateCartCount() {

    const count = document.getElementById("cartCount");

    if (!count) return;

    let total = 0;

    cart.forEach(item => {

        total += item.qty;

    });

    count.innerText = total;

}

function renderCart() {

    const box = document.getElementById("cartItems");

    const totalBox = document.getElementById("cartTotal");

    if (!box) return;

    box.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.qty;

        box.innerHTML += `

        <div class="cart-item">

            <div>

                <h3>${item.name}</h3>

                <p>₹${item.price}</p>

            </div>

            <div>

                <button onclick="changeQty('${item.id}','minus')">−</button>

                <span>${item.qty}</span>

                <button onclick="changeQty('${item.id}','plus')">+</button>

            </div>

        </div>

        `;

    });

    totalBox.innerHTML = "₹" + total;

}

document.addEventListener("DOMContentLoaded", () => {

    updateCartCount();

    renderCart();

});
