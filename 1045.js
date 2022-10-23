// se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
// se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
// se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
// se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
// se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
// se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES

// 7.0 5.0 7.0        TRIANGULO ACUTANGULO
//                    TRIANGULO ISOSCELES

// 6.0 6.0 10.0       TRIANGULO OBTUSANGULO
//                    TRIANGULO ISOSCELES

// 6.0 6.0 6.0        TRIANGULO ACUTANGULO
//                    TRIANGULO EQUILATERO

// 5.0 7.0 2.0        NAO FORMA TRIANGULO

// 6.0 8.0 10.0       TRIANGULO RETANGULO

var input = require("fs").readFileSync("stdin", "utf8");

function resolve(values) {
  var [A, B, C] = values
    .split(" ")
    .map((c) => Number(c))
    .sort((a, b) => b - a);

  if (A >= B + C) {
    // se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
    console.log("NAO FORMA TRIANGULO");
    return;
  }

  if (Math.pow(A, 2) === Math.pow(B, 2) + Math.pow(C, 2)) {
    // se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
    console.log("TRIANGULO RETANGULO");
  }

  if (Math.pow(A, 2) > Math.pow(B, 2) + Math.pow(C, 2)) {
    // se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
    console.log("TRIANGULO OBTUSANGULO");
  }

  if (Math.pow(A, 2) < Math.pow(B, 2) + Math.pow(C, 2)) {
    // se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
    console.log("TRIANGULO ACUTANGULO");
  }

  if (A === B && A === C && B === C) {
    // se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
    console.log("TRIANGULO EQUILATERO");
  }

  if (
    (A === B && C !== A && C !== B) ||
    (A === C && B !== A && B !== C) ||
    (B === C && A !== B && A !== C)
  ) {
    // se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
    console.log("TRIANGULO ISOSCELES");
  }
}

resolve(input);
