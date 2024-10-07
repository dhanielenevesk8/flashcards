    function criacartão(categoria,pergunta,reposta){
        let container = document.getElementById('container');
        let cartão = document.createElement('article');
        cartão.className ='cartão';
        cartão.innerHTML = `<div class="conteudo-cartão">
        <h3>${categoria}</h3>
        <div class=pergunta-cartão'>
        <p>${pergunta}</p></div>
        <div class="resposta-cartão">
        <p>${reposta}</p>
        </div>
        </div>`

        let respostaVisivel = false;
        function viracartão() {
            respostaVisivel = !respostaVisivel;
            cartão.classList.toggle('active',respostaVisivel);
        }
        cartão.addEventListener('click',viracartão);
        container.appendChild(cartão);

    }