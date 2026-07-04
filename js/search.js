const searchBox = document.getElementById("searchBox");

const searchResults = document.getElementById("searchResults");

function displayProducts(list){

searchResults.innerHTML="";

list.forEach(product=>{

searchResults.innerHTML+=`

<div class="product-card">

<img src="${product.image}" onerror="this.src='images/no-image.png'">

<h3>${product.name}</h3>

<p>${product.category}</p>

<div class="price">

<span class="offer">₹${product.price}</span>

</div>

<a href="product.html?id=${product.id}" class="btn-primary">

View Product

</a>

</div>

`;

});

}

displayProducts(products);

searchBox.addEventListener("keyup",()=>{

const value=searchBox.value.toLowerCase();

const filtered=products.filter(product=>

product.name.toLowerCase().includes(value)

||

product.category.toLowerCase().includes(value)

);

displayProducts(filtered);

});
