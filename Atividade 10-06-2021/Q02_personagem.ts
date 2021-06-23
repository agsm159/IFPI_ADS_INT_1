export class Personagem{

    id: number;
    nome: string;
    energia: number;
    
    constructor(id: number, nome: string, energia: number ){
        this.id = id
        this.nome = nome
        this.energia = energia
    }
    estaVivo(){
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
