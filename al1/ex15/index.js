const nota = 1;

if (nota >= 0 && nota <= 5) {
    console.log('Reprovado');
} else if (nota >= 6 && nota <= 9) {
    console.log('Aprovado');
} else if (nota === 10) {
    console.log(`Parabens pontuação maxima!`);
} else {
    console.log('Sua nota e invalida');
}