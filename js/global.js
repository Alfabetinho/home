//Teclas
const mi1 = ['q', 'w', 'j']
const mi2 = ['r', 't', 'y', 'c', 'k', 'l', 'p', 'h', 's', 'd', 'f', 'g', 'a', 'e', 'i', 'o', 'ç', 'z', 'x', 'u', 'v','b', 'n', 'm'];

const ma1 = ['Q', 'W', 'J']
const ma2 = ['R', 'T', 'Y', 'C', 'K', 'L', 'P', 'H', 'S', 'D', 'F', 'G', 'A', 'E', 'I', 'O', 'Ç', 'Z', 'X', 'U', 'V','B', 'N', 'M'];

const esp = ['-',' '];

/*Cria o botão apagar*/
const apagar = document.createElement('div');
apagar.classList.add('tecla');
apagar.style.background = 'rgb(115 82 209)';
// Adicionar evento de clique à div
apagar.addEventListener('click', () => {
    const display = document.getElementById('display');
    const texto = display.textContent;
    display.textContent = texto.slice(0, -1);
});

const nmApagar = document.createElement('p');
nmApagar.textContent = '<';
nmApagar.style.fontSize = '3vh';
nmApagar.style.color = '#fafafa'
apagar.appendChild(nmApagar);

/*Cria o botão shift*/
const shift = document.createElement('div');
shift.classList.add('tecla');
shift.style.background = 'rgb(115 82 209)';

// Adicionar evento de clique à div
shift.addEventListener('click', () => {
    const teclas = document.getElementById('teclas');
    teclas.innerHTML = '';

    if(nmShift.textContent == '<') {
        nmShift.textContent = '>';
        minusculas();
    } else if (nmShift.textContent == '>'){
        nmShift.textContent = '<';
        maiusculas();
    };
});

const nmShift = document.createElement('p');
nmShift.textContent = '>';
nmShift.style.rotate = '-90deg';
nmShift.style.fontSize = '3vh';
nmShift.style.color = '#fafafa'
shift.appendChild(nmShift);

/*Cria o botão limpa tudo*/
const limpa = document.createElement('div');
limpa.classList.add('tecla');
limpa.style.background = 'rgb(255 33 103)';

limpa.addEventListener('click', () => {
    const display = document.getElementById('display');
    display.innerHTML = '';
});

const nmLimpa = document.createElement('p');
nmLimpa.textContent = '-';
nmLimpa.style.fontSize = '3vh';
nmLimpa.style.color = '#fafafa'
limpa.appendChild(nmLimpa);

/*Alteração da fonte do display*/
const fontes = document.getElementById('fontes');

fontes.addEventListener('click', function(){
    const display = document.getElementById('display');
    const span = document.getElementById('sp1');

    if(window.getComputedStyle(display).fontFamily.includes('borel')){
        display.style.fontFamily = 'comic';
        span.style.color = 'coral';
        display.style.color = 'coral';
        display.style.fontSize = '3.5vh';
    } else {display.style.fontFamily = 'borel';
            display.style.fontSize = '3.0vh';
            span.style.color = '#53c14c';
            display.style.color = '#53c14c';
}})

document.addEventListener("DOMContentLoaded", function() {
    const textarea = document.getElementById("display");
    const button = document.getElementById("falar");
  
    // Mantém o teclado sempre ativado no campo de texto
    textarea.addEventListener("focus", function() {
      textarea.removeAttribute("readonly");
    });
  
    // Desativa a edição do campo de texto quando o botão for clicado
    button.addEventListener("click", function() {
      textarea.setAttribute("readonly", "readonly");
    });
  });
