/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(word) {
    const count = word.match(/[aeiou]/gi)
    if (count === null) {
        console.log("Nessuna vocale è stata trovata")
        return 0
    } else {
        console.log("Vocali trovate:", count)-- > //stampa le vocali oltre al numero 
        return count.length
    }

}


// Invoca la funzione qui e stampa il risultato in console
const result = countVowels(word);
console.log(result)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)