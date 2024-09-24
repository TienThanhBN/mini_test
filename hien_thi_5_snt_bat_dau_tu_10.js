function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
let count = 0;
let num = 10;

while (count < 5) {
    if (isPrime(num)) {
        document.write(num + "<br>");
        count++;
    }
    num++;
}
