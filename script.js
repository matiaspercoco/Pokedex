function obtenerInformacionPokemon() {
    const nombrePokemon = document.getElementById("pokemonName").value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se pudo obtener la información del Pokémon: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const pokemonInfo = document.getElementById("pokemonInfo");
            pokemonInfo.innerHTML = `
                <h2>${data.name.toUpperCase()}</h2>
                <p>Altura: ${data.height / 10} metros</p>
                <p>Peso: ${data.weight / 10} kilogramos</p>
                <h3>Tipos:</h3>
                <ul>
                    ${data.types.map(type => `<li>${type.type.name}</li>`).join('')}
                </ul>
                <h3>Habilidades:</h3>
                <ul>
                    ${data.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
                </ul>
            `;
        })
        .catch(error => {
            const pokemonInfo = document.getElementById("pokemonInfo");
            pokemonInfo.innerHTML = `<p>${error.message}</p>`;
        });
}