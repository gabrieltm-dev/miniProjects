function alterarStatus(id){
    let status = document.getElementById(`game-${id}`);
    let image = status.querySelector('.dashboard__item__img');
    let button = status.querySelector('.dashboard__item__button');
    let gameName = status.querySelector('.dashboard__item__name');
    if(button.classList.contains('dashboard__item__button--return')){
        if(confirm(`Tem certeza que deseja devolver o jogo ${gameName.textContent}?`)){
            image.classList.remove('dashboard__item__img--rented');
            button.classList.remove('dashboard__item__button--return');
            button.innerHTML = 'Alugar';
        }
    }else{
        button.classList.add('dashboard__item__button--return');
        image.classList.add('dashboard__item__img--rented');
        button.innerHTML = 'Devolver';
    }
}

function returnVerify(){
    answear = prompt('Tem certeza que deseja devolver o jogo? Digite s para Sim');
    if(answear == 's'){
        return true;
    }else{
        return false;
    }
}