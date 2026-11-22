import fs from "node:fs";
const texto = fs.readFileSync("./src/rules/rules.json", "utf-8");
const Parque = JSON.parse(texto);

export function regras(idade, alturaCentimetros, brinquedoEscolhido) {
    const filtroBrinquedo = Parque.filter((item) => item.nome == brinquedoEscolhido);

    if (brinquedoEscolhido !== filtroBrinquedo.toStringfy) {
        return "Brinquedo não encontrado"
    } if (idade < Parque[filtroBrinquedo].idadeNeces) {
        return "Idade mínima não atingida."
    } if (alturaCentimetros < Parque[filtroBrinquedo].alturaCentNeces){
        return "Altura mínima não atingida."
    } else {
        return "Aprovado"
    }
}
