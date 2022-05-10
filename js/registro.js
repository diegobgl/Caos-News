function registro_r() {
    document.getElementById("registror").disabled = true;
}
// VALIDACION NOMBRE
function v_r2nombre() {
    var largo_nombre = document.getElementById("rusuario").value.length;
    if (largo_nombre < 3 || largo_nombre > 15) {
        document.getElementById("texto_rnombre").innerHTML = "No cumple los requisitos";
        document.getElementById("texto_rnombre").style.color = "red";
        document.getElementById("flag_rnombre").value = "0";
    } else {
        document.getElementById("texto_rnombre").innerHTML = "Cumple los requisitos";
        document.getElementById("texto_rnombre").style.color = "green";
        document.getElementById("flag_rnombre").value = "1";
    }
    var v1 = document.getElementById("flag_rnombre").value;
    var v2 = document.getElementById("flag_pass").value;
    var v3 = document.getElementById("flag_reppass").value;
    var v5 = document.getElementById("flag_rcorreo").value;
    if (v1 == "1" && v2 == "1" && v3 == "1" && v5 == "1") {
        document.getElementById("registror").disabled = false;
    } else {
        document.getElementById("registror").disabled = true;
    }
}

//correo
function v_rcorreo() {
    c = document.getElementById("rcorreo").value
    cr = /^([\da-z_.-]+)@([\da-z.-]+)[.]([a-z.]{2,6})$/
    if (!cr.exec(c)) {
        document.getElementById("texto_correo").innerHTML = "Correo Invalido!"
        document.getElementById("texto_correo").style.color = "red"
        document.getElementById("flag_rcorreo").value = "0";


    } else {
        document.getElementById("texto_correo").innerHTML = "Correo Valido"
        document.getElementById("texto_correo").style.color = "green"
        document.getElementById("flag_rcorreo").value = "1";


    }
    var v1 = document.getElementById("flag_rnombre").value;
    var v2 = document.getElementById("flag_pass").value;
    var v3 = document.getElementById("flag_reppass").value;
    var v5 = document.getElementById("flag_rcorreo").value;
    if (v1 == "1" && v2 == "1" && v3 == "1" && v5 == "1") {
        document.getElementById("registror").disabled = false;
    } else {
        document.getElementById("registror").disabled = true;
    }

}
//password
function v_pass() {
    var largo_pass = document.getElementById("pass").value.length;

    if (largo_pass < 4 || largo_pass > 20) {
        document.getElementById("texto_pass").innerHTML = "No cumple con los requisitos!";
        document.getElementById("texto_pass").style.color = "red";
        document.getElementById("flag_pass").value = "0";
    } else {
        document.getElementById("texto_pass").innerHTML = "Cumple con los requisitos";
        document.getElementById("texto_pass").style.color = "green";
        document.getElementById("flag_pass").value = "1";
    }
    var v1 = document.getElementById("flag_rnombre").value;
    var v2 = document.getElementById("flag_pass").value;
    var v3 = document.getElementById("flag_reppass").value;
    var v5 = document.getElementById("flag_rcorreo").value;
    if (v1 == "1" && v2 == "1" && v3 == "1" && v5 == "1") {
        document.getElementById("registror").disabled = false;
    } else {
        document.getElementById("registror").disabled = true;
    }

}

function v_reppass() {
    var largo_pass = document.getElementById("pass").value;
    var largo_reppass = document.getElementById("repass").value;
    if (largo_pass == largo_reppass) {
        document.getElementById("texto_reppass").innerHTML = "coinciden";
        document.getElementById("texto_reppass").style.color = "green";
        document.getElementById("flag_reppass").value = "1";
    } else {
        document.getElementById("texto_reppass").innerHTML = "no coinciden";
        document.getElementById("texto_reppass").style.color = "red";
        document.getElementById("flag_reppass").value = "0";
    }
    var v1 = document.getElementById("flag_rnombre").value;
    var v2 = document.getElementById("flag_pass").value;
    var v3 = document.getElementById("flag_reppass").value;
    var v5 = document.getElementById("flag_rcorreo").value;
    if (v1 == "1" && v2 == "1" && v3 == "1" && v5 == "1") {
        document.getElementById("registror").disabled = false;
    } else {
        document.getElementById("registror").disabled = true;
    }
}