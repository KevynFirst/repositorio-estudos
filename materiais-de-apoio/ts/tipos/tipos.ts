//string
let nome: string = 'João'
console.log(nome)

console.log("----------")

//numbers
let idade: number = 27
idade = 27.5
console.log(idade)

console.log("----------")

//boolean
let possuiHobbies: boolean = false
console.log(possuiHobbies)

console.log("----------")

//tipos explicitos
let minhaidade
minhaidade = 27
console.log(typeof minhaidade)
minhaidade = "minha idade é 27"
console.log(typeof minhaidade)

console.log("----------")

//array
let hobbies: string[] = ["Cozinhar","Esportes"]
console.log(hobbies)
console.log(hobbies[0])
console.log(typeof hobbies)

console.log("------------------------------")

//tupla
let endereco: [string, number] = ["Av Principal", 99]
console.log(endereco)
console.log(endereco[0] +" - tipo "+ typeof endereco[0])
console.log(endereco[1] +" - tipo "+ typeof endereco[1])

console.log("------------------------------")

//enums
enum Cor {
    cinza,  //0
    verde,  //1
    azul,   //2
    laranja = 100,
    amarelo,
    vermelho = 100,
    preto
}
let minhaCor: Cor = Cor.verde
console.log("minha cor tem valor = " + minhaCor)
console.log(Cor)

console.log("------------------------------")

//any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW', ano: 2019}
console.log(carro)

console.log("------------------------------")

//funções
function retornaMeuNome(): string {
    return nome
}
console.log(retornaMeuNome())

function digaOi(): void{
    console.log('Oi do vazio!')
}
digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}
console.log(multiplicar(2,4))

console.log("------------------------------")

//tipo função
let calculo: (numeroA: number, numeroB: number) => number

calculo = multiplicar

console.log(calculo(5,6))

console.log("------------------------------")

//Objetos
let usuario:  {nome: string, idade: number} = {
    nome: 'João',
    idade: 27
}
console.log(usuario)

usuario = {
    idade: 31,
    nome: 'Maria'
}
console.log(usuario)

console.log("------------------------------")

//union types
let nota: number | string
nota = '10'
console.log(`Minha nota é ${nota}`)
nota = 10
console.log(`Minha nota é ${nota}`)

console.log("------------------------------")

//tipo void
type contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: contato = {
    nome: 'Kevyn',
    tel1: '8888-9999',
    tel2: null
}
console.log(contato1)

console.log("------------------------------")

//tipo never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabao',
    preco: -1,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0){
            falha('Preco inválido')
        }
    }
}
produto.validarProduto()

console.log("------------------------------")


