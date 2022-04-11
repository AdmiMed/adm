"use strict";
var forma = document.getElementById("forma")
forma["btn-muestra"].addEventListener("click", muestraFiltro, false) 
forma["btn-consultar"].addEventListener("click", consultarRegistros, false) 

function muestraFiltro(){
    var seleccion = document.getElementById("cmb_tipo-consulta").value;  
    if(seleccion=="Dia"){        
        document.getElementById("consulta-por-dia").hidden = false
        document.getElementById("consulta-por-cliente").hidden = true
        document.getElementById("etiqueta-presenta").hidden = false
        document.getElementById("boton-consulta").hidden = false
        event.preventDefault();
    }else if(seleccion=="Cliente"){
        document.getElementById("consulta-por-dia").hidden = true
        document.getElementById("consulta-por-cliente").hidden = false
        document.getElementById("etiqueta-presenta").hidden = false
        document.getElementById("boton-consulta").hidden = false
        event.preventDefault();
    }else if(seleccion=="Todas"){
        document.getElementById("consulta-por-dia").hidden = true
        document.getElementById("consulta-por-cliente").hidden = true
        document.getElementById("etiqueta-presenta").hidden = true
        document.getElementById("boton-consulta").hidden = false
        event.preventDefault();
    }


}


function consultarRegistros(){
    alert("HOLA")
    document.getElementById("imprimir").hidden = false
    event.preventDefault();
    
}


