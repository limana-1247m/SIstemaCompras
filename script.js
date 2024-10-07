let cart = [];
let total = 0;

function addToCart(product,price){

cart.push({ product,price});
total += price;

updateCart();

}

function updateCart() {
    const cartDiv = document.getElementById('cart')
    const totalElement = document.getElementById('total');

    //Limpa o carrinho antes de atualizar

    cartDiv.innerHTML = '';

    if(cart.length === 0){
        cartDiv.innerHTML = '<p> O carrinho está vazio </p>';
    } else {
        cart.forEach((item, index) =>{
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML =  `${item.product} - R$ ${item.price.toFixed(2)} <button onClick = 'removeFromCart(${index})">Remover</button>`;
            cartDiv.appendChild(itemDiv);
        });
    }

    //Atualiza o total
    totalElement.innerText = total.toFixed(2);
}

function removeFromCart(index){
    total = cart [index].price; // vai subtrair o preço do item removido do total
    cart.splice(index,1); // Vai remover o item do array

    //Atualiza o carrinho
    updateCart();
}