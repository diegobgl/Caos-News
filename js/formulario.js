function registro() {
    document.getElementById("registro").disabled = true;
}
// VALIDACION NOMBRE
function v_nombre() {
    var largo_nombre = document.getElementById("nombre").value.length;
    if (largo_nombre < 3 || largo_nombre > 15) {
        document.getElementById("texto_nombre").innerHTML = "No cumple los requisitos";
        document.getElementById("texto_nombre").style.color = "red";
        document.getElementById("flag_nombre").value = "0";
    } else {
        document.getElementById("texto_nombre").innerHTML = "Cumple los requisitos";
        document.getElementById("texto_nombre").style.color = "green";
        document.getElementById("flag_nombre").value = "1";
    }
    var v1 = document.getElementById("flag_nombre").value;
    var v4 = document.getElementById("flag_apellido").value;
    var v5 = document.getElementById("flag_correo").value;
    if (v1 == "1" && v4 == "1" && v5 == "1") {
        document.getElementById("registro").disabled = false;
    } else {
        document.getElementById("registro").disabled = true;
    }
}
//apellido
function v_apellido() {
    var largo_nombre = document.getElementById("apellido").value.length;
    if (largo_nombre < 3 || largo_nombre > 15) {
        document.getElementById("texto_apellido").innerHTML = "No cumple los requisitos!";
        document.getElementById("texto_apellido").style.color = "red";
        document.getElementById("flag_apellido").value = "0";
    } else {
        document.getElementById("texto_apellido").innerHTML = "Cumple los requisitos";
        document.getElementById("texto_apellido").style.color = "green";
        document.getElementById("flag_apellido").value = "1";
    }
    var v1 = document.getElementById("flag_nombre").value;
    var v4 = document.getElementById("flag_apellido").value;
    var v5 = document.getElementById("flag_correo").value;
    if (v1 == "1" && v4 == "1" && v5 == "1") {
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
    var v5 = document.getElementById("flag_correo").value;
    if (v1 == "1" && v4 == "1" && v5 == "1") {
        document.getElementById("registro").disabled = false;
    } else {
        document.getElementById("registro").disabled = true;
    }

}