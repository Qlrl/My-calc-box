function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}
function prime(num) {
    if (num < 2) {
        return false; // Num is less than 2 are not prime
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false; // It's divisible by a number other than 1 and itself
        }
    }
    return true; // It's prime
}

function fact(num) {
    if (num < 0) {
        return "num is 0 이상이에요~"; // You can also return an error message here
    }
    if (num > 15) {
        return "num is 15이하의 자연수에요~";
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}


module.exports = {
    avg,
    prime,
    fact
}

