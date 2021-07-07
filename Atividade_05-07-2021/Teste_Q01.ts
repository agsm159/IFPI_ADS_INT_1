import {calcClassificar} from './Questão_1'

let calcPorcentAlta: calcClassificar = new calcClassificar(100, 50);
console.log(calcPorcentAlta.returnClassification());

let calcPorcentEstavel: calcClassificar = new calcClassificar(80, 100);
console.log(calcPorcentEstavel.returnClassification());

let calcPorcentQueda: calcClassificar = new calcClassificar(5, 100);
console.log(calcPorcentQueda.returnClassification());


