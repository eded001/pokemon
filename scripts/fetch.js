const pokemonImage = document.querySelector('#pokemonImage');

function showingPokemonData(pokemonId) {
    // URL da PokeAPI para obter informações sobre um Pokémon específico
    url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
    // realizando a requisição
    fetch(url)
    .then(response => {
        if (!response.ok) {
            inputBtnTry.removeAttribute('disabled');

            throw new Error(`Erro ${response.status}: Não foi possível obter os dados do Pokémon.`);
        }

        return response.json();
    })
    .then(pokemonData => {
        const pokeData = {
            name: pokemonData.name,
            link: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`
        }

        const newNamePokemon = new String(pokeData.name).toString().replaceAll('-', ' ');
        const img = document.querySelector('img');
        img.src = pokeData.link;
        img.alt = newNamePokemon;

        console.log(newNamePokemon);
        inputBtnTry.removeAttribute('disabled');
        img.style.filter = 'brightness(0) drop-shadow(var(--drop-shadow-config))';
    })
    .catch(error => {
        console.error(error);

        inputBtnTry.removeAttribute('disabled');
    });
}