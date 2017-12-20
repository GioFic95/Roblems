var latlng;
var lingua = "Italiano";
var geocoder;
var online = false;
const errors = {1: "PERMISSION_DENIED", 2: "POSITION_UNAVAILABLE", 3:"TIMEOUT"};

function init() {
    geocoder = new google.maps.Geocoder;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            latlng = {lat: position.coords.latitude, lng: position.coords.longitude};
            impostaLingua();
            online = true;
        }, failedPosition);
    } else {
        window.alert("Geolocation is not supported by this browser.");
    }
    console.log("init");
}

function failedPosition(error) {
    $.get("http://ipinfo.io", function (response) {
        $("#qui").html(response.loc + ", " + response.city + ", " + response.country);
        if (response.country !== "IT") {
            lingua = "English";
            $('div[lang="eng"]').show();
            $('div[lang="ita"]').hide();
        }
        $("#form").show();
    }, "jsonp").fail(function () {
        $("#qui").html("<i>Posizione non accessibile a causa di " + error.constructor.name + "." + errors[error.code] + "</i>");
        $("#form").show();
    });
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
                console.log("lingua: " + lingua);
                if (stato !== "Italia") {
                    lingua = "English";
                    $('div[lang="eng"]').show();
                    $('div[lang="ita"]').hide();
                }

                $("#qui").html("lat " + latlng.lat + ", lng " + latlng.lng + "<br>" + results[0].formatted_address);
                $('select option[value='+ lingua +']').attr("selected",true);
                $("#form").show();
                return true;
            } else {
                window.alert('No results found');
                $("#qui").html("<i>Posizione non accessibile</i>");
                $("#form").show();
                return false;
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
            $("#qui").html("<i>Posizione non accessibile</i>");
            $("#form").show();
            return false;
        }
    });
}

$(document).ready(function () {
    if (!online) {
        $("#qui").html("<i>Posizione non accessibile: sei offline</i>");
        $("#form").show();
        console.log("offline");
    }

    $("#sound").click(function () {
        var valore = $("#form input[type=hidden]").val();
        if (valore === "on") {
            $("#sound img").attr("src", "resources/immagini/no sound 2.png");
            $("#form input[type=hidden]").val("off");
        } else if (valore === "off") {
            $("#sound img").attr("src", "resources/immagini/sound.png");
            $("#form input[type=hidden]").val("on");
        }
    });

    $("#credits").click(function () {
        $("#finestra-credits").show().children().show();
    });

    $("#about").click(function () {
        $("#finestra-about").show().children().show();
    });

    $(".close").click(nascondiModal);

    // When the user clicks anywhere outside of the modal, close it
    var modal1 = document.getElementById("finestra-credits");
    var modal2 = document.getElementById("finestra-about");
    window.onclick = function(event) {
        if (event.target === modal1 || event.target === modal2) {
            nascondiModal();
        }
    };

    function nascondiModal() {
        $(".modal-content").animate({
            left:"100vw",
            opacity:0
        }, "slow", function () {
            $(".modal-content").hide().css({
                left:0,
                opacity:1
            });
        });
        $(".modal").animate({
            opacity:0
        }, "slow", function () {
            $(".modal").hide().css({
                opacity:1
            });
        });
    }

    $("select[name='lingua']").change(function (e) {
        if (e.target.value === "Italiano") {
            $('div[lang="eng"]').hide();
            $('div[lang="ita"]').show();
            console.log("passa ad italiano");
        } else {
            $('div[lang="eng"]').show();
            $('div[lang="ita"]').hide();
            console.log("passa ad inglese");
        }
    });

});