interface Iteravel<T>{

    colecao: T[];

    proximo(): T;
    atual(): T;
    isPrimeiro(): boolean;
    isUltimo(): boolean;
    isParaPrimeiro(): T;

}

class ColecaoArray<T>{
    
    private _colecao: T[] = [];
    cont: number = 0;

    adiciona(elemento: T){

        this._colecao.push(elemento);
    }

    proximo(){

        return this._colecao[this.cont++];
    }

    atual(){

        console.log('Atual: ')

        return this._colecao[this.cont];
    }

    isPrimeiro(){ 

        console.log('É o primeiro valor? ')

        if(this._colecao[this.cont] == this._colecao[0]){
            return true;
        }
        else{
            return false;
        }
    }

    isUltimo(){

        console.log('É o último valor? ')
        if(this._colecao[this.cont] == this._colecao[this._colecao.length -1] ){
            return true;
        }
        else{
            return false;
        }
    }

    isParaPrimeiro(){

        this.cont = 0
        console.log('\nO iterador retornou ao primeiro valor\n');
        return (this._colecao[this.cont])
    }
}

let p = new ColecaoArray<number>();

p.adiciona(1);
p.adiciona(2);
p.adiciona(3);

console.log(p.atual());
console.log(p.isPrimeiro());
p.proximo()
console.log(p.atual());
console.log(p.isPrimeiro());
p.proximo()
console.log(p.atual());
console.log(p.isUltimo());
p.isParaPrimeiro()
console.log(p.atual());
p.proximo()
console.log(p.atual());
p.proximo()
console.log(p.atual());
console.log(p.isUltimo());
