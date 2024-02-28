const inputPokemon = document.querySelector('#pokemonInputId');
const inputBtnVerify = document.querySelector('#btnVerify');
const inputBtnTry = document.querySelector('#btnTry');
const inputs = document.querySelector('#inputs');
let timer;

function randomValue() {
    return Math.floor(Math.random() * 1025);
}

window.addEventListener('load', () => {
    showingPokemonData(randomValue());
});

inputBtnTry.addEventListener('click', () => {
    inputBtnTry.setAttribute('disabled', 'disabled');

    inputBtnTry.animate([
        {
            transform: 'translate(-50%, 0)'
        }
    ],
        {
            duration: 500,
            fill: 'forwards'
        }
    );

    inputBtnTry.animate([
        {
            transform: 'translate(-50%, 100%)'
        }
    ],
        {
            duration: 500,
            fill: 'forwards',
            delay: 5000
        }
    );

    showingPokemonData(randomValue());
});
inputBtnVerify.addEventListener('click', () => {
    const img = document.querySelector('img');
    const newInputPokemon = new String(inputPokemon.value).toString().toLowerCase();

    const operacao = newInputPokemon == img.getAttribute('alt');

    if(operacao) {
        inputPokemon.value = '';
        img.style.filter = 'brightness(1) drop-shadow(var(--drop-shadow-config))';
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

                img.style.filter = 'brightness(0) drop-shadow(var(--drop-shadow-config))';
            }
        }, 1000);
    } else {
        inputs.animate([
            {
                transform: 'translateX(var(--transform-config-right))'
            },
            {
                transform: 'translateX(var(--transform-config-left))',
                boxShadow: 'var(--box-shadow-config-values) var(--box-shadow-config-color)'
            },
            {
                transform: 'translateX(var(--transform-config-right))',
                boxShadow: 'var(--box-shadow-config-values) var(--box-shadow-config-color)'
            },
            {
                transform: 'translateX(var(--transform-config-left))',
                boxShadow: 'var(--box-shadow-config-values) var(--box-shadow-config-color)'
            },
            {
                transform: 'translateX(var(--transform-config-right))'
            },
            {
                transform: 'translate(-50%)'
            }
        ],
            {
                duration: 800
            }
        );
    }
});