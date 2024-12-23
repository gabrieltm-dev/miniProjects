let valorTotal = 0;
var total = document.getElementById('valor-total');
var carrinho = document.getElementById('lista-produtos');

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let qntd = document.getElementById('quantidade').value;
    let preco = parseInt(valorProduto * qntd); 
    if(parseInt(qntd) > 0){
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${qntd}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span></section>`;
        valorTotal += preco
        total.textContent = `R$ ${valorTotal}`;
    }
    document.getElementById('quantidade').value = null;
}

function limpar(){
    valorTotal = 0;
    total.textContent = valorTotal;
    carrinho.innerHTML = '';
}
