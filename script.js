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

// let userName = prompt("Salut Pionnier(e), quel est ton prénom?");
// if(userName != undefined) {
// nomViewer.innerText = `${userName}`;
// }else{
    // console.log("else");
// nomViewer.innerText = `${""}`;
// }



