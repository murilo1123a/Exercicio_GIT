const Calculator = require("./Calculator");

let calculator = new Calculator()
test("Deve retornar 4 quando somar 3 + 3", () => {
expect(calculator.add(3, 3)).toBe(6);
})

test("Deve retornar 10 quando somar 5 + 5", () => {
  expect(calculator.add(5, 5)).toBe(10);
});


test("Deve retornar 2 quando subtrair 4 - 2", () => {
  expect(calculator.sub(4,2)).toBe(2);
});

test("Deve retornar 4 quando multiplicar 2 * 2", () => {
  expect(calculator.mult(2,2)).toBe(4);
});


test("Deve retornar 10 quando dividir 20 / 2", () => {
  expect(calculator.div(20,2)).toBe(10);
});