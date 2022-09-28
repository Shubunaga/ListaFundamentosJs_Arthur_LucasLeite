vassoura = 7
latinhaDeCoca = 4
Televisao = 780
sofa = 1000

function desconto(produto) {
    produto = produto - (produto * 0.15)
    if(produto < 500){
    preco = 'Barato'
    } else{
        preco = 'Caro'
    }
    return console.log('Preço com desconto: ' + produto + ' Estado pós desconto: ' + preco)
}

function PrecosAtuais(prod) {
    return console.log(prod)
}
console.log('Preços atuais dos produtos:')
PrecosAtuais(vassoura)
PrecosAtuais(latinhaDeCoca)
PrecosAtuais(Televisao)
PrecosAtuais(sofa)

console.log('Preços com desconto:')

desconto(vassoura)
desconto(Televisao)
desconto(sofa)
desconto(latinhaDeCoca)