import fs from "node:fs";
import {
    calcularIdade,
    VerificarFaixaEtaria,
    paraCentimetro
} from "src/rules/calculadoras.js";

const texto = fs.readFileSync("src/rules/rules.json", "utf-8");
const Parque = JSON.parse(texto);

console.log ( "Digite os dados da seguinte maneira: npm run dev 'nome' 'dd/mm/aaaa' 'dd/mm/aaaa' 'altura em metros' 'brinquedo' 'nome acompanhante'");

const nome = process.argv[3];
const dataNasc = process.arg[4];
const dataIngresso = process.arg[5];
const alturaMetros = process.arg[6];
const brinquedoEscolhido = process.arg[7];
const nomeAcompanhante = process.arg[8];

const idade = calcularIdade(dataNasc, dataIngresso);

const alturaCentimetros = paraCentimetro(alturaMetros);

if( !nome || !dataNasc || !dataIngresso || !alturaMetros || !brinquedoEscolhido ) {
    console.log("Insira todos os dados.")
} 
else if (VerificarFaixaEtaria(idade) === "criança" || "idoso" && nomeAcompanhante === null) {
    console.log(`Crianças e idosos deverão estar acompanhados.`)
} 
else if (regras(idade, alturaCentimetros, brinquedoEscolhido) !== "Aprovado") {
    console.log(regras(idade, alturaCentimetros, brinquedoEscolhido))
} 
else {
    console.log(`Nome: ${nome}`)
    console.log(`Data de nascimento: ${dataNasc}`)
    console.log(`Data do ingresso: ${dataIngresso}`)
    console.log(`Altura: ${alturaMetros}`)
    console.log(`Brinquedo escolhido: ${brinquedoEscolhido}`)
    console.log(`Nome do Acompanhante: ${nomeAcompanhante}`)
    console.log(`Ingresso aprovado.`)
}


