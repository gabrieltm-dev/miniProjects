const ingressos = {
    pista: document.getElementById('qtd-pista').textContent,
    superior: document.getElementById('qtd-superior').textContent,
    inferior: document.getElementById('qtd-inferior').textContent
};

function comprar(){
    let tipo = document.getElementById('tipo-ingresso').value;
    let qntd = document.getElementById('qtd').value;
    document.getElementById('qtd').value = null;
    ajustarQuantidade(qntd, tipo);
    ajustarTexto();
};  

function restart(){
    ingressos.pista = 100;
    ingressos.superior = 200;
    ingressos.inferior = 400;
    document.getElementById('qtd').value = null;
    ajustarTexto();
};

function ajustarQuantidade(qntd, tipo){
    if(qntd >= 0){
        switch(tipo){
            case 'pista':
                if(qntd <= parseInt(ingressos.pista)){
                    ingressos.pista -= qntd;
                }else{
                    alert('Quantidade maior do que os assentos disponíveis!')
                }
                break;
            case 'superior':
                if(qntd <= parseInt(ingressos.superior)){
                    ingressos.superior -= qntd;
                }else{
                    alert('Quantidade maior do que os assentos disponíveis!')
                }
                break;
            case 'inferior':
                if(qntd <= parseInt(ingressos.inferior)){
                    ingressos.inferior -= qntd;
                }else{
                    alert('Quantidade maior do que os assentos disponíveis!')
                }
                break;
        }
    }else{
        alert('Quantidade deve ser maior do que 0');
    }
}

function ajustarTexto(){
    document.getElementById('qtd-pista').textContent = ingressos.pista;
    document.getElementById('qtd-superior').textContent = ingressos.superior;
    document.getElementById('qtd-inferior').textContent = ingressos.inferior;
}