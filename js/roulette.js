//Definir constantes y variables
const roulette = document.getElementById("roulette");
const root = document.documentElement;
let sorteando = false;


document.getElementById("girar").addEventListener("click",()=>sortear())

/* const uno = {
    nombre: "Uno",
    color: "Rojo"
}

const dos = {
    nombre: "Dos",
    color: "Verde"
}

const tres = {
    nombre: "Tres",
    color: "Azul"
}

const cuatro = {
    nombre: "Cuatro",
    color: "Violeta"
}

const cinco = {
    nombre: "Cinco",
    color: "Amarillo"
}

let conceptos = [uno,dos,tres,cuatro,cinco]; */

let equipos = [
    {
        "nombre": "Kaa Gent",
        "pais" : "Bélgica",
        "estrellas": "2"
    },
    {
        "nombre": "Sparta Praha",
        "pais" : "República Checha",
        "estrellas": "3"
    },
    {
        "nombre": "Bayern Múnich",
        "pais" : "Alemania",
        "estrellas": "5"
    },
    {
        "nombre": "Borussia Monchengladbach",
        "pais" : "Alemania",
        "estrellas": "4"
    },
    {
        "nombre": "Wolfburgo",
        "pais" : "Alemania",
        "estrellas": "4"
    },
    {
        "nombre": "Olympiacos",
        "pais" : "Grecia",
        "estrellas": "3.5"
    },
    {
        "nombre": "Zenit",
        "pais" : "Rusia",
        "estrellas": "4"
    },
    {
        "nombre": "Basel 1893",
        "pais" : "Suiza",
        "estrellas": "3.5"
    },
    {
        "nombre": "Dinamo de Kiev",
        "pais" : "Ucrania",
        "estrellas": "3.5"
    },
    {
        "nombre": "Olympique de Marseille",
        "pais" : "Francia",
        "estrellas": "4"
    },
    {
        "nombre": "Atletico de Madrid",
        "pais" : "España",
        "estrellas": "4.5"
    },
    {
        "nombre": "FC Barcelona",
        "pais" : "España",
        "estrellas": "5"
    },
    {
        "nombre": "Real Madrid",
        "pais" : "España",
        "estrellas": "5"
    },
    {
        "nombre": "Sevilla FC",
        "pais" : "España",
        "estrellas": "4"
    },
    {
        "nombre": "Valencia CF",
        "pais" : "España",
        "estrellas": "4"
    },
    {
        "nombre": "Olympique Lyonnais",
        "pais" : "Francia",
        "estrellas": "4"
    },
    {
        "nombre": "Paris saint-germain",
        "pais" : "Francia",
        "estrellas": "5"
    },
    {
        "nombre": "PSV",
        "pais" : "Holanda",
        "estrellas": "4"
    },
    {
        "nombre": "Arsenal (North London)",
        "pais" : "Inglaterra",
        "estrellas": "4.5"
    },
    {
        "nombre": "Chelsea (London FC)",
        "pais" : "Inglaterra",
        "estrellas": "5"
    },
    {
        "nombre": "Manchester city (Man. Blue)",
        "pais" : "Inglaterra",
        "estrellas": "4.5"
    },
    {
        "nombre": "ACF Fiorentina",
        "pais" : "Italia",
        "estrellas": "4.5"
    },
    {
        "nombre": "Juventus FC",
        "pais" : "Italia",
        "estrellas": "4.5"
    },
    {
        "nombre": "Manchester United",
        "pais" : "Inglaterra",
        "estrellas": "4.5"
    },
    {
        "nombre": "A.S. Roma",
        "pais" : "Italia",
        "estrellas": "4.5"
    },
    {
        "nombre": "Empoli FC",
        "pais" : "Italia",
        "estrellas": "3.5"
    },
    {
        "nombre": "SL Benfica",
        "pais" : "Portugal",
        "estrellas": "4"
    },
    {
        "nombre": "FC Porto",
        "pais" : "Portugal",
        "estrellas": "4"
    },
    {
        "nombre": "Feyernoord",
        "pais" : "Holanda",
        "estrellas": "3.5"
    },
    {
        "nombre": "AS Monaco FC",
        "pais" : "Francia",
        "estrellas": "4"
    },
    {
        "nombre": "Ajax",
        "pais" : "Holanda",
        "estrellas": "4"
    },
    {
        "nombre": "Tottenham (North East London)",
        "pais" : "Inglaterra",
        "estrellas": "4.5"
    },
    {
        "nombre": "Atalanta B.C.",
        "pais" : "Italia",
        "estrellas": "3.5"
    },
    {
        "nombre": "Internazionale Milano",
        "pais" : "Italia",
        "estrellas": "4.5"
    },
    {
        "nombre": "S.S. Lazio",
        "pais" : "Italia",
        "estrellas": "4.5"
    },
    {
        "nombre": "A.C. Milan",
        "pais" : "Italia",
        "estrellas": "4"
    },
    {
        "nombre": "Bologna F.C.",
        "pais" : "Italia",
        "estrellas": "2.5"
    },
    {
        "nombre": "Real Sporting",
        "pais" : "España",
        "estrellas": "2"
    },
    {
        "nombre": "Granada C.F",
        "pais" : "España",
        "estrellas": "3"
    },
    {
        "nombre": "Sporting",
        "pais" : "Portugal",
        "estrellas": "4"
    },
    {
        "nombre": "M.A Yellow Blue",
        "pais" : "Portugal",
        "estrellas": "1.5"
    }
];

