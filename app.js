import fs from "node:fs";
import {
    calcularIdade,
    VerificarFaixaEtaria,
    paraCentimetro
} from "./src/scripts/calculadoras.js";

import { regras } from "./src/rules/rules.js";

const texto = fs.readFileSync("src/rules/rules.json", "utf-8");
const Parque = JSON.parse(texto);

// Digite os dados da seguinte maneira: npm run dev "nome" "dd/mm/aaaa" "dd/mm/aaaa" "altura em metros" "brinquedo" "nome acompanhante"

const nome = process.argv[2];
const dataNasc = process.argv[3];
const dataIngresso = process.argv[4];
const alturaMetros = process.argv[5];
const brinquedoEscolhido = process.argv[6];
const nomeAcompanhante = process.argv[7];

const idade = calcularIdade(dataNasc, dataIngresso);

const alturaCentimetros = paraCentimetro(alturaMetros);

const faixaEtaria = VerificarFaixaEtaria(idade)

const verificarRegras = regras(idade, alturaCentimetros, brinquedoEscolhido)

if( !nome || !dataNasc || !dataIngresso || !alturaMetros || !brinquedoEscolhido ) {
    console.log("Insira todos os dados.");
    process.exit(1);
} 
else if ((faixaEtaria === "Criança" || faixaEtaria === "Idoso") && !nomeAcompanhante) {
    console.log(`Crianças e idosos deverão estar acompanhados.`);
    process.exit(1);
} 
else if (verificarRegras !== "Aprovado") {
    console.log(verificarRegras);
    process.exit(1);
} 
else {
    console.log(`Nome: ${nome}`);
    console.log(`Data de nascimento: ${dataNasc}`);
    console.log(`Data do ingresso: ${dataIngresso}`);
    console.log(`Altura: ${alturaMetros}`);
    console.log(`Brinquedo escolhido: ${brinquedoEscolhido}`);
    console.log(`Nome do Acompanhante: ${nomeAcompanhante}`);
    console.log(`Ingresso aprovado.`);
    process.exit(1);
}


