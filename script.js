let saldo = 1000;

function punta(importo){

    if(importo > saldo){
        alert("❌ Non hai abbastanza KickCoin!");
        return;
    }

    saldo = saldo - importo;

    document.getElementById("saldo").innerHTML = saldo + " 🪙";

    alert("✅ Hai puntato " + importo + " KickCoin!");
}
function confermaSchedina() {
    alert("✅ Schedina confermata!");

    window.location.href = "kickcoin.html";
}
let quota = 0;

function scegli(esito, q) {
    document.getElementById("scelta").innerHTML = esito;
    document.getElementById("quota").innerHTML = q;
    quota = q;
}

function calcola() {
    let puntata = Number(document.getElementById("puntata").value);

    let vincita = puntata * quota;

    document.getElementById("vincita").innerHTML =
        "Possibile vincita: " + vincita.toFixed(2) + " KickCoin 🪙";
}
