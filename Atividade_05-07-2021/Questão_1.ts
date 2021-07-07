export class calcClassificar {
    
    constructor(private mediaAtual: number, private mediaAntes: number){
        this.mediaAtual = mediaAtual;
        this.mediaAntes = mediaAntes;
    }

    calcVariacao(mediaAtual: number, mediaAntes: number): any{
        let atual: number = mediaAtual
        let antes: number = mediaAntes
        let porcent: number

        porcent = ((antes - atual) / antes) * 100

        return porcent
    }

    returnClassification(): string{
        let porcentagem: number = this.calcVariacao(this.mediaAtual, this.mediaAntes)
    
        if(porcentagem < 15){
            return 'Em estabilidade.';
        }
        else if(porcentagem < 5){
            return 'Em queda.'
        }
        else if(porcentagem >= 15){
            return 'Em alta.'
        }
    }
}
