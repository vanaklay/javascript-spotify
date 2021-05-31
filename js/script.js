console.log("connecté");

// faire un query select all pour recup tous les boutons de la liste resultat
/*

const buttons = document.querySelectorAll("button");
console.log(buttons);
console.log(buttons[1]);

const btn1 = document.getElementById("btn-add-1");
const btn2 = document.getElementById("btn-add-2");
*/
// ceci est une playlist qui va accueillir la chanson dans le li
const playUl = document.getElementById("play-ul");

// si on clique dessus ajouter la musique à la playlist
/*
btn1.addEventListener("click", ()=>{

    // on récupère une chanson
    const li = document.getElementById("li-res-1");
    // recree un nouveau li a l'interieur recreer un nouveau contenu en recuperant les informions du precedant li 
    // et ajouter ce nouveau li dans play-ul
    const newContent = document.createTextNode(li.innerHTML);
    
    const newLi = document.createElement("li")
    newLi.append(newContent);
    
    
    btn1.innerHTML="Supprimer";
    btn1.setAttribute("id","button-play-1");
    
    // ajouter un enfant ; append ajoute le li dans le playUl
    playUl.append(li);
  
});
*/

function handleAddBtn(param){
    const li = document.getElementById(`li-res-${param}`);
    const btn = document.getElementById(`btn-add-${param}`);
    const newContent = document.createTextNode(li.innerHTML);
    
    const newLi = document.createElement("li")
    newLi.append(newContent);
    
    btn.innerHTML="Supprimer";
    btn.setAttribute("id",`button-play-${param}`);
    btn.setAttribute("onclick",`handleRmBtn(${param})`);
    playUl.append(li);

}

function handleRmBtn(param){
    
}

/*
btn2.addEventListener("click", ()=>{

    const li = document.getElementById("li-res-2");
    playUl.append(li);
    btn2.innerHTML="Supprimer";
});
*/
// ajouter une musique a la playlist play-ul
