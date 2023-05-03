import entradaDados from "readline-sync";

console.log(`Conversor de Celsius para Kelvin!\n`);

let celsius = entradaDados.question(`Digite a temperatura em Celsius: `);

let kelvin = Number(celsius) + 273.15;

console.log(`${celsius}ºC equivalem a ${kelvin}K`);