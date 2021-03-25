//------------------------------SNACK 1-----------------------------------
//crea un array di oggetti 'zucchina' e somma il loro peso.
function esZucchine(){

    var zucchine = [
        {
            'var': 'italiana',
            'peso': 10,
            'lun': 10
        },
        {
            'var': 'italiana',
            'peso': 15,
            'lun': 10
        },
        {
            'var': 'italiana',
            'peso': 5,
            'lun': 10
        },
        {
            'var': 'italiana',
            'peso': 20,
            'lun': 10
        },
    ];

    var sommaPeso = 0;
    for (var i =0; i<zucchine.length;i++){

        var zucchina = zucchine[i];
        sommaPeso += zucchina['peso'];
    }
    console.log('somma peso', sommaPeso);
}

// ---------------------------------SNACK 2----------------------------------------------
//Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine

function getPesoSum(ortaggi){

    var sommaPeso = 0;
    for (var i =0; i<ortaggi.length;i++){

        var zucchina = ortaggi[i];
        sommaPeso += zucchina['peso'];
    }
    console.log('somma peso', sommaPeso);
}


function splitObj(){

    var zucchineArr = [

        {
            'peso': 5,
            'lunghezza': 16,
        },
        {
            'peso': 10,
            'lunghezza': 8,
        },
        {
            'peso': 5,
            'lunghezza': 17,
        },
        {
            'peso': 10,
            'lunghezza': 7,
        },
        {
            'peso': 5,
            'lunghezza': 16,
        },
        {
            'peso': 5,
            'lunghezza': 18,
        },
        {
            'peso': 10,
            'lunghezza': 6,
        },
        {
            'peso': 10,
            'lunghezza': 9,
        }

    ]

    var small = [];
    var big = [];

    for (var i =0; i<zucchineArr.length; i++){

        var unaZucchina = zucchineArr[i];
        var lunghezza = unaZucchina['lunghezza'];
        if(lunghezza > 15){

            big.push(unaZucchina);
        } else if (lunghezza < 15) {

            small.push(unaZucchina);
        }
    }

    var pesoSmall = getPesoSum(small);
    var pesoBig = getPesoSum(big);

    console.log(small, big, );

}
// -------------------------------------------SNACK 3-----------------------------------
//una funzione che rutorna una stringa invertita
function stringReve(stringa){
    var characters =  [];
    for(i=0;i<stringa.length;i++){

        var char = stringa[i];
        characters= char + characters;
    }
    return characters;
}

// ---------------------------------SNACK 4-----------------------------------------------------

// Scrivi una funzione che fonda due array (aventi lo stesso
// numero di elementi) prendendo alternativamente gli
// elementi da uno e dall'altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

function arrMixer(){

    var arr1 = ['a','b','c'];
    var arr2 = [1,2,3];
    var length = arr1.length;
    var mixedArr = [];

    for (var i =0; i<length;i++){

        var lettera = arr1[i];
        var numero = arr2[i];
        mixedArr.push(lettera);
        mixedArr.push(numero);
    }
    console.log(mixedArr);
}


// -----------------------------------SNACK 5--------------------------------------

// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri ("a" più piccolo di "b" e "b" grande al
// massimo quanto il numero di elementi dell'array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra "a" e "b"


function splitter(min, max, array) {


    if(max > array.length){

        max = array.length;
    }

    var newArr = array.slice((min - 1), max);
    console.log(array, newArr);
}

function esArraySplitter() {
    var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    var indMin = 0;
    var indMax = 12;
    var splitted = splitter(indMin, indMax, arr);
    // [ 4, 5, 6, 7, 8 ]
}

function init(){
    // snack 1
    // esZucchine();

    // snak 2
    // getPesoSum();
    // splitObj();

    // snack 3
    // stringReve('andrea');
    // console.log(stringReve('andrea'));

    // snack 4
    // arrMixer();

    // snack 5
    esArraySplitter();
}


$(document).ready(init);
