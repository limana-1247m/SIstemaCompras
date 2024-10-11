let cart = []; // temos um array vazio e cada itém que é clicado é adicionado
let total = 0;

function addToCart(product, price) {
    const index = cart.findIndex(item => item.product === product);
    if (index === -1) { // Verifica se o produto já está no carrinho
        cart.push({ product, price });
        total += price; // faz a soma de todos os produtos que sao adicionados 
    }
    updateCart();
}

function removeFromCart(product, price) {
    const index = cart.findIndex(item => item.product === product);
    if (index > -1) {
        total -= cart[index].price; // Subtrai o preço do item removido do total
        cart.splice(index, 1); // Remove o item do array
    }
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById('cart');
    const totalElement = document.querySelector('.price');

    // Limpa o carrinho antes de atualizar
    cartDiv.innerHTML = '';

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>O carrinho está vazio</p>';
    } else {
        cart.forEach((item) => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `${item.product} - R$ ${item.price.toFixed(2)}`;
            cartDiv.appendChild(itemDiv);
        });
    }

    // Atualiza o total
    totalElement.innerText = `R$ ${total.toFixed(2)}`;
}
