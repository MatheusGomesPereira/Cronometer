let horastxt = document.getElementById("hora");
let minutostxt = document.getElementById("minutos");
let segundostxt = document.getElementById("segundos");
let mili = document.getElementById('mili');


let interval;
let horas = 0
 let minutos = 0
let segundos = 0
let miliseconds = 0

const começar = document.getElementById('start')
começar.addEventListener('click', Cronometro);

const resetar = document.getElementById('resetar');
resetar.addEventListener('click', Reset);

const pauses = document.getElementById('pause');
pauses.addEventListener('click', Pause);

const continuar = document.getElementById('continuar')
continuar.addEventListener('click', Resume);

 
let Paused = false;
continuar.style.display = 'none'
resetar.style.display = 'none'
pauses.style.display = 'none'

function Cronometro(){
    pauses.style.display = 'block'
    começar.style.display = 'none'
    resetar.style.display = 'block'

   interval = setInterval(() => {
    if(Paused == false){
    miliseconds +=10
    mili.textContent = PadraoMili (miliseconds);

      if(miliseconds === 1000){
        segundos++
        miliseconds = 0
        segundostxt.textContent = Padrao (segundos);
      
        if(segundos === 60){
            minutos++;
            segundos = 0
            minutostxt.textContent = Padrao(minutos)
            
        };

        if(minutos === 60){
            horas++;
            horastxt.textContent = horas
            minutos = 0
            
        }
      }
    }
}, 10);
    
};
      
//functions

function Reset(){
    Paused = false
    começar.style.display ='block'
    pauses.style.display = 'none'
    resetar.style.display = 'none'
    continuar.style.display = 'none'


    clearInterval(interval);
     segundos = 0
     miliseconds = 0
     minutos = 0
     horas = 0

     segundostxt.textContent = '00'
     mili.textContent = '000'
     minutostxt.textContent = '00'
     horastxt.textContent = '00'
     interval()
}
function Pause(){

Paused = true

começar.style.display = 'none'
pauses.style.display = 'none'
continuar.style.display ='block'
};

function Padrao(tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
};

function PadraoMili(tempo){
    return tempo < 100? `0${tempo}` : tempo
};

function Resume(){

    Paused = false

    pauses.style.display = 'block'
    continuar.style.display = 'none'
};