
const speed = 70;
var testi;
var lingua = "italiano";
parseTesti();

$(document).ready(function () {
    console.log("ready");

    //bottoni per proseguire con la storia
    $("#bott_avanti_1").click("sect_intro", avanti);
    $("#bott_avanti_2").click("esito_motociclista", avanti);
    $("#bott_avanti_3").click("esito_alcolizzata", avanti);
    $("#bott_avanti_4").click("esito_tunnel", avanti);

    //bottoni per la scelta del dilemma motociclista
    $("#bott_casco").click("sect_motociclista", funz_casco);
    $("#bott_nocasco").click("sect_motociclista", funz_nocasco);
    $("#bott_frena").click("sect_motociclista", funz_frena);
    $("#bott_ignora").click("sect_motociclista", funz_ignora);

    //bottoni per la scelta del dilemma alcolizzata
    $("#bott_padrona").click("sect_alcolizzata", funz_padrona);
    $("#bott_dottore").click("sect_alcolizzata", funz_dottore);
    $("#bott_ognitanto").click("sect_alcolizzata", funz_ognitanto);

    //bottoni per la scelta del dilemma tunnel
    $("#bott_bambino").click("sect_tunnel", funz_bambino);
    $("#bott_autista").click("sect_tunnel", funz_autista);

    //const testo = "Sempre caro mi fu quest'ermo colle.";
    //digita(testo, "#prova");

    digita(testi[lingua].sect_intro, "#sect_intro p");
});

function avanti(sect) {
    /*
    var nextSection = document.getElementById(sezione).nextSibling.nextSibling;
    console.log(nextSection);
    nextSection.hidden = false;

    var currSection = document.getElementById(sezione);
    var bottoni = currSection.getElementsByTagName("button");
    console.log(bottoni);
    for (bottone of bottoni)
        bottone.disabled = true;
    */

    const sezione = sect.data;
    $("#" + sezione + " button").attr("disabled", "true");
    $("#" + sezione + " + section").show();
}

function funz_casco(sezione) {
    avanti(sezione);
    document.getElementById("scelta_motociclista").innerHTML = "Sterza verso il motociclista con il casco";

    $("#img_macchina").animate({left:'-=700px', top:'100'}, "slow");
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
    document.getElementById("scelta_motociclista").innerHTML = "Ignora la presenza o meno del casco";
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

function funz_bambino(sezione) {
    avanti(sezione);
    document.getElementById("scelta_tunnel").innerHTML = "Prosegue dritto e uccide il bambino";
}

function funz_autista(sezione) {
    avanti(sezione);
    document.getElementById("scelta_tunnel").innerHTML = "Sterza e uccide Bob";
}

function digita(testo, elemento) {

    function scrivi(testo, elemento, output, i) {
        var next = testo.charAt(i);
        if (next === '<') {
            next = "<br>";
            i+=4;
        } else
            i++;
        output += next;
        $(elemento).html(output);
        if(i < testo.length) {
            setTimeout(scrivi, speed, testo, elemento, output, i);
        }
    }

    var output = "";
    var i = 0;
    //console.log("scrivi '" + testo + "' in " + elemento);
    scrivi(testo, elemento, output, i);

}

function parseTesti() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            testi = JSON.parse(this.responseText);
            //console.log(testi);
        }
    };
    //il terzo parametro è false perché ci serve di avere l'oggetto testi prima di proseguire con le altre operazioni.
    xmlhttp.open("GET", "./resources/testi.json", false);
    xmlhttp.send();
}