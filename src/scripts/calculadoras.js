export function calcularIdade(dataNasc, dataIngresso) {
    dataNasc.split("/")
    dataIngresso.split("/")

    return  dataIngresso[2] - dataNasc[2]
} 

export function VerificarFaixaEtaria(idade) {
    if (idade < 18) {
        return "Criança"
    } 
    
    else if (idade <= 25) {
        return "Jovem Adulto"
    } 
    
    else if (idade < 65) {
        return "Adulto"        
    } 
    
    else {
        return "Idoso"
    } 
}

export function paraCentimetro(alturaMetros) {
    return Math.round(altura / 100)
}