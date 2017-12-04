var latlng;
var lingua = "Italiano";

function init() {
    geocoder = new google.maps.Geocoder;
    //latlng = {lat: 41.9000, lng: 12.4833};
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            latlng = {lat: position.coords.latitude, lng: position.coords.longitude};
            impostaLingua();
        });
    } else {
        window.alert("Geolocation is not supported by this browser.");
    }
    console.log("init");
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

                //popolaDOM(); va spostato!!!
                $("#qui").html("lat " + latlng.lat + ", lng " + latlng.lng + "<br>" + results[0].formatted_address);
                $('select option[value='+ lingua +']').attr("selected",true);
                $("#form").show();

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

$(document).ready(function () {
    $("#credits").click(function () {

        $("#myModal").css("display", "block");
    });
    $("#close").click(function () {

        $("#myModal").css("display", "none");
    });

    // When the user clicks anywhere outside of the modal, close it
    var modal = document.getElementById('myModal');
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

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