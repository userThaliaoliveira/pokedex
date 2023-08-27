// Cria um objeto vazio chamado pokeApi.
const pokeApi = {};

// Função que converte detalhes de um Pokémon da API para um objeto Pokémon personalizado.
function convertPokeApiDetailToPokemon(pokeDetail) {
    // Cria um novo objeto Pokemon.
    const pokemon = new Pokemon();
    
    // Preenche as propriedades do objeto com dados da API.
    pokemon.number = pokeDetail.id; // Número do Pokémon.
    pokemon.name = pokeDetail.name; // Nome do Pokémon.
    
    // Mapeia os tipos do Pokémon a partir dos detalhes da API.
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types; // Pega o primeiro tipo.
    
    pokemon.types = types; // Array de tipos do Pokémon.
    pokemon.type = type; // Tipo principal do Pokémon.
    
    // Define a URL da foto do Pokémon a partir dos detalhes da API.
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
    
    return pokemon;
}

// Método de pokeApi para obter detalhes de um Pokémon a partir de sua URL.
pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon); // Converte detalhes em um objeto Pokémon personalizado.
}

// Método de pokeApi para obter um lote de Pokémon da API.
pokeApi.getPokemons = (offset = 0, limit = 5) => {
    // Monta a URL da API para obter um lote de Pokémon com os parâmetros dados.
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results) // Extrai os resultados da resposta JSON.
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // Obtém detalhes para cada Pokémon.
        .then((detailRequests) => Promise.all(detailRequests)) // Aguarda todas as requisições de detalhes.
        .then((pokemonsDetails) => pokemonsDetails); // Retorna os detalhes dos Pokémon.
}
