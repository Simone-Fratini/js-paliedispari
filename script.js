

function parolaPalindroma() {
    let parola = prompt("Inserisci una parola");
    let parolaInversa = "";
    for (let i = parola.length - 1; i >= 0; i--) {
        parolaInversa += parola[i];
    }
    if (parola == parolaInversa) {
        alert("La parola è palindroma");
    } else {
        alert("La parola non è palindroma");
    }
}

function numeroPariDispari() {
    let numero = parseInt(prompt("Inserisci un numero"));
    if (numero % 2 == 0) {
        alert("Il numero è pari");
    } else {
        alert("Il numero è dispari");
    }
}


let programma = prompt("Inserisci 1 se vuoi vedere se la funzione è palindroma, 2 se vuoi vedere se il numero è pari o dispari")

if (programma == 1) {
    parolaPalindroma();
} else{
    numeroPariDispari();
}
