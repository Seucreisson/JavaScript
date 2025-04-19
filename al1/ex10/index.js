const numero = Number(prompt('Bota um numero.'));
const numeroTitulo = document.getElementById('numTitulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>seu numero + 2 é ${numero + 2}</p>`;
texto.innerHTML += `<p>raiz quadrada desse numero é: ${numero ** 0.5} </p>`;
texto.innerHTML += `<p>${numero} e um numero inteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>${numero} e um NaN? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>arredondado para baixo fica: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>arredondaod para cima fica: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>com duas casas decimais: ${numero.toFixed(2)}</p>`;