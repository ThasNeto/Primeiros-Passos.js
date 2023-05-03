import entradaDados from "readline-sync";

console.log(`Conversor de Milhas para Kilometros!\n`);

let milhas = entradaDados.question(`Informe a distância em milhas: `);
let kilometros = Number((milhas / 0.62137).toFixed(2));

console.log(`\n${milhas} mi equivalem a ${kilometros} km.`);