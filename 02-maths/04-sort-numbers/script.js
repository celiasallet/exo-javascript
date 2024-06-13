/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


function trierListe(concombre) {
    for (let i = 0; i<concombre.length; i++) {
        for (let j=0; j<(concombre.length-1); j++) {
            if (concombre[j]>concombre[j+1]) {
                let temp = concombre[j];
                concombre[j]= concombre[j+1];
                concombre[j+1]= temp;
            }
        }
        
    }
    
    return concombre; 
}

function sortNumbers() {
    let input = document.getElementById("numbers").value;
     let concombre = input.split(", ").map(Number);
    let result = trierListe(concombre);
    alert(result);
}

document.getElementById("run").addEventListener("click", sortNumbers);


