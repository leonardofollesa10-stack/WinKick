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
