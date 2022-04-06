document.getElementById("play").addEventListener("click", function(){
   let livello = play();
   const griglia = document.getElementById("main");
   main.innerHTML = "";
    let testo = 1;
    for (let numrow=1; numrow<=livello; numrow++){
    const contenuto = document.createElement("div");
    contenuto.setAttribute("class", "row");
    griglia.append(contenuto);
    for (let numero = 1; numero<=livello; numero++) {
        const colonna = document.createElement("div");
        colonna.setAttribute("id", "colonnina");
        colonna.setAttribute("class", "col-1");
        colonna.addEventListener("click",cece)
        contenuto.append(colonna);
        colonna.append(testo);
        testo++;
        
    }
}
})

function play(){
console.log("play");
let valore = document.getElementById("livelli").value;
return valore;
}

function cece(){
this.style.backgroundColor ="rgb(60, 101, 177)";
console.log("click!")
}

   

const bnumber = 16;
let bombs = [];
function bomb(){
    while(bombs.length <= bnumber){

    }
}
