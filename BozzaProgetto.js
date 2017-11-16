console.log("EUREKA!");

function load() {
    console.log("ciao");
}

function autista() {
    console.log("autista");
    document.getElementById("sect2").hidden = false;
    document.getElementById("sect2_span").innerHTML = "Autista";
    document.getElementById("sect1_autista").disabled = true;
    document.getElementById("sect1_bambino").disabled = true;
    return true;
}

function bambino() {
    console.log("bambino");
    document.getElementById("sect2").hidden = false;
    document.getElementById("sect2_span").innerHTML = "Bambino";
    document.getElementById("sect1_autista").disabled = true;
    document.getElementById("sect1_bambino").disabled = true;
    return true;
}