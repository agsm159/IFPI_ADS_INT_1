import {Personagem, Soldado, Cavaleiro} from './Q02_personagem'

class jogo{

    incluir(){

    }
    consultar(){

    }
    atacar(){

    }
    avaliarBatalha(){

    }
}

let personagem = new Personagem(1, 'artorias', 100)
let soldado1 = new Soldado(2, 'Siff', 100, 15)
let soldado2 = new Soldado(3, 'Ornstein', 100, 18)
let caveleiro = new Cavaleiro(4, 'Doko', 100, 30)

soldado1.atacar(soldado2)
console.log(soldado2.energia)
caveleiro.atacar(soldado1)
console.log(soldado1.energia)


