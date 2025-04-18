const nome = prompt('Digita teu nome');

document.body.innerHTML += `seu nome é: ${nome}.<br /> `;
document.body.innerHTML += `seu nome tem ${nome.length} letras.<br /> `;
document.body.innerHTML += `a segunda letra do seu nome é: ${nome[1]}.<br /> `;
document.body.innerHTML += `qual primeiro Indice da letra E no seu nome? ${nome.indexOf('e')}<br /> `;
document.body.innerHTML += `qual ultimo Indice da letra E no seu nome? ${nome.lastIndexOf('e')}<br /> `;
document.body.innerHTML += `as 3 ultimas letras do seu nome e: ${nome.slice(-3)}<br /> `;
document.body.innerHTML += `as palavras do seu nome são: ${nome.split(' ')}<br /> `;
document.body.innerHTML += `o seu nome maiusculo: ${nome.toUpperCase()}<br /> `;
document.body.innerHTML += `o seu nome minusculo: ${nome.toLowerCase()}<br /> `;