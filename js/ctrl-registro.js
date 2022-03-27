"use strict";
var forma = document.getElementById("forma")
forma["btn_limpia"].addEventListener("click",limpiar,false) 
forma["btn_agrega"].addEventListener("click",agregar,false) 
function limpiar(){
    forma["nombre_producto"].value = ""
    forma["sustancia"].value = ""
    forma["contenido"].value = ""
    forma["cantidad"].value = ""
    forma["precio_compra"].value = ""
    forma["precio_venta"].value = ""
    forma["laboratorio"].value = "Seleccionar"
    forma["empaque"].value = "Seleccionar"
    forma["presentacion"].value = "Seleccionar"
}
function agregar(){
    alert("Producto Agregado Correctamente")
}