
const speed = 70;
const lingueISO = {"Italiano": "it", "English": "en"};
var testi;
var lingua;
var volume;
var geocoder;
parseTesti();

$(document).ready(function () {
    console.log("ready");

    popolaDOM();

    //bottoni per proseguire con la storia
    $("#bott_avanti_1").click("sect_intro", avanti);
    $("#bott_avanti_2").click("esito_motociclista", avanti);
    $("#bott_avanti_3").click("esito_alcolizzata", avanti);
    $("#bott_avanti_4").click("esito_tunnel", avanti);
    $("#bott_avanti_5").click("esito_colpa", avanti);
    $("#bott_avanti_6").click("esito_diritti", avanti);

    //bottoni per la scelta del dilemma motociclista
    $("#bott_casco").click("sect_motociclista", funz_casco);
    $("#bott_nocasco").click("sect_motociclista", funz_nocasco);
    $("#bott_frena").click("sect_motociclista", funz_frena);
    $("#bott_ignora").click("sect_motociclista", funz_ignora);

    //bottoni per la scelta del dilemma colpa
    $("#bott_sviluppatore").click("sect_colpa", funz_sviluppatore);
    $("#bott_proprietario").click("sect_colpa", funz_proprietario);
    $("#bott_robot").click("sect_colpa", funz_robot);

    //bottoni per la scelta del dilemma alcolizzata
    $("#bott_padrona").click("sect_alcolizzata", funz_padrona);
    $("#bott_dottore").click("sect_alcolizzata", funz_dottore);
    $("#bott_ognitanto").click("sect_alcolizzata", funz_ognitanto);

    //bottoni per la scelta del dilemma diritti
    $("#bott_si").click("sect_diritti", funz_si);
    $("#bott_no").click("sect_diritti", funz_no);

    //bottoni per la scelta del dilemma tunnel
    $("#bott_bambino").click("sect_tunnel", funz_bambino);
    $("#bott_autista").click("sect_tunnel", funz_autista);

    var testoSelezionato = testi[lingua].p.sect_intro;
    digita(testoSelezionato, "#sect_intro p");
    if (volume === "on") {
        var msg = new SpeechSynthesisUtterance(testoSelezionato);
        msg.lang = lingueISO[lingua];
        window.speechSynthesis.speak(msg);
    } else {
        console.log("volume off");
    }
});

function avanti(sect) {
    const sezione = sect.data;
    $("#" + sezione + " button").attr("disabled", "true");
    $("#" + sezione + " + section").show(function () {
        var par = "#" + $(this).attr("id") + " p";
        if ($(par).length !== 0) {
            var testoSelezionato = testi[lingua].p[$(this).attr("id")];
            digita(testoSelezionato, "#" + $(this).attr("id") + " p");
            if (volume === "on") {
                var msg = new SpeechSynthesisUtterance(testoSelezionato);
                msg.lang = lingueISO[lingua];
                window.speechSynthesis.speak(msg);
            } else {
                console.log("volume off");
            }
        } else {
            console.error("paragrafo vuoto");
        }
    });
}

function funz_casco(sezione) {
    avanti(sezione);
    $("#scelta_motociclista").text(testi[lingua].h3.casco);

    $("#img_macchina").transition({x:-490, y:-100, rotate: '45deg', delay:2000}, 1000);
    $("#img_casco").transition({y:+70, delay:2000}, "slow");
    $("#img_nocasco").transition({y:-70, delay:2000}, "slow");

}

function funz_nocasco(sezione) {
    avanti(sezione);
    $("#scelta_motociclista").text(testi[lingua].h3.nocasco);

    $("#img_macchina").transition({x:-730, y:+100, rotate: '-30deg', delay:2000}, 1000);
    $("#img_casco").transition({y:+70, delay:2000}, "slow");
    $("#img_nocasco").transition({y:-70, delay:2000}, "slow");
}

function funz_frena(sezione) {
    avanti(sezione);
    $("#scelta_motociclista").text(testi[lingua].h3.frena);

    $("#img_macchina").transition({x:-700, delay:2000}, 1000);
    $("#img_casco").transition({y:+70, delay:2000}, "slow");
    $("#img_nocasco").transition({y:-70, delay:2000}, "slow");
}

function funz_ignora(sezione) {
    avanti(sezione);
    $("#scelta_motociclista").text(testi[lingua].h3.ignora);

    if (Math.random() > 0.5) {
        //prendi quello col casco
        $("#img_macchina").transition({x:-490, y:-100, rotate: '45deg', delay:2000}, 1000);
        $("#img_casco").transition({y:+70, delay:2000}, "slow");
        $("#img_nocasco").transition({y:-70, delay:2000}, "slow");
    } else {
        //prendi quello senza casco
        $("#img_macchina").transition({x:-730, y:+100, rotate: '-30deg', delay:2000}, 1000);
        $("#img_casco").transition({y:+70, delay:2000}, "slow");
        $("#img_nocasco").transition({y:-70, delay:2000}, "slow");
    }
}

