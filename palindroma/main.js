/*
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/



function is_palindrome() {
    const user_word = prompt("Inserisci una parola, verificheremo se è palindroma.")
    for (let i = 0; i < user_word.length / 2; i++) {
        console.log(`first letter:${user_word.charAt(i)}|| last letter:${user_word.charAt(user_word.length - i - 1)}`);

        if (user_word.charAt(i) != user_word.charAt(user_word.length - i - 1)) {
            alert("the word is not palindrome!")
            return
        }

    }
    alert("hurray! it's a palindrome!")
}

is_palindrome();