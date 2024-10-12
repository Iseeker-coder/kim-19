let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    cart.push({product,price});
    totalPrice +=price;
    updateCart();
}

function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.product} - Ksh${item.price} 
        <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
    });

    totalPriceElement.textContent = totalPrice;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    const deliveryOption = document.querySelector('input[name="delivery"]:checked').value;
    let deliveryCost = 0;
    if(deliveryOption === 'express') {
        deliveryCost = 25;
    }

    const finalTotal = totalPrice + deliveryCost;
   alert('Your total amount is Ksh' + finalTotal + '.Thank you for your purchase!');
}
function submitForm() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    if (name && address && contact) {
        document.getElementById('paymentForm').style.display = 'none';
        document.getElementById('confirmationMessage').style.display ='block';
    } else {
        alert('please fill in all the required fields.');
    }
}