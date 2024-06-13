/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition 
        var num1 = document.getElementById("op-one").value;
        var num2 = document.getElementById("op-two").value;
        var total = parseInt(num1)+parseInt(num2);

        alert(total);
        
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        var num1 = document.getElementById("op-one").value;
        var num2 = document.getElementById("op-two").value;
        var total = parseInt(num1)-parseInt(num2);

        alert(total);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        var num1 = document.getElementById("op-one").value;
        var num2 = document.getElementById("op-two").value;
        var total = parseInt(num1)*parseInt(num2);

        alert(total);
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        var num1 = document.getElementById("op-one").value;
        var num2 = document.getElementById("op-two").value;
        var total = parseInt(num1)+parseInt(num2);

        alert(total);
    });
})();

console.log();
