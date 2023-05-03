import entradaDados from "readline-sync";

console.log(`Calculo da área de um triângulo!\n`);

let dimensao = entradaDados.question(`Digite a dimensão dos comprimentos: `);
let base_triangulo = entradaDados.question(`Digite a base do triângulo: `);
let altura_triangulo = entradaDados.question(`Digite a altura do triângulo: `);

let area_triangulo = (altura_triangulo * base_triangulo) / 2;

console.log(`\nA área do triângulo é ${area_triangulo}${dimensao}².`);