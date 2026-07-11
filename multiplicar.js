function generarTablas(){
    let numero = recuperarFloat("txtTabla");
    let contenido = "";
    let divContenido = document.getElementById("divContenido");
    let h1Titulo = document.getElementById("h1Titulo");
    h1Titulo.innerText = "Tabla del " + numero;
    
    for(let i=numero; i<=numero*15; i+=numero){
        contenido = contenido + "<tr><td>" + numero + " x " + (i/numero) + "</td><td>" + (i) + "</td></tr>";
        console.log(contenido);
        divContenido.innerHTML = contenido;
    }  
}

function recuperarTexto(idComponente){
    let componente=document.getElementById(idComponente);
    let valor =componente.value;
    return valor; 
}
function recuperarFloat(idComponente){
   let valorTexto=recuperarTexto(idComponente);
   let valorFloat=parseFloat(valorTexto)
   return valorFloat;
}