/**
 * TEST: verifica che questo documento sia trovato ed eseguito.
 */
console.log("EUREKA!");

/**
 * TEST: verifica che questo documento sia trovato ed eseguito.
 */
function load() {
    console.log("ciao");
}

/**
 * Mostra la seconda sezione ed esegue l'animazione relativa alla scelta dell'autista.
 */
function autista() {
    console.log("autista");
    document.getElementById("sect2").hidden = false;
    document.getElementById("sect2_span").innerHTML = "Autista";
    document.getElementById("sect1_autista").disabled = true;
    document.getElementById("sect1_bambino").disabled = true;
    setTimeout("abracadabra()", 1000);   //TEST: schedula un'azione dopo un secondo.
    return true;
}

/**
 * Mostra la seconda sezione ed esegue l'animazione relativa alla scelta del bambino.
 */
function bambino() {
    console.log("bambino");
    document.getElementById("sect2").hidden = false;
    document.getElementById("sect2_span").innerHTML = "Bambino";
    document.getElementById("sect1_autista").disabled = true;
    document.getElementById("sect1_bambino").disabled = true;
    return true;
}


/**
 * TEST: prova un evento schedulato da un'altra funzione.
 */
function abracadabra() {
    document.getElementById("sect2_span").innerHTML = "Autistabracadabra";
}