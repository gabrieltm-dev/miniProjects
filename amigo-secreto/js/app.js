let listaAmigos = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo').value;
    let amigosConvidados = document.getElementById('lista-amigos');
    if(nome != ''){
        if(listaAmigos.some(amigo => amigo.trim().toLowerCase() === nome.trim().toLowerCase())){
            alert('Esse nome já está na lista!')
        }else{
            console.log(listaAmigos, listaAmigos.includes(nome));
            listaAmigos.push(` ${nome}`);
        }
    };
    amigosConvidados.textContent = listaAmigos;
    document.getElementById('nome-amigo').value = ''
}

function sortear(){
    let sorteados = document.getElementById('lista-sorteio');
    if(validarArray(listaAmigos)){
        sortearAmigos(listaAmigos);
        sorteados.innerHTML = formatarTextoAmigosSorteados(listaAmigos);
    }
}

function reiniciar(){
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    listaAmigos = [];
}

function sortearAmigos(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}

function formatarTextoAmigosSorteados(array){
    let textoFormatado = '';
    for(let i = 0; i <= array.length - 1; i++){
        if(i < array.length - 1){
            textoFormatado = textoFormatado + `${array[i]} --> ${array[i+1]}<br>`;
        }else{
            textoFormatado = textoFormatado + `${array[i]} --> ${array[0]}`;
        }
    }
    return textoFormatado;
}

function validarArray(array){
    if(array.length < 3){
        alert('Não é possível sortear apenas um amigo');
        return false;
    }
    return true;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        const button = document.getElementById('myButton');
        if(button){
            button.click(); 
        }
    }
});