const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const time = date.getHours();
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
console.log(nMonth(month))