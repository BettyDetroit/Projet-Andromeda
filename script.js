const burger = document.querySelector('.burger');
console.log(burger)
const modal = document.querySelector('.modal');
console.log('modal trouvé')

burger.addEventListener('click', () => {
    burger.classList.toggle('active');  
    modal.classList.toggle('active');
})

let nomViewer = document.querySelector('.insertName');
console.log(nomViewer);

//////////////////////////////////////////////////////////////////
// Au lancement du site, fonction qui vérifie si l'utilisateur à un pseudo 
// S'il y a déjà un pseudo dans le sessionStorage, rien ne ce passe 
// Sinon affichage du prompt et stockage du résultat dans le sessionStorage 

// function myPrompt() {
//     console.log(sessionStorage.getItem("userName"))
//     if(sessionStorage.getItem("userName") !== false) {
//         console.log(sessionStorage, 'storage')
//         sessionStorage.clear()
//         return
//     }
//     else {
//          let userName = prompt("Salutations Pionnier(e), quel est ton prénom?");
//          sessionStorage.setItem("userName", userName)

//         console.log('else')
//     }};
/////////////////////////////////////////////////////////////////


// myPrompt()
// console.log(sessionStorage, 'global')



// function askName(userName) {
// sessionStorage.setItem("userName", userName);
// }


// ///////////////////////////////////////////////////////////////
  // let userName = prompt("Salutations Pionnier(e), quel est ton prénom?");
    // if(userName != undefined) {
    // nomViewer.innerText = `${userName}`;
    // return userName;
    // }else{
    //     console.log("else");
    // nomViewer.innerText = `${""}`;
    // }

// let userName = prompt("Name?")
// sessionStorage.setItem("userName", userName);
// console.log(sessionStorage, "coucou");


// function askName() {
//     let username = sessionStorage.getItem('username');

//     if (username === null) {
//         username = prompt("Salut Pionnier(e");
//     }

//     if (username != null) {
//         document.getElementById("userpara").innerHTML = "Hello, " + username;
//         sessionStorage.setItem('username', username);
//     } else {
//         document.getElementById("noUser").innerHTML = "Welcome, Stranger!";
//     }
// }
// ////////////////////////////////////////////////////////////