function funz_padrona(sezione) {
    avanti(sezione);
    $("#scelta_alcolizzata").text(testi[lingua].h3.padrona);

    $("#img_vecchiavino").hide();
    $("#img_robotnovino").hide();

    $("#div-robot").transition({x:-600, delay:2000}, 2000, function () {
        $("#img_vecchianovino").hide();
        $("#img_vecchiavino").show();
        $("#img_robotvino").hide();
        $("#img_robotnovino").show().transition({transform: "scaleX(-1)"});
    }).transition({x:300}, 2000, function () {
        $("#img_vecchiavino").hide();
        $("#img_vecchianovino").show();
        $("#img_robotnovino").hide();
        $("#img_robotvino").show().transition({transform: "scaleX(+1)"});
    }).transition({x:-600}, 2000, function () {
        $("#img_vecchianovino").hide();
        $("#img_vecchiavino").show();
        $("#img_robotvino").hide();
        $("#img_robotnovino").show().transition({transform: "scaleX(-1)"});
    }).transition({x:+300}, 2000, function () {
        $("#img_vecchiavino").hide();
        $("#img_vecchianovino").show();
        $("#img_robotnovino").hide();
        $("#img_robotvino").show().transition({transform: "scaleX(+1)"});
    }).transition({x:-600}, 2000, function () {
        $("#img_vecchianovino").hide();
        $("#img_vecchiavino").show();
        $("#img_robotvino").hide();
        $("#img_robotnovino").show().transition({transform: "scaleX(-1)"});
    }).transition({x:+300}, 2000, function () {
        $("#img_vecchiavino").hide();
        $("#img_vecchianovino").show();
        $("#img_robotnovino").hide();
        $("#img_robotvino").show().transition({transform: "scaleX(+1)"});
    });
}

function funz_dottore(sezione) {
    avanti(sezione);
    $("#scelta_alcolizzata").text(testi[lingua].h3.dottore);

    $("#img_vecchiavino").hide();
    $("#img_robotvino").hide();

    $("#div-robot").transition({x:-600, delay:2000}, 2000, function () {
        $("#img_robotnovino").transition({transform: "scaleX(-1)"});
    }).transition({x:300}, 2000, function () {
        $("#img_robotnovino").transition({transform: "scaleX(+1)"});
    }).transition({x:-600}, 2000, function () {
        $("#img_robotnovino").transition({transform: "scaleX(-1)"});
    }).transition({x:+300}, 2000, function () {
        $("#img_robotnovino").transition({transform: "scaleX(+1)"});
    }).transition({x:-600}, 2000, function () {
        $("#img_robotnovino").transition({transform: "scaleX(-1)"});
    }).transition({x:+300}, 2000, function () {
        $("#img_robotnovino").transition({transform: "scaleX(+1)"});
    });
}

function funz_ognitanto(sezione) {
    avanti(sezione);
    $("#scelta_alcolizzata").text(testi[lingua].h3.ognitanto);

    $("#img_vecchiavino").hide();
    $("#img_robotvino").hide();

    $("#div-robot").transition({x:-600, delay:2000}, 2000, function () {
        $("#img_robotnovino").transition({transform: "scaleX(-1)"});
    }).transition({x:300}, 2000, function () {
        $("#img_robotnovino").hide();
        $("#img_robotvino").show().transition({transform: "scaleX(+1)"});

    }).transition({x:-600}, 2000, function () {
        $("#img_vecchianovino").hide();
        $("#img_vecchiavino").show();
        $("#img_robotvino").hide();
        $("#img_robotnovino").show().transition({transform: "scaleX(-1)"});
    }).transition({x:+300}, 2000, function () {
        $("#img_vecchiavino").hide();
        $("#img_vecchianovino").show();
        $("#img_robotnovino").transition({transform: "scaleX(+1)"});

    }).transition({x:-600}, 2000, function () {
        $("#img_robotnovino").transition({transform: "scaleX(-1)"});
    }).transition({x:300}, 2000, function () {
        $("#img_robotnovino").hide();
        $("#img_robotvino").show().transition({transform: "scaleX(+1)"});
    });
}

function funz_bambino(sezione) {
    avanti(sezione);
    $("#scelta_tunnel").text(testi[lingua].h3.bambino);
}

function funz_autista(sezione) {
    avanti(sezione);
    $("#scelta_tunnel").text(testi[lingua].h3.autista);
}

function funz_sviluppatore(sezione) {
    avanti(sezione);
    $("#scelta_colpa").text(testi[lingua].h3.sviluppatore);
}

function funz_proprietario(sezione) {
    avanti(sezione);
    $("#scelta_colpa").text(testi[lingua].h3.proprietario);
}

function funz_robot(sezione) {
    avanti(sezione);
    $("#scelta_colpa").text(testi[lingua].h3.robot);
}

function funz_si(sezione) {
    avanti(sezione);
    $("#scelta_diritti").text(testi[lingua].h3.si);
}

function funz_no(sezione) {
    avanti(sezione);
    $("#scelta_diritti").text(testi[lingua].h3.no);
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
    var searchParams = new URLSearchParams(window.location.search);
    lingua = searchParams.get('lingua');
    volume = searchParams.get('volume');
    console.log(lingua);

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
