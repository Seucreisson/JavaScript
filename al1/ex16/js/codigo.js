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

    const imc = peso.value / (altura.value * altura.value)

    if (imc < 18.5) {
        resultado.innerHTML = `<p>Seu IMC é: ${imc.toFixed(2)}, Então esta Abaixo do peso.</p>`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML = `<p>Seu IMC é: ${imc.toFixed(2)}, Então esta com o Peso normal.</p>`
    } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = `<p>Seu IMC é: ${imc.toFixed(2)}, Então esta com Sobre-peso.</p>`
    } else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = `<p>Seu IMC é: ${imc.toFixed(2)}, Então esta com Obesidade grau 1.</p>`
    } else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = `<p>Seu IMC é: ${imc.toFixed(2)}, Então esta com Obesidade grau 2.</p>`
    } else if (imc >= 40) {
        resultado.innerHTML = `<p>Seu IMC é: ${imc.toFixed(2)}, Então esta com Obesidade grau 3.</p>`
    } else {
        resultado.innerHTML = `<p>ERROR</p>`
    }

    console.log(imc)
    }

dadosBrutos.addEventListener('submit', recebe)
}
seleçao()
