function facto(nombre) {
  let factorielle = 1;
  for (let i = 1; i <= nombre; i++) {
    factorielle *= i;
  }
  return factorielle;
}

function perform() {
  var nombre = window.prompt(
    "De quel nombre souhaitez vous calculer la factorielle ?"
  );
  console.log(facto(nombre));
}
perform()