import fs from "node:fs";
const texto = fs.readFileSync("../rules/rules.json", "utf-8");
const Parque = JSON.parse(texto);

export function regras(idade, alturaCentimetros, brinquedoEscolhido) {
    const filtroBrinquedo = Restricoes.Brinquedos.filter((item) => item.nome == brinquedoEscolhido) // ex: casa assombrada
    const filtroRegras = Parque.filter((item) => item.regras)
    

    
}
