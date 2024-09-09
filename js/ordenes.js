

document.getElementById('iniciar').addEventListener('click', function(){
    var datos = document.getElementById("datos");

    if(datos.style.display === "none"){
        datos.style.display = "block";
    }else{
        datos.style.display = "none";
    }
});