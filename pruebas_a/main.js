// 1.- Invertir cadena
const word = "Luciano";
const newWord = word.split("").reverse().join("");

console.log(newWord);

// 1a.- Invertir cadena sin metodos/funciones
const word2 = "Luciano";
let newWord2 = "";

for (let c of word){
    newWord2 = c + newWord2;
}
console.log(newWord2);

// 2.- Contar elementos repetidos
const numbers = [1, 1, 5, 2, 6, 100, 100, 2, 5, 5, 5, 100];

const result = [...new Set(numbers)].map(num => {
    return {
        element: num,
        count: numbers.filter(n => n === num).length
    }
});

console.log(result)

// 2a.- Contar elementos repetidos sin metodos/funciones
const resultHC = [];

for (const num of numbers) {

    let newElement = true;

    for(const res of resultHC){

        if(res.element == num){
            res.count++;
            newElement = false;
        }
    }

    if(newElement){
        resultHC[resultHC.length] = {
            element: num,
            count: 1
        }
    }
}

console.log(resultHC)

// 3.- Crear array de elementos separados por espacio
const words = "pato perro  aguila   oso  gato";

const array = words.replace(/\s+/g," ").split(" ");
console.log(array);

// 3.- Crear array de elementos separados por espacio sin metodos/funciones
const array2 = [];
let w = "";

for(const c of words){
    if(c !== " "){
        w += c;
    }
    else if(w.length > 0){
        array2[array2.length] = w;
        w = "";
    }
}

if(w.length > 0){
    array2[array2.length] = w;
}

console.log(array2);