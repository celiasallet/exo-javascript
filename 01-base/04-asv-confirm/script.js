/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



function demanderInformations() {
    let confirme = false;

    while (!confirme) {
        // Pose les trois questions à l'utilisateur
        let age = prompt("Quel âge avez-vous ?");
        let sexe = prompt("Quel est votre sexe ?");
        let ville = prompt("Dans quelle ville habitez-vous ?");

        // Crée un message de confirmation avec les informations fournies
        let message = `Veuillez confirmer les informations suivantes :\nÂge : ${age}\nSexe : ${sexe}\nVille : ${ville}\n\nCes informations sont-elles correctes ?`;

        // Demande à l'utilisateur de confirmer les informations
        confirme = confirm(message);
    }

    // Affiche un message de remerciement après confirmation
    alert("Merci pour la confirmation de vos informations !");
}

// Appel de la fonction pour lancer le processus
demanderInformations();
