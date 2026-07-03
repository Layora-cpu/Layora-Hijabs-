// ================================
// LAYORA HIJABS
// Main Script
// ================================

let filteredProducts = [...products];
let visibleProducts = 12;

// -------------------------------
// Product Rendering
// -------------------------------

function renderProducts(list = filteredProducts) {

    const container = document.getElementById("productsContainer");

    if (!container) return;

    container.innerHTML = "";

    const display = list.slice(0, visibleProducts);

    display.forEach(product => {

        container.innerHTML += `

        <div class="product-card">

            <span class="badge">${product.badge || ""}</span>

            <img
            src="${product.image}"
            alt="${product.name}"
            onerror="this.src='images/no-image.png'">

            <h3>${product.name}</h3>

            <p class="category">${product.category}</p>

            <div class="price">

                <span class="mrp">
                ₹${product.mrp}
                </span>

                <span class="offer">
                ₹${product.price}
                </span>

            </div>

            <button
            onclick="viewProduct('${product.id}')">

            View Details

            </button>

        </div>

        `;

    });

}

// -------------------------------
// Open Product
// -------------------------------

function viewProduct(id){

    window.location.href =
    "product.html?id="+id;

}

// -------------------------------
// Search
// -------------------------------

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const keyword =
this.value.toLowerCase();

filteredProducts =
products.filter(product=>

product.name.toLowerCase().includes(keyword)

||

product.category.toLowerCase().includes(keyword)

);

visibleProducts=12;

renderProducts();

});

}

// -------------------------------
// Category Filter
// -------------------------------

document.querySelectorAll(".filter-btn")

.forEach(button=>{

button.addEventListener("click",function(){

document.querySelectorAll(".filter-btn")

.forEach(btn=>btn.classList.remove("active"));

this.classList.add("active");

const category=
this.dataset.category;

if(category=="All"){

filteredProducts=[...products];

}

else{

filteredProducts=

products.filter(product=>

product.category===category);

}

visibleProducts=12;

renderProducts();

});

});

// -------------------------------
// Sort
// -------------------------------

const sortSelect=
document.getElementById("sortProducts");

if(sortSelect){

sortSelect.addEventListener("change",function(){

switch(this.value){

case "low-high":

filteredProducts.sort((a,b)=>a.price-b.price);

break;

case "high-low":

filteredProducts.sort((a,b)=>b.price-a.price);

break;

case "name":

filteredProducts.sort((a,b)=>

a.name.localeCompare(b.name));

break;

default:

filteredProducts=[...products];

}

renderProducts();

});

}

// -------------------------------
// Load More
// -------------------------------

const loadMore=

document.getElementById("loadMoreBtn");

if(loadMore){

loadMore.addEventListener("click",function(){

visibleProducts+=12;

renderProducts();

});

}

// -------------------------------
// Initial Load
// -------------------------------

renderProducts();


// ================================
// Newsletter
// ================================

document.querySelectorAll("form")

.forEach(form=>{

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you for subscribing to LAYORA!");

this.reset();

});

});

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(

this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});

// ================================
// Console
// ================================

console.log("LAYORA Website Loaded Successfully");
