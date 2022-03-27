"use strict";
var forma = document.getElementById("forma")

forma["btn_muestraProductos"].addEventListener("click", mostrarDatosProducto, false) 
forma["btn_muestraClientes"].addEventListener("click",muestraDatosClientes,false)
function mostrarDatosProducto(){

    alert("DATOS DEL PRODUCTO")
}

function muestraDatosClientes(){
    document.getElementById("entrega").hidden = false
}


