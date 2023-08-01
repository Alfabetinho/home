function sintetizarVoz() {
    const texto = document.getElementById('display').value;
    const sintetizador = window.speechSynthesis;


    // Verificar se a síntese de voz está disponível no navegador
    if ('speechSynthesis' in window) {
        // Cancelar sínteses em andamento, se houver
        sintetizador.cancel();

        // Criar um objeto de fala com o texto fornecido
        const utterance = new SpeechSynthesisUtterance(texto);

        // Configurar opções adicionais (opcional)
        utterance.lang = 'pt-BR'; // Defina o idioma da síntese de voz
        utterance.volume = 3; // Volume (0 a 1)
        utterance.rate = 1.5; // Velocidade da fala (0.1 a 10)
        utterance.pitch = 1; // Tom de voz (0 a 2)

        // Iniciar a síntese de voz
        sintetizador.speak(utterance);
    } else {
        alert('Síntese de voz não é suportada neste navegador.');
    }
}

function listarTeclas(listaLetras) {
    const conteudo = document.getElementById('teclas');
    listaLetras.forEach(letra => {
        const minhaTeclaDiv = new Tecla (letra);
        conteudo.appendChild(minhaTeclaDiv);
    });
}

function maiusculas() 
{/*Monta o teclado Maiúsculo*/
listarTeclas(ma1);
document.getElementById('teclas').appendChild(apagar);
listarTeclas(ma2);
document.getElementById('teclas').appendChild(shift);
listarTeclas(esp);
document.getElementById('teclas').appendChild(limpa);}

function minusculas() 
{/*Monta o teclado Maiúsculo*/
listarTeclas(mi1);
document.getElementById('teclas').appendChild(apagar);
listarTeclas(mi2);
document.getElementById('teclas').appendChild(shift);
listarTeclas(esp);
document.getElementById('teclas').appendChild(limpa);}

