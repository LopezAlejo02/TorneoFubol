function sortearJ1(){
    const nSorteo = Math.floor(Math.random() * (equipos.length));
    let i = 0;
    
    animacionSorteo = setInterval(()=>{
        if (i == equipos.length) {
            i = 0
        }
        else{
            escudoRuletaG.src = equipos[i].escudo;
            nombreRuletaG.textContent = equipos[i].nombre;
            i = i + 1;
        }
	} ,40)
    setTimeout(function(){
        clearInterval(animacionSorteo);
        nombreRuletaG.textContent = equipos[nSorteo].nombre;
        nombreEqJ1.textContent = equipos[nSorteo].nombre;
        escudoRuletaG.src = equipos[nSorteo].escudo;
        escudoJ1.src = equipos[nSorteo].escudo;
    }, 6000);
    //clearInterval(animacionSorteo);
	/** Numero del 0 al 1 que contiene al ganador del sorteo */
    document.getElementById("sortearJ1").disabled = true;
}   