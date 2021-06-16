export class Personagem{

    id: number;
    nome: string;
    energia: number;
    
    constructor(id: number, nome: string, energia: number ){
        this.id = id
        this.nome = nome
        this.energia = energia
    }
    estarVivo(){
        if(this.energia > 0){
            return true
        }
        else{
            return false
        }
    }

    defenderAtaque(valor: number){
        this.energia = this.energia - valor

        if(this.energia < 0){
            this.energia = 0 
        }
    }

}

export class Soldado extends Personagem{

    forcaAtaque: number;

    constructor(id: number, nome: string, energia: number, forcaAtaque: number ){
        super(id, nome, energia)
        this.forcaAtaque = forcaAtaque
    }

    atacar(p: Personagem){
        p.defenderAtaque(this.forcaAtaque)
    }

    defenderAtaque(valor: number){
        this.energia = this.energia - (valor / 2)

        if(this.energia < 0){
            this.energia = 0 
        }
    }
}

export class Cavaleiro extends Soldado{

    constructor(id: number, nome: string, energia: number, forcaAtaque: number ){
        super(id, nome, energia, forcaAtaque)
    }

    atacar(p: Personagem){
        p.defenderAtaque(this.forcaAtaque * 2)
    }

    defenderAtaque(valor: number){
        this.energia = this.energia - (valor / 3)

        if(this.energia < 0){
            this.energia = 0 
        }
    }
}

let personagem = new Personagem(1, 'artorias', 100)
let soldado1 = new Soldado(2, 'Siff', 100, 15)
let soldado2 = new Soldado(3, 'Ornstein', 100, 18)
let caveleiro = new Cavaleiro(4, 'Doko', 100, 30)

soldado1.atacar(soldado2)
console.log(soldado2.energia)