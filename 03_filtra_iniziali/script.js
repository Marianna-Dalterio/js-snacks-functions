/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

//FUNZIONE

// function namesWithA(names, letter) {
//     const result = [];
//     for (let i = 0; i < names.length; i++) {
//         const thisName = names[i]
//         console.log(names[i])
//         if (thisName.startsWith("A")) {
//             result.push(thisName)
//         }
//     }
//     return result
// }

//ARROW FUNCTION
const namesWithA = (names, letter) => {
    const result = [];
    for (let i = 0; i < names.length; i++) {
        const thisName = names[i]
        console.log(names[i])
        if (thisName.startsWith("A")) {
            result.push(thisName)
        }
    }
    return result
}

// Invoca la funzione qui e stampa il risultato in console
const filteredNames = namesWithA(names, "A");
console.log(filteredNames)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]