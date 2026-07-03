// ====================================
// LAYORA CHECKOUT
// ====================================

const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

const quantity = Number(params.get("qty")) || 1;

const product = products.find(item => item.id === productId);

if (product) {

    document.getElementById("checkoutImage").src = product.image;

    document.getElementById("checkoutImage").alt = product.name;

    document.getElementById("checkoutProduct").textContent = product.name;

    document.getElementById("checkoutCategory").textContent = product.category;

    document.getElementById("checkoutQty").textContent = quantity;

    document.getElementById("checkoutPrice").textContent = product.price;

    document.getElementById("checkoutTotal").textContent = product.price * quantity;

    document.getElementById("productId").value = product.id;

    document.getElementById("productPriceHidden").value = product.price;

    document.getElementById("productQtyHidden").value = quantity;

} else {

    alert("Product not found.");

    window.location.href = "collections.html";

}

// ====================================
// PLACE ORDER
// ====================================

document.getElementById("checkoutForm").addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("customerName").value.trim();

    const phone = document.getElementById("customerPhone").value.trim();

    const email = document.getElementById("customerEmail").value.trim();

    const address = document.getElementById("customerAddress").value.trim();

    const city = document.getElementById("customerCity").value.trim();

    const state = document.getElementById("customerState").value.trim();

    const pincode = document.getElementById("customerPincode").value.trim();

    const notes = document.getElementById("customerNotes").value.trim();

    if(name === ""){

        alert("Please enter your name.");

        return;

    }

    if(!/^[0-9]{10}$/.test(phone)){

        alert("Please enter a valid 10 digit mobile number.");

        return;

    }

    if(address === ""){

        alert("Please enter your address.");

        return;

    }

    if(city === ""){

        alert("Please enter your city.");

        return;

    }

    if(state === ""){

        alert("Please enter your state.");

        return;

    }

    if(!/^[0-9]{6}$/.test(pincode)){

        alert("Please enter a valid 6 digit PIN code.");

        return;

    }

    const order = {

        orderId: "LAY" + Date.now(),

        productId: product.id,

        productName: product.name,

        category: product.category,

        quantity: quantity,

        price: product.price,

        total: product.price * quantity,

        customerName: name,

        customerPhone: phone,

        customerEmail: email,

        customerAddress: address,

        customerCity: city,

        customerState: state,

        customerPincode: pincode,

        customerNotes: notes,

        paymentMethod: "Cash on Delivery",

        orderDate: new Date().toLocaleString()

    };

    console.log(order);

    alert("Order Placed Successfully!\n\nThank you for shopping with LAYORA.");

    localStorage.setItem("layoraOrder", JSON.stringify(order));

    window.location.href = "order-successful.html";

});
