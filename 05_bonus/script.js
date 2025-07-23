/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function greeting(name) {
    const hour = new Date().getHours();
    let greetingText;
    if (hour <= 13) {
        greetingText = (`Buongiorno ${name}`)
    } else if (hour <= 17) {
        greetingText = (`Buon pomeriggio ${name}`)

    } else {
        greetingText = (`Buonasera ${name}`)
    }
    return greetingText
}


// Invoca la funzione qui e stampa il risultato in console
const result = greeting("Mario")
console.log(result)


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.