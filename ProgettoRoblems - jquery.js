
const speed = 70;
var lingua = "Italiano";
var testi;
var geocoder;
var latlng;
parseTesti();

/*   Asicrono, non funziona.
$.get("./resources/testi.json", function (response) {
    testi = response;
});
 */

$(document).ready(function () {
    console.log("ready");

    /*
    if (impostaLingua())
        popolaDOM();
    else {
        window.alert("la geolocalizzazione non funziona");
    }
    */
    setTimeout(impostaLingua, 1000);

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

    digita(testi[lingua].p.sect_intro, "#sect_intro p");
});

function avanti(sect) {
    const sezione = sect.data;
    $("#" + sezione + " button").attr("disabled", "true");
    $("#" + sezione + " + section").show(function () {
        var par = "#" + $(this).attr("id") + " p";
        if ($(par).length !== 0) {
            digita(testi[lingua].p[$(this).attr("id")], "#" + $(this).attr("id") + " p");
        } else {
        }
    });
}

function funz_casco(sezione) {
    avanti(sezione);
    $("#scelta_motociclista").text(testi[lingua].h3.casco);

    $("#img_macchina").animate({left:'-=700px', top:'100'}, "slow");
}

function funz_nocasco(sezione) {
    avanti(sezione);
    $("#scelta_motociclista").text(testi[lingua].h3.nocasco);
}

function funz_frena(sezione) {
    avanti(sezione);
    $("#scelta_motociclista").text(testi[lingua].h3.frena);
}

function funz_ignora(sezione) {
    avanti(sezione);
    $("#scelta_motociclista").text(testi[lingua].h3.ignora);
}

function funz_padrona(sezione) {
    avanti(sezione);
    $("#scelta_alcolizzata").text(testi[lingua].h3.padrona);
}

function funz_dottore(sezione) {
    avanti(sezione);
    $("#scelta_alcolizzata").text(testi[lingua].h3.dottore);
}

function funz_ognitanto(sezione) {
    avanti(sezione);
    $("#scelta_alcolizzata").text(testi[lingua].h3.ognitanto);
}

function funz_bambino(sezione) {
    avanti(sezione);
    $("#scelta_tunnel").text(testi[lingua].h3.bambino);
}

function funz_autista(sezione) {
    avanti(sezione);
    $("#scelta_tunnel").text(testi[lingua].h3.autista);
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
    scrivi(testo, elemento, output, i);

}

function parseTesti() {
    /*
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
    */

    $.ajax({
        url: "./resources/testi.json",
        async: false,
        dataType: "json"
    }).done(function(d) {
        testi = d;
        console.log("caricamento dej JSON riuscito :)");
    }).fail(function() {
        console.log("caricamento dej JSON fallito :(");
    });
}

function popolaDOM() {
    $("button").text(function () {
        return testi[lingua].button[$(this).attr("id")];
    });
    for (sezione in testi[lingua].h2) {
        $("#" + sezione + " h2").text(function () {
            return testi[lingua].h2[sezione];
        });
    }
    console.log("popolaDom");
}

function init() {
    geocoder = new google.maps.Geocoder;
    //latlng = {lat: 41.9000, lng: 12.4833};
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            latlng = {lat: position.coords.latitude, lng: position.coords.longitude};
        });
    } else {
        window.alert("Geolocation is not supported by this browser.");
    }
    console.log("init");
    console.log("posizione: " + latlng)
}

function impostaLingua() {
    geocoder.geocode({'location': latlng}, function(results, status) {
        if (status === 'OK') {
            if (results[0]) {
                //console.log(results[0].formatted_address);
                var types = ["country", "political"];
                for (var i=0; i<results[0].address_components.length; i++) {
                    var tipi = results[0].address_components[i].types;
                    //console.log(tipi);
                    var is_same = tipi.length === types.length && tipi.every(function(element, index) {
                        return element === types[index];
                    });
                    if (is_same) {
                        var stato = results[0].address_components[i].long_name;
                        break;
                    }
                }
                //console.log(results[0]);
                console.log("Stato: " + stato);
                //$("#geolocal").text("Stato: " + stato);
                console.log(lingua);
                if (stato !== "Italia")
                    lingua = "Inglese";

                popolaDOM();
                return true;
            } else {
                window.alert('No results found');
                return false;
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
            return false;
        }
    });
}
