class Tecla {
    constructor(letra) {
        this.letra = letra;
        this.div = document.createElement('div');
        this.div.classList.add('tecla');

        // Adicionar evento de clique à div
        this.div.addEventListener('click', () => {
            const display = document.getElementById('display');

            if (display.textContent.length < 15)
            {display.textContent += this.letra;}; // Utilizamos o operador += para adicionar ao texto existente
        });

        this.paragrafo = document.createElement('p');
        this.paragrafo.textContent = this.letra;

        this.div.appendChild(this.paragrafo);
        return this.div;
    }
}