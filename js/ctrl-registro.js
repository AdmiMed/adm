"use strict";
var forma = document.getElementById("forma")
forma["btn_limpia"].addEventListener("click",limpiar,false) 

function limpiar(){
    forma["nombre_producto"].value = ""
    forma["sustancia"].value = ""
    forma["contenido"].value = ""
    forma["cantidad"].value = ""
    forma["precio_compra"].value = ""
    forma["precio_venta"].value = ""
}
