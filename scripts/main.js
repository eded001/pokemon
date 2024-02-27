const inputPokemon = document.querySelector('#pokemonInputId');
const inputBtnVerify = document.querySelector('#btnVerify');
const inputBtnTry = document.querySelector('#btnTry');
let timer;

function randomValue() {
    return Math.floor(Math.random() * 1025);
}

window.addEventListener('load', () => {
    showingPokemonData(randomValue());
});

inputBtnTry.addEventListener('click', () => {
    inputBtnTry.setAttribute('disabled', 'disabled');

    showingPokemonData(randomValue());
});
inputBtnVerify.addEventListener('click', () => {
    const img = document.querySelector('img');
    const newInputPokemon = new String(inputPokemon.value).toString().toLowerCase();

    const operacao = newInputPokemon == img.getAttribute('alt');

    if(operacao) {
        img.style.filter = 'brightness(1) drop-shadow(3px 3px #111)';
        let i = 6;

        timer = setInterval(() => {
            i -= 1;

            inputBtnTry.value = `Atualizando em ${i}`;
            inputBtnTry.setAttribute('disabled', 'disabled');
            

            // i <= 1 ? clearInterval(timer) : null;
            if(i <= 1) {
                clearInterval(timer);
                showingPokemonData(randomValue());

                inputBtnTry.value = 'Tentar outro pokémon';
                inputBtnTry.removeAttribute('disabled');
            }
        }, 1000);
    }

    inputPokemon.value = '';
});