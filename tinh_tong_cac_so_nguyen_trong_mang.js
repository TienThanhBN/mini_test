function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
let arr = [3, 4, 5, 6, 7, 8, 11, 15, 17];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
        sum += arr[i];
    }
}
document.write("Tổng các số nguyên tố trong mảng là: " + sum);
