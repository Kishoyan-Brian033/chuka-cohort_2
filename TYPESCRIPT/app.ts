// Simple Calculator (TypeScript)
const num1: number = parseFloat(prompt("Enter first number:") || "0");
const num2: number = parseFloat(prompt("Enter second number:") || "0");

const calculate = (a: number, b: number): void => {
  console.log(`
    ${a} + ${b} = ${a + b}
    ${a} - ${b} = ${a - b}
    ${a} * ${b} = ${a * b}
    ${a} / ${b} = ${a / b}
  `);
};

calculate(num1, num2);