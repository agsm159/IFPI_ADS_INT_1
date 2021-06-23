import {Personagem, Soldado, Cavaleiro} from './Q02_personagem'

class jogo{

    guerreiros: Array<Personagem> = [];

    numGuerreios(): number {
        return this.guerreiros.length
    }

    constructor(){
        this.guerreiros = []
    }
    
    cont = 0
    
    incluir(idp: Personagem): void{

        for(let i = 0; i < this.guerreiros.length; i++){
            if(idp.id != this.guerreiros[i].id){
                this.cont += 1;
            }
        }
        if(this.cont == this.guerreiros.length){
            this.guerreiros.push(idp);
            console.log('Persoangem criado com sucesso!')
        }
        else{
            console.log('ID já existente!')
        }
    }
    consultar(idp: number): any{
        for( let i = 0; i < this.guerreiros.length ; i++) {
            if (idp == this.guerreiros[i].id) {
                return this.guerreiros[i];
            }
        }
        return null;
    }
    
    atacar(idAtq: number,idDef: number ){
        if (idAtq != idDef){
            console.log('Um guerreiro não pode se atacar!')
        }
        
        let guerreiro1 = this.consultar(idAtq);
        let guerreiro2 = this.consultar(idDef);

        if (guerreiro1 && guerreiro2) {
            
            if (guerreiro1 instanceof Cavaleiro || guerreiro1 instanceof Soldado) {
                guerreiro1.atacar(guerreiro2);
            }
        }
    }
    
    avaliarBatalha(): void{

        for( let i = 0; i < this.guerreiros.length ; i++) {
            console.log('Id: ', this.guerreiros[i].id);
            console.log('Nome: ', this.guerreiros[i].nome);
            console.log('Energia: ', this.guerreiros[i].energia);
            console.log('Esta vivo? \n', this.guerreiros[i].estaVivo())
        }
    }
}
