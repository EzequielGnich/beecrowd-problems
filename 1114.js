const input = require("fs").readFileSync("stdin", "utf8");
const values = input.split("\n");

for (let i = 0; i < values.length; i++) {
  if (String(values[i]) === "2002") {
    console.log("Acesso Permitido");
  } else {
    console.log("Senha Invalida");
  }
}
