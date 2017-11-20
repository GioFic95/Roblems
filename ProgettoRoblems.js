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

function avanti(sezione) {
    var currSection = document.getElementById(sezione);
    var bottoni = currSection.getElementsByTagName("button");
    console.log(bottoni);
    for (bottone of bottoni)
        bottone.disabled = true;
    var nextSection = document.getElementById(sezione).nextSibling.nextSibling;
    console.log(nextSection);
    nextSection.hidden = false;
}

function funz_casco(sezione) {
    avanti(sezione);
    document.getElementById("scelta_motociclista").innerHTML = "Sterza verso il motociclista con il casco";
}

function funz_nocasco(sezione) {
    avanti(sezione);
    document.getElementById("scelta_motociclista").innerHTML = "Sterza verso il motociclista senza il casco";
}

function funz_frena(sezione) {
    avanti(sezione);
    document.getElementById("scelta_motociclista").innerHTML = "Cerca di frenare e basta";
}

function funz_ignora(sezione) {
    avanti(sezione);
    document.getElementById("scelta_motociclista").innerHTML = "Ignorato la presenza o meno del casco";
}

function funz_padrona(sezione) {
    avanti(sezione);
    document.getElementById("scelta_alcolizzata").innerHTML = "Ubbidisce sempre alla padrona";
}

function funz_dottore(sezione) {
    avanti(sezione);
    document.getElementById("scelta_alcolizzata").innerHTML = "Dà sempre ascolto a Bob e al dottore che gli avevano spiegato i problemi e le necessità di Emma";
}

function funz_ognitanto(sezione) {
    avanti(sezione);
    document.getElementById("scelta_alcolizzata").innerHTML = "Dà retta a Bob e al dottore accontentando Emma di tanto in tanto";
}

/**
 * Mostra la seconda sezione ed esegue l'animazione relativa alla scelta dell'autista.
 */
function autista() {
    console.log("autista");
    document.getElementById("sect3").hidden = false;
    document.getElementById("sect3_span").innerHTML = "Autista";
    document.getElementById("sect2_autista").disabled = true;
    document.getElementById("sect2_bambino").disabled = true;
    setTimeout("abracadabra()", 1000);   //TEST: schedula un'azione dopo un secondo.
    return true;
}

/**
 * Mostra la seconda sezione ed esegue l'animazione relativa alla scelta del bambino.
 */
function bambino() {
    console.log("bambino");
    document.getElementById("sect3").hidden = false;
    document.getElementById("sect3_span").innerHTML = "Bambino";
    document.getElementById("sect2_autista").disabled = true;
    document.getElementById("sect2_bambino").disabled = true;
    return true;
}


/**
 * TEST: prova un evento schedulato da un'altra funzione.
 */
function abracadabra() {
    document.getElementById("sect2_span").innerHTML = "Autistabracadabra";
}