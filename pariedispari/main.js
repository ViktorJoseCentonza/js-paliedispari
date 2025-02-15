/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/



//extremely overcomplicated just for fun

/*
function odd_or_even_choice() { //let user choose odd or even (with check)
    let user_choice;
    for (let i = 0; i < 1; i++) {
        user_choice = prompt("Scegli tra 'pari' o 'dispari' (scrivili esattamente così ma senza virgolette!)")
        console.log(user_choice);
        if (user_choice != "pari" && user_choice != "dispari") {
            alert("choice input error, try again")
            i--;
        }
    }
    return user_choice;
}

function user_number_choice() { //let user choose number (with check)
    let user_number;
    for (let i = 0; i < 1; i++) {
        user_number = Number(prompt("Inserisci un numero da 1 a 5 (compresi)"))
        console.log(user_number);
        if (isNaN(user_number) || user_number < 1 || user_number > 5) {
            alert("number input error, try again");
            i--;
        }
    }
    return user_number;
}

function pc_number_random() { //random number generator
    const pc_number = Math.floor(Math.random() * 5) + 1
    console.log(pc_number);
    return pc_number;
}

function odd_or_even() {
    user_choice = odd_or_even_choice()
    user_number = user_number_choice()
    const pc_number = pc_number_random()

    if ((pc_number + user_number) % 2 == 0 && user_choice == "pari") {
        return "you won!"
    } else if ((pc_number + user_number) % 2 == 1 && user_choice == "dispari") {
        return "you won!"
    } else { //with the checks in input it should be impossible for unexpected else, so used for lost condition
        return "you lost!"
    }

}

alert(odd_or_even())
*/
