
const elements = [
    {tag: 'p', text: 'Hello! 1'},
    {tag: 'div', text: 'Im testing 2'},
    {tag: 'footer', text: `I don't know if i really can 3`},
    {tag: 'section', text: `butt i have hope that i can do it! 4`}
]

const titulo = document.querySelector('#titulo')
const div = document.createElement('div')

for (let i = 0; i < elements.length; i++) {
    let { tag, text } = elements[i];
    let tagC = document.createElement(tag);
    tagC.innerHTML = text;
    div.appendChild(tagC);

}

titulo.appendChild(div);




