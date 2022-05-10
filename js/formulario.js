function registro() {
    document.getElementById("registro").disabled = true;
}
// VALIDACION NOMBRE
function v_rnombre() {
    var largo_nombre = document.getElementById("rnombre").value.length;
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
    var v4 = document.getElementById("flag_rapellido").value;
    var v2 = document.getElementById("flag_pass").value;
    var v3 = document.getElementById("flag_reppass").value;
    var v5 = document.getElementById("flag_correo").value;
    if (v1 == "1" && v2 == "1" && v3 == "1" && v4 == "1" && v5 == "1") {
        document.getElementById("registro").disabled = false;
    } else {
        document.getElementById("registro").disabled = true;
    }
}
//apellido
function v_rapellido() {
    var largo_nombre = document.getElementById("rapellido").value.length;
    if (largo_nombre < 3 || largo_nombre > 15) {
        document.getElementById("texto_rapellido").innerHTML = "No cumple los requisitos!";
        document.getElementById("texto_rapellido").style.color = "red";
        document.getElementById("flag_rapellido").value = "0";
    } else {
        document.getElementById("texto_rapellido").innerHTML = "Cumple los requisitos";
        document.getElementById("texto_rapellido").style.color = "green";
        document.getElementById("flag_rapellido").value = "1";
    }
    var v1 = document.getElementById("flag_rnombre").value;
    var v4 = document.getElementById("flag_rapellido").value;
    var v2 = document.getElementById("flag_pass").value;
    var v3 = document.getElementById("flag_reppass").value;
    var v5 = document.getElementById("flag_correo").value;
    if (v1 == "1" && v2 == "1" && v3 == "1" && v4 == "1" && v5 == "1") {
        document.getElementById("registro").disabled = false;
    } else {
        document.getElementById("registro").disabled = true;
    }
}
//correo
function v_correo() {
    c = document.getElementById("correo").value
    cr = /^([\da-z_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/
    if (!cr.exec(c)) {
        document.getElementById("texto_correo").innerHTML = "Correo Invalido!"
        document.getElementById("texto_correo").style.color = "red"
        document.getElementById("flag_correo").value = "0";


    } else {
        document.getElementById("texto_correo").innerHTML = "Correo Valido"
        document.getElementById("texto_correo").style.color = "green"
        document.getElementById("flag_correo").value = "1";


    }
    var v1 = document.getElementById("flag_rnombre").value;
    var v4 = document.getElementById("flag_rapellido").value;
    var v2 = document.getElementById("flag_pass").value;
    var v3 = document.getElementById("flag_reppass").value;
    var v5 = document.getElementById("flag_correo").value;
    if (v1 == "1" && v2 == "1" && v3 == "1" && v4 == "1" && v5 == "1") {
        document.getElementById("registro").disabled = false;
    } else {
        document.getElementById("registro").disabled = true;
    }

}