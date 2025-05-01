 function criaHoraZerada(milisegundos) {

    const data = new Date(milisegundos * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: "UTC"
    });
 }

 
 const timer = document.querySelector(".timer");
 const iniciar = document.querySelector(".iniciar");
 const parar = document.querySelector(".parar");
 const reiniciar = document.querySelector(".reiniciar");
 let milisegundos = 0;
 let tempo;

 function inicia() {
    tempo = setInterval(function() {
        milisegundos++;
        timer.innerHTML = criaHoraZerada(milisegundos);

    }, 1000);

 }

iniciar.addEventListener("click", function(event) {
    clearInterval(tempo);
    inicia();
});
parar.addEventListener("click", function(event) {
    clearInterval(tempo);
});
reiniciar.addEventListener("click", function(event) {
    clearInterval(tempo);
    timer.innerHTML = "00:00:00";
    milisegundos = 0;
});