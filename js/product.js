// ===============================
// LAYORA PRODUCT PAGE
// ===============================

function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function loadProduct() {

    const productId = getProductId();

    if (!productId) {
        window.location.href = "collections.html";
        return;
    }

    const product = products.find(p => p.id === productId);

    if (!product) {
        document.getElementById("productPage").innerHTML = `
            <div class="product-not-found">
                <h2>Product Not Found</h2>
                <p>This product does not exist.</p>
                <a href="collections.html">Back to Collections</a>
            </div>
        `;
        return;
    }

    document.title = product.name + " | Layora Hijabs";

    document.getElementById("productImage").src = product.image;
    document.getElementById("productImage").alt = product.name;

    document.getElementById("productName").textContent = product.name;

    document.getElementById("productCategory").textContent = product.category;

    document.getElementById("productPrice").textContent = "₹" + product.price;

    document.getElementById("productMRP").textContent = "₹" + product.mrp;

    document.getElementById("productBadge").textContent = product.badge || "";

    if(document.getElementById("productDescription")){
        document.getElementById("productDescription").innerHTML =
        "Premium quality <b>" + product.name + "</b> from Layora Hijabs. Crafted for elegance, comfort and everyday wear.";
    }
}

let quantity = 1;

function increaseQty(){

    quantity++;

    document.getElementById("qty").textContent = quantity;

}

function decreaseQty(){

    if(quantity>1){
