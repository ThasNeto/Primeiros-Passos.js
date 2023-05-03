import rl from "readline-sync"

let divida = rl.question(`Digite o valor integral da sua dívida: `);

if (divida > 0) {
	let dias_atraso = rl.question(`Digite a quantos dias a fatura está atrasada: `);

	if (dias_atraso > 0) {
		let juros = (dias_atraso > 15) ? 1.1 : 1.05;

		let divida_final = (divida * juros).toFixed(2);
	
		console.log(`\nO valor inicial da dívida é de R$${divida}`);
		console.log(`A fatura está atrasada por ${dias_atraso} dias`);
		console.log(`O valor a pagar com o juros de ${((juros * 100) - 100).toFixed(0)}% é de R$${divida_final}`);
	}
	else {
		console.log(`\nSua Dívida está em dia!`);
	}
}
else {
	console.log(`\nVocê não possui uma dívida!`)
}