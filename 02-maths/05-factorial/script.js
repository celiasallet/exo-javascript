/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function suiteFactor(n) {
    if (n == 0) {
        return 1;
    } else if (n < 0) { 
        return; 
    } else {
        let resultat = 1; 
        for (let i = 2; i <= n; i ++) {
            resultat *= i;
        }
        return resultat;
    }
}

function afficherSuite(debut, nombreSuite){
    let suite = [];
 for (let i = debut; i < debut + nombreSuite; i++) {
    suite.push(suiteFactor(i));
    }
    return suite.join(", ");
}

function afficherSuiteFactor() {
    let input = document.getElementById("number").value;
     let nombres = parseInt(input);
    let result = afficherSuite(nombres, 10);
    alert(result);
}

document.getElementById("run").addEventListener("click", afficherSuiteFactor);

