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

function abrirCarrinho(){

    document.getElementById("cartModal").style.display = "flex";

    atualizarCarrinho();
}

function fecharCarrinho(){

    document.getElementById("cartModal").style.display = "none";
}

function copiarIP(){

    navigator.clipboard.writeText(
        "mtasa://193.202.85.10:23673"
    );

    alert("IP copiado!");
}

function abrirDiscord(){

    window.open(
        "https://discord.gg/3eNh3WPef",
        "_blank"
    );
}

function comprar(produto){

    carrinho.push(produto);

    atualizarCarrinho();

    abrirCarrinho();
}

function atualizarCarrinho(){

    const cartItems =
    document.getElementById("cartItems");

    cartItems.innerHTML = "";

    if(carrinho.length <= 0){

        cartItems.innerHTML = `
        
        <p style="
        color:#999;
        text-align:center;
        margin-top:20px;
        ">
        Seu carrinho está vazio.
        </p>
        
        `;

        return;
    }

    carrinho.forEach((produto,index) => {

        cartItems.innerHTML += `

        <div style="
        background:#111;
        padding:18px;
        border-radius:18px;
        margin-bottom:15px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        ">

            <div>

                <h3 style="
                margin-bottom:6px;
                ">
                ${produto}
                </h3>

                <p style="
                color:gold;
                font-weight:700;
                ">
                Produto STARS
                </p>

            </div>

            <button onclick="removerItem(${index})"
            style="
            width:45px;
            height:45px;
            border:none;
            border-radius:12px;
            background:#1b1b1b;
            color:white;
            cursor:pointer;
            ">
            ✕
            </button>

        </div>

        `;
    });

    cartItems.innerHTML += `

    <button onclick="finalizarCompra()"
    style="
    width:100%;
    margin-top:20px;
    padding:18px;
    border:none;
    border-radius:18px;
    background:linear-gradient(135deg,#ffd700,#b98b00);
    font-weight:900;
    cursor:pointer;
    ">
    Finalizar Compra
    </button>

    `;
}

function removerItem(index){

    carrinho.splice(index,1);

    atualizarCarrinho();
}

function finalizarCompra(){

    alert(
        "Compra iniciada! Finalize pelo Discord da STARS."
    );

    window.open(
        "https://discord.gg/3eNh3WPef",
        "_blank"
    );
}

window.onload = function(){

    abrirPagina("home");
}