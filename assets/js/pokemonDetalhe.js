
const card = document.getElementById('pokemonD1')
const backButton = document.getElementById('back')
backButton.addEventListener('click', function() {
    history.back();
});


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');




function convertPokemonD1(pokemon) {
    return `
        <li class="pokemonD ${pokemon.type}">
            <span class="id">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <span class="abilities">${pokemon.abilities}</span>
           
            <div class="detail">
                <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                 
                </ol>
            
             </div>
            
                <img src="${pokemon.photo}"
                alt="${pokemon.name}">
           
                <div class="title">
                <span class="especie">Especie: ${pokemon.species}</span></br>
                <span class="altura">Altura: ${pokemon.height}</span></br>
                <span class="peso">Peso: ${pokemon.weight}</span></div>

        </li>
    `
}






pokeApi.getPokemon()