import rl from "readline-sync";

let cursos_idiomas = [
    { nome: "Ingles", preco: 2500, carga_horaria: 160 },
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Frances", preco: 3600, carga_horaria: 200 },
    { nome: "Chines", preco: 5500, carga_horaria: 400 },
    { nome: "Alemao", preco: 3800, carga_horaria: 230 }
];

console.log(`0: Sair`);
console.log(`1: Inglês`);
console.log(`2: Espanhol`);
console.log(`3: Frances`);
console.log(`4: Chines`);
console.log(`5: Alemao`);
console.log(`6: Todos os Cursos`);

let id = parseInt(rl.question("\nSelecione um curso: "));

while (id != 0) {
	switch (id) {
		case 1:
			console.log(`\nInglês escolhido`);
			var curso = "Ingles";
			break;
		case 2:
			console.log(`\nEspanhol escolhido`);
			var curso = "Espanhol";
			break;
		case 3:
			console.log(`\nFrancês escolhido`);
			var curso = "Frances";
			break;
		case 4:
			console.log(`\nChinês escolhido`);
			var curso = "Chines";
			break;
		case 5:
			console.log(`\nAlemao escolhido`);
			var curso = "Alemao";
			break;
		case 6:
			console.log(`\nTodos os cursos`);
			var curso = "todos";
			break;
		default:
			console.log(`\nOpção Incorreta`);
			break;
	}

	for (let curso_obj of cursos_idiomas) {	
		if (curso == curso_obj.nome) {
			console.log("\nCurso: " + curso_obj.nome);
			console.log("Preço: " + curso_obj.preco);
			console.log("Carga Horária: " + curso_obj.carga_horaria + "\n");
		}
		else if (curso == "todos") {
			console.log("\nCurso: " + curso_obj.nome);
			console.log("Preço: " + curso_obj.preco);
			console.log("Carga Horária: " + curso_obj.carga_horaria + "\n");
		}
	}

	id = parseInt(rl.question("\nSelecione outro curso: "));
}
