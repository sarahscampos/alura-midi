
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento != null && elemento.localName == 'audio') {
        elemento.play();
    }
    else {
        //alert("Elemento não encontrado");
        console.log("Elemento não encontrado ou seletor inválido");    
    }
   
}

//referencia constante
const listaDeTeclas = document.querySelectorAll('.tecla');

//referencia variavel
//let contador = 0;

for(let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {

        console.log(evento.code);

        //Em JS == compara o valor, já === compara o tipo e o valor dos dados
        if(evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa'); //adiciona classe 
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa'); //remove classe
    }

    //console.log(contador)
}