equipos.forEach((equipo, i) => {
    equipo.posicionRuleta = i + 1;
});

const colores = ["#FF0000","#32FF00","#002BFF", "#FF00FF","#FFF700"]

function getCurrentRotation(el){
    var st = window.getComputedStyle(el, null);
    var tm = st.getPropertyValue("-webkit-transform") ||
             st.getPropertyValue("-moz-transform") ||
             st.getPropertyValue("-ms-transform") ||
             st.getPropertyValue("-o-transform") ||
             st.getPropertyValue("transform") ||
             "none";
    if (tm != "none") {
      var values = tm.split('(')[1].split(')')[0].split(',');
      var angle = Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI));
      return (angle < 0 ? angle + 360 : angle);
    }
    return 0;
  }


function ajustarRuleta(){
    angle = 360/equipos.length;
    angleCont = 0;
    const equiposContainer =  document.createElement("div");
    equiposContainer.id = "equiposContainer"
    roulette.appendChild(equiposContainer);
    equipos.forEach((equipo, i) =>{
        //crear particiones de la ruleta
        angleCont = angleCont + angle;
        const equipoElement =  document.createElement("div");
        const nombreEquipo = document.createTextNode(equipo.nombre);
        equipoElement.appendChild(nombreEquipo);
        equipoElement.classList.add("equipo"); 
        roulette.appendChild(equipoElement);
        equipoElement.style = `background-color: #D8D8D8; 
        ${setAnguloOpcion(angleCont)}; 
        z-index: ${equipos.length - i};
        border: 1px solid black;
        `

    })
}

function setAnguloOpcion(angle){
    if(angle <= 45){
        x = (50*(1+(Math.tan((angle) * Math.PI / 180))));
        nodos = "clip-path: polygon(50% 50%, 50% 0%, "+ x +"% 0%);";
    }
    else if(angle <= 90){
        y = (50*(1-(Math.tan((90 - angle) * Math.PI / 180))));
        nodos = "clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100%" + y + "%);";
    }
    else if(angle <= 135){
        y = (50*(1+(Math.tan((angle - 90) * Math.PI / 180))));
        nodos = "clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100%" + y + "%);";
    }
    else if(angle <= 180){
        x = 50*(2 - (Math.tan((angle - 135) * Math.PI / 180)));
        nodos = "clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, " + x + "% 100%);";
    }
    else if(angle <= 225){
        x = 50*(1 -(Math.tan((angle - 180) * Math.PI / 180)));
        nodos = "clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, " + x + "% 100%);";
    }
    else if(angle <= 270){
        y = 50*(2 - (Math.tan((angle - 225) * Math.PI / 180)));
        nodos = "clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% " + y + "%);";
    }
    else if(angle <= 315){
        y = 50*(1 - (Math.tan((angle - 270) * Math.PI / 180)));
        nodos = "clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% " + y + "%);";
    }
    else if(angle <= 360){
        x = 50*((Math.tan((angle - 315) * Math.PI / 180)));
        nodos = "clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%," + x + "% 0%);";
    }
    return nodos;
};

function sortear(){
    if(sorteando) return;
    sorteando = true;
    numeroSorteo = equipos.length + 1
    while (numeroSorteo > equipos.length) {
        numeroSorteo = Math.round(Math.random() * equipos.length) + 1;
    }
    roulette.classList.toggle("girar",true);
    equipos.forEach(equipo => {
        if(numeroSorteo == equipo.posicionRuleta){
            equipoGanador = equipo.nombre;
            color = equipo.color;
        }
    });
    const anguloDeGiro = 30*360 + 360 - angle*(numeroSorteo - Math.random());
    root.style.setProperty("--giroRuleta", anguloDeGiro + "deg");
    // console.log(Math.random());
    // console.log(anguloDeGiro);
    // console.log(numeroSorteo);
    // console.log(EquipoGanador);
    // console.log(color);
}

function paradaDeRuleta(){
    roulette.addEventListener("animationend",()=>{
        sorteando = false;
        roulette.style.transform = "rotate("+getCurrentRotation(roulette)+"deg)";
        roulette.classList.toggle("girar",false);
        mostrarGanador(equipoGanador);
    })
    
}

function mostrarGanador(equipoGanador){
    document.getElementById("equipoGanador").innerHTML = equipoGanador;
}

ajustarRuleta();
paradaDeRuleta();
console.log(equipos.length);