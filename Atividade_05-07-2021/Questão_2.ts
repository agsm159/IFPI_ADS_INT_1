export class calcMensal{
    
    constructor(private nome: string, private tvendas: number){
        this.nome = nome;
        this.tvendas = tvendas;
    }

    calcComissao(): any{
        let funVenda: number = this.tvendas;    
        let comFun: number;

            if(funVenda <= 5000){

                comFun = 0

                return comFun ;
            }
            else if(funVenda > 5000 && funVenda <= 10000){
                comFun = (funVenda - 5000) * (5/100);

                return comFun ;
            }
            else if(funVenda > 10000 && funVenda <= 30000){
                comFun = comFun + (funVenda - 10000) * (10/100); 
                
                return comFun ;
            } 
            else{
                comFun = funVenda * (20/100);

                return comFun ;
            }
    }

    calcSalario(): any{
        let salario: number
        let comissao: number = this.calcComissao()

        salario = 1100 + comissao;

        return salario;
    }

    salarioFinal(): any{
        let resultFinal:string

        resultFinal = this.nome + 'terá um salário de R$' + this.calcSalario

        return resultFinal
    }
}