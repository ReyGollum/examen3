document.addEventListener("keydown",function(event){console.log(event)});
document.addEventListener("keydown", function(event){

    const elemento = document.getElementById("Cuerpo");

    if (event.key ==="1"){

        elemento.className = "Cuerpo00";

    }

    if (event.key ==="2"){

        elemento.className = "Cuerpo01";

    }

    if(event.key ==="3"){

        elemento.className = "Cuerpo02";

    }

    if(event.key ==="4"){

        elemento.className = "Cuerpo03";

    }
    
    if(event.key ==="5"){

        elemento.className = "Cuerpo04";

    }


});