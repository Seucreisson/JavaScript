const paragrafo = document.querySelector('.paragrafo');
const paraS = document.querySelectorAll('p');

const style = getComputedStyle(document.body);
const backColor = style.backgroundColor;
console.log(backColor)

for (let pa of paraS) {
    pa.style.backgroundColor = 'yellow';
    pa.style.color = 'black'
}
