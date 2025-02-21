const quantityInput = document.getElementById("quantity");

function decreaseQuantity() {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

function increaseQuantity() {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
}

function addToCart(productId, quantity) {
    // const cart = JSON.parse(localStorage.getItem("cart")) || [];
    // cart.push({ productId, quantity });
    // localStorage.setItem("cart", JSON.stringify(cart));
    let teste = document.getElementById("quantity").value;
    alert("Produto adicionado ao carrinho! " + productId + " - " + teste);
}
