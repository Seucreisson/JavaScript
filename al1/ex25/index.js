function receiveNum(num) {

    if (typeof num !== 'number') return num;
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    if (num % 3 === 0 && num % 5 === 0) return 'fizzBuzz';

return num
}

for (let i = 0; i <= 100; i++) {
    console.log(i, receiveNum(i))
}