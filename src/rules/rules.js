import fs from "node:fs";

const texto = fs.readFileSync("./src/rules/rules.json", "utf-8");
const Parque = JSON.parse(texto);

export function regras(dadosPessoa, brinquedoEscolhido) {
    const pessoa = JSON.parse(dadosPessoa);

    const filtroBrinquedo = Parque.filter((item) => 
        item.nomeBrinquedo.toLowerCase() == brinquedoEscolhido.trim().toLowerCase
    );

    if(filtroBrinquedo.length === 0) {
        return "Brinquedo não encontrado"
    }

    const brinquedo = filtroBrinquedo[0];

    if (pessoa.idade < brinquedo.idadeNeces) {
        return "Idade mínima não atingida."
    } 
    
    if (pessoa.altura < brinquedo.alturaCentNeces){
        return "Altura mínima não atingida."
    } 
    
    return "Aprovado";

}
