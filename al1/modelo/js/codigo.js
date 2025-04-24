function seleçao() {
    const dadosBrutos = document.querySelector('.dados')
    const resultado = document.querySelector('.fim')

    const dados = []

    dadosBrutos.onsubmit = function (event) {
        event.preventDefault()
        console.log(event)
    }
    function recebe(event) {
        const peso = dadosBrutos.querySelector('#num1')
        const altura = dadosBrutos.querySelector('#num2')

        dados.push({
            peso: peso.value,
            altura: altura.value
        });
        console.log(dados);

        resultado.innerHTML += `aaa ${peso.value}`;

    }

dadosBrutos.addEventListener('submit', recebe)
}
seleçao()
