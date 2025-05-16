let erro = document.getElementById('erro')
let enquadramento = document.getElementById('enquadramento')
let movimento = document.getElementById('movimento')
let sobre = document.getElementById('sobre')
let recomendacao = document.getElementById('recomendacao')
let expanded = false;


function expandItems() {
    expanded = !expanded;
    const items = document.querySelectorAll('.item');

    items.forEach((item, index) => {
        setTimeout(() => {
            if (expanded) {
                item.classList.add('visible');

                // Remove classe de brilho completo caso exista
                item.classList.remove('shine-complete');

                // Após a animação de luz, aplica brilho completo
                setTimeout(() => {
                    item.classList.add('shine-complete');
                }, 1200); // tempo da animação de brilho
            } else {
                item.classList.remove('visible', 'shine-complete');
            }
        }, index * 150); // atraso sequencial
    });
}

erro.addEventListener('click', function () {
    window.location.href = 'erros.html'
})

enquadramento.addEventListener('click', function () {
    window.location.href = 'enquadramentos.html'
})

movimento.addEventListener('click', function () {
    window.location.href = 'movimentos.html'
})

recomendacao.addEventListener('click', function () {
    window.location.href = 'recomendacoes.html'
})

sobre.addEventListener('click', function () {
    window.location.href = 'sobre.html'
})