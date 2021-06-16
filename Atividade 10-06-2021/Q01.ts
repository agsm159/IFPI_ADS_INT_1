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
    
    adiciona(elemento: T){
        this._colecao.push(elemento);
    }

    proximo(){
        return this._colecao.pop();
    }

    atual(){
        return this._colecao;
    }

    isPrimeiro(){ 
        return this._colecao[0];
    }

    isUltimo(){
        
    }

    isParaPrimeiro(){

    }
}

let p = new ColecaoArray<number>();

p.adiciona(0);
p.adiciona(1);
console.log(p.atual());
console.log(p.proximo());
console.log(p.isPrimeiro());
