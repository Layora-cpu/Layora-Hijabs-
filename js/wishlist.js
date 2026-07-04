// ====================================
// LAYORA WISHLIST
// ====================================

let wishlist = JSON.parse(localStorage.getItem("layoraWishlist")) || [];

function saveWishlist() {
    localStorage.setItem("layoraWishlist", JSON.stringify(wishlist));
}

function addToWishlist(id, name, price, image = "") {

    const exists = wishlist.find(item => item.id === id);

    if (exists) {
        alert("This product is already in your wishlist.");
        return;
    }

    wishlist.push({
        id,
        name,
        price,
        image
    });

    saveWishlist();
    updateWishlistCount();

    alert(name + " added to wishlist.");
}

function removeFromWishlist(id) {

    wishlist = wishlist.filter(item => item.id !== id);

    saveWishlist();

    renderWishlist();

    updateWishlistCount();

}

function updateWishlistCount() {

    const count = document.getElementById("wishlistCount");

    if (!count) return;

    count.innerText = wishlist.length;

}

function renderWishlist() {

    const container = document.getElementById("wishlistItems");

    if (!container) return;

    container.innerHTML = "";

    if (wishlist.length === 0) {

        container.innerHTML = `
            <div class="empty-wishlist">
                <h2>Your Wishlist is Empty</h2>
                <p>Save your favourite hijabs here.</p>
            </div>
        `;

        return;
    }

    wishlist.forEach(item => {

        container.innerHTML += `
        <div class="wishlist-card">

            <img src="${item.image}" onerror="this.src='images/no-image.png'">

            <h3>${item.name}</h3>

            <p>₹${item.price}</p>

            <button onclick="removeFromWishlist('${item.id}')">

            Remove

            </button>

        </div>
        `;

    });

}

document.addEventListener("DOMContentLoaded", () => {

    updateWishlistCount();

    renderWishlist();

});
