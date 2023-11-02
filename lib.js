<<<<<<< HEAD
function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}
function prime(num) {
    if (num < 2) {
        return false; // Numbers less than 2 are not prime
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false; // It's divisible by a number other than 1 and itself
        }
    }
    return true; // It's prime

}
function fact(num) {
    if (num > 15) {
        return "15보다 큰 수는 입력할 수 없습니다.";
    }
    if (num < 0) {
        return "음수는 입력할 수 없습니다."; // You can also return an error message here
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
=======
function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}
function prime(num) {
    return false;
}
function fact(num) {
    return -1;
}
module.exports = {
    avg,
    prime,
    fact
}
>>>>>>> e454d3d84d808d6f6e3976ca31b5eadbc2469bb8
