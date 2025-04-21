function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const p1 = criaPessoa('juzé', 'armando', 99)
const p2 = criaPessoa('carlin', 'dugrau', 40)

console.log(p1.nome)