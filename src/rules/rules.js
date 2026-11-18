import fs from "node:fs";
const texto = fs.readFileSync("../rules/rules.json", "utf-8");
const Parque = JSON.parse(texto);

export function regras(idade, alturaCentimetros, brinquedoEscolhido) {
    const filtroBrinquedo = Restricoes.Brinquedos.filter((item) => item.nome == brinquedoEscolhido)
    
    if (brinquedoEscolhido !== filtroBrinquedo) {
        console.log("Brinquedo não encontrado")
    } if (idade < Parque[filtroBrinquedo].idadeNeces) {
        console.log("Idade mínima não atingida.")
    } if (alturaCentimetros < Parque[filtroBrinquedo].alturaCentNeces){
        console.log("Altura mínima não atingida.")
    } else {
        return "Aprovado"
    }
}
