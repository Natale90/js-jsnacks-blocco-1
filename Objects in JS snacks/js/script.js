
function esercizio1(){

    //creo un oggetto letterale e ne stampo il contenuto
    var obj = {

        'name': 'Natale',
        'lastName':'Capristo',
        'age':31,
    }

    for (var key in obj){

        console.log(key, obj[key]);
    }
}

function esercizio2(){

    // - Creare un array di oggetti di studenti. Ciclare su tutti gli
    // studenti e stampare per ognuno nome e cognome
    var classe = [

        {
            'name': 'Jhonn', 'lastName': 'Lennon', 'age': 79,
        },

        {
            'name': 'Mick', 'lastName': 'Jagger', 'age': 77,
        },

        {
            'name': 'Elton', 'lastName': 'Jhonn', 'age': 73,
        },

        {
            'name': 'Paul', 'lastName': 'Mccartney', 'age': 78,
        },

        {
            'name': 'Keith', 'lastName': 'Richards', 'age': 77,
        },
    ];

    for (var i = 0; i<classe.length;i++){

        // console.log(classe[i], [i]);
        var studente = classe[i];
        for (var key in studente){

            console.log(studente['name'], studente ['lastName']);
        }
    }
    // - Dare la possibilità all'utente attraverso 3 prompt di
    // aggiungere un nuovo oggetto studente inserendo
    // nell'ordine: nome, cognome e età.
    var newStudent = {

        'name': prompt("Please type your name"),
        'LastName': prompt("Please type your Lastname"),
        'age': parseInt
        (prompt("Please type your age")),
    }
    console.log(newStudent);
    classe.push(newStudent);
    console.log(classe);
}


function init(){
    esercizio1();
    // esercizio2();
}

$(document).ready(init);
