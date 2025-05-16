function recursivo(num) {
    if (num >= 50) {
        return
    }
    num++
    console.log(num);
    recursivo(num);
}
recursivo(0);
