function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}`;
        },
        altura: altura,
        peso: peso,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa("perseu", "gusmao", 1, 22);
console.log(p1.fala("cagando"));
console.log(p1.imc);
