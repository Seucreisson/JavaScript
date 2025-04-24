function seleçao() {
    const dados = document.querySelector('#dados');
    const resultado = document.querySelector('#fim');

    dados.onsubmit = function (event) {
        event.preventDefault();
    }
    function recebe(event) {
        const peso = dados.querySelector('#num1');
        const altura = dados.querySelector('#num2');
    }
    dados.addEventListener('submit', recebe);
}
