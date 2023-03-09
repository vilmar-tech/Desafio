let num = 21;
let fibonacci = [0, 1];

for (let i = 2; i <= num; i++) {
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

if (fibonacci.includes(num)) {
  console.log(num + " pertence à sequência de Fibonacci!");
} else {
  console.log(num + " não pertence à sequência de Fibonacci.");
}
