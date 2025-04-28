const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const mpesaCheckout = document.getElementById('mpesa-checkout');
const cardCheckout = document.getElementById('card-checkout');

let cart = [];

// Open Cart
cartBtn.addEventListener('click', () => {
renderCartItems();
cartModal.classList.remove('hidden');
});

// Close Cart
closeCart.addEventListener('click', () => {
cartModal.classList.add('hidden');
});

// Function to Add Item to Cart
function addToCart(productName, productPrice, productImg) {
const existingProduct = cart.find(item => item.name === productName);
if (existingProduct) {
    existingProduct.quantity += 1;
} else {
    cart.push({ name: productName, price: productPrice, img: productImg, quantity: 1 });
}
alert(`${productName} added to cart!`);
}

// Attach event listeners to "Add to Cart" buttons
document.addEventListener("DOMContentLoaded", function() {
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

addToCartButtons.forEach(button => {
    button.addEventListener("click", function() {
    const productName = this.getAttribute("data-name");
    const productPrice = parseFloat(this.getAttribute("data-price"));
    const productImg = this.getAttribute("data-img");
    addToCart(productName, productPrice, productImg);
    });
});
});

// Render Cart Items
function renderCartItems() {
cartItemsContainer.innerHTML = '';

if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="text-gray-500 text-center">Your cart is empty!</p>';
    return;
}

cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('flex', 'items-center', 'justify-between', 'border', 'border-gray-200', 'rounded', 'p-2');

    itemDiv.innerHTML = `
    <div class="flex items-center space-x-4">
        <img src="${item.img}" alt="${item.name}" class="w-12 h-12 object-cover rounded">
        <div>
        <p class="font-semibold text-[#4b3d3a]">${item.name}</p>
        <p class="text-[#7c5b3a]">Ksh ${item.price} x ${item.quantity}</p>
        </div>
    </div>
    <button class="text-red-500 hover:text-red-700 font-bold" onclick="removeItem(${index})">X</button>
    `;

    cartItemsContainer.appendChild(itemDiv);
});
}

// Remove Item from Cart
function removeItem(index) {
cart.splice(index, 1);
renderCartItems();
}

// Checkout Buttons
mpesaCheckout.addEventListener('click', () => {
if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
}
alert('Proceeding to M-PESA payment...');
// You can add Mpesa API logic here
});

cardCheckout.addEventListener('click', () => {
if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
}
alert('Proceeding to Card payment...');
// You can add Card payment gateway logic here
});