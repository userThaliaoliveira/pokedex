// Obtém referências aos elementos do DOM.
const pokemonList = document.getElementById('pokemonList'); // Elemento que contém a lista de Pokémon.
const loadMoreButton = document.getElementById('loadMoreButton'); // Botão "Carregar Mais".

// Define constantes para controle da exibição dos Pokémon.
const maxRecords = 151; // Número máximo total de registros de Pokémon.
const limit = 20; // Quantidade de Pokémon a carregar por vez.
let offset = 0; // Deslocamento para carregar Pokémon.

// Função para converter um Pokémon em um elemento de lista (<li>).
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `;
}

// Função para carregar itens de Pokémon com um determinado deslocamento e limite.
function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        // Converte os dados dos Pokémon em HTML e adiciona à lista existente.
        const newHtml = pokemons.map(convertPokemonToLi).join('');
        pokemonList.innerHTML += newHtml;
    });
}

// Carrega os primeiros itens de Pokémon.
loadPokemonItems(offset, limit);

// Adiciona um ouvinte de evento para o botão "Carregar Mais".
loadMoreButton.addEventListener('click', () => {
    offset += limit; // Aumenta o deslocamento para carregar a próxima página.

    // Calcula a quantidade de registros após a próxima página.
    const qtdRecordsWithNextPage = offset + limit;

    if (qtdRecordsWithNextPage >= maxRecords) {
        // Se o próximo lote de registros ultrapassar o máximo total...
        const newLimit = maxRecords - offset; // Calcula o limite para a última página.
        loadPokemonItems(offset, newLimit); // Carrega a última página de Pokémon.
        
        loadMoreButton.parentElement.removeChild(loadMoreButton); // Remove o botão "Carregar Mais".
    } else {
        // Se ainda houver mais páginas para carregar...
        loadPokemonItems(offset, limit); // Carrega a próxima página de Pokémon.
    }
});
