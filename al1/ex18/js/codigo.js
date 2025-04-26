function zero(num) {

    if (num >= 10) {
        return num;
    } else {
        return `0${num}`;
    }
}
const date = new Date();
const text = document.querySelector('#saida')

const day = zero(date.getDate());
const month = date.getMonth() + 1;
const year = zero(date.getFullYear());
const hours = zero(date.getHours());
const mins = zero(date.getMinutes());
const segs = zero(date.getSeconds());
const dateDay = date.getDay() + 1;

let nameMonth;
let nameDateDay;

console.log(month, dateDay)

function nMonth(month) {

    if (month === 1) {
        return nameMonth = 'janeiro';
    } else if (month === 2) {
        return nameMonth = 'fevereiro';
    } else if (month === 3) {
        return nameMonth = 'março';
    } else if (month === 4) {
       return nameMonth = 'abril';
    } else if (month === 5) {
        return nameMonth = 'maio';
    } else if (month === 6) {
        return nameMonth = 'junho';
    } else if (month === 7) {
        return nameMonth = 'julho';
    } else if (month === 8) {
        return nameMonth = 'agosto';
    } else if (month === 9) {
        return nameMonth = 'setembro';
    } else if (month === 10) {
        return nameMonth = 'outubro';
    } else if (month === 11) {
        return nameMonth = 'novembro';
    } else if (month === 12) {
        return nameMonth = 'dezembro';
    } else {
        return nameMonth = 'None';
    }
}
nameMonth = nMonth(month);

function nDateDay(dateDay) {

    if (dateDay === 1){
        return nameDateDay = 'domingo';
    } else if (dateDay === 2) {
        return nameDateDay = 'segunda';
    } else if (dateDay === 3) {
        return nameDateDay = 'terça';
    } else if (dateDay === 4) {
        return nameDateDay = 'quarta';
    } else if (dateDay === 5) {
        return nameDateDay = 'quinta';
    } else if (dateDay === 6) {
        return nameDateDay = 'sexta';
    } else if (dateDay === 7) {
        return nameDateDay = 'sabado';
    } else {
        return nameDateDay = 'None';
    }
}
nameDateDay = nDateDay(dateDay);
console.log(nameDateDay, day, nameMonth, year, hours, mins, segs)

text.innerHTML = `<p>${nameDateDay}, ${day} de ${nameMonth} de ${year} ${hours}:${mins}</p>`;

