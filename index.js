let random = Math.floor(Math.random() * 201);
let userEntrada;
let tenta = 1;
const chances = 3;
let sair;
console.log("adivinhe o número de 0 a 100");
process.stdin.on("data", function (data) {
  sair = data.toString().trim();
  userEntrada = Number(data.toString().trim());
  if (sair === "cancelar") {
    process.exit();
  } else if (isNaN(userEntrada)) {
    console.log("voce perdeu uma tentativa");
    console.log("digite um numero valido");
    tenta++;
  } else if (userEntrada === random) {
    console.log(
      "acertou! gerando um novo numero, digite 'cancelar' para sair ou tente adivinhar o próximo numero"
    );
    process.exit();
  } else if (tenta === 3) {
    tenta = 1;

    console.log(
      "voce esgotou suas tres tentativas, digite 'cancelar' para sair ou tente adivinhar o proximo numero. o numero aleatorio era " +
        random
    );
    random = Math.floor(Math.random() * 101);
  } else {
    if (userEntrada > random - 10 && userEntrada < random + 10) {
      console.log("quase");
      console.log("voce perdeu uma tentativa");
    } else {
      console.log("longe");
      console.log("voce perdeu uma tentativa");
    }
    tenta++;
  }
});