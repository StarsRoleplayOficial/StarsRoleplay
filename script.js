let carrinho = [];

function abrirPagina(id){
    document.querySelectorAll(".pagina").forEach(pagina => {
        pagina.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");
}

function abrirLogin(){
    document.getElementById("loginModal").style.display = "flex";
}

function fecharLogin(){
    document.getElementById("loginModal").style.display = "none";
}

function copiarIP(){
    navigator.clipboard.writeText("mtasa://193.202.85.10:23673");
    alert("IP copiado!");
}

function abrirDiscord(){
    window.open("https://discord.gg/3eNh3WPef", "_blank");
}

function comprar(produto){
    carrinho.push(produto);
    atualizarCarrinho();
    abrirPagina("carrinho");
}

function atualizarCarrinho(){
    const cartItems = document.getElementById("cartItems");
    const subtotal = document.getElementById("subtotal");

    cartItems.innerHTML = "";

    if(carrinho.length <= 0){
        cartItems.innerHTML = "<p class='empty'>Seu carrinho está vazio.</p>";
        subtotal.innerText = "R$ 0,00";
        return;
    }

    let total = 0;

    carrinho.forEach((produto, index) => {
        let preco = 40;

        if(produto.includes("Bronze")) preco = 15;
        if(produto.includes("Prata")) preco = 25;
        if(produto.includes("Ouro")) preco = 35;
        if(produto.includes("Diamante")) preco = 50;
        if(produto.includes("ID 12")) preco = 15;
        if(produto.includes("ID 15")) preco = 20;
        if(produto.includes("ID 20")) preco = 25;
        if(produto.includes("ID 25")) preco = 30;

        total += preco;

        cartItems.innerHTML += `
            <div class="cart-product">
                <div class="product-thumb">STARS</div>

                <div>
                    <h3>${produto}</h3>
                    <p>Entrega imediata</p>
                    <strong>R$ ${preco},00</strong>
                </div>

                <button onclick="removerItem(${index})">🗑</button>
            </div>
        `;
    });

    subtotal.innerText = `R$ ${total},00`;
}

function removerItem(index){
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function finalizarCompra(){
    if(carrinho.length <= 0){
        alert("Seu carrinho está vazio.");
        return;
    }

    window.open("https://discord.gg/3eNh3WPef", "_blank");
}

function enviarDenuncia(){
    alert("Denúncia enviada para análise da staff.");
}

window.onload = function(){
    abrirPagina("home");
    atualizarCarrinho();
};