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

window.addEventListener('load', function myPrompt() {
    console.log(sessionStorage.length)
    if(sessionStorage.length >= 2) {
        console.log(sessionStorage, 'storage')
        return
    }
    else {
         let userName = prompt("Salutations Pionnier(e), quel est ton nom?");
         sessionStorage.setItem("userName", userName)

        console.log('else')
        window.location.reload()
    }});

let nomStocked = sessionStorage.getItem("userName");
console.log(nomStocked, "nom stocké");

function ajoutNom(){
    if(nomStocked != "null") {
    nomViewer.innerText = `${nomStocked}`;
    nomViewer.style.color ="white";
    nomViewer.style.fontSize = "1.2em";
    return nomStocked;
    }else{
        console.log("else stored");
        nomViewer.innerText = `${""}`;
    }};

  ajoutNom()



