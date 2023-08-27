## Documentação da Pokedex
Esta é uma documentação para a construção de uma página da Pokedex usando HTML, CSS e JavaScript. A Pokedex é uma enciclopédia virtual que lista informações sobre diferentes espécies de Pokémon.

## Estrutura do Projeto

O projeto consiste em uma página web que exibe uma lista de Pokémon, permitindo ao usuário carregar mais Pokémon conforme necessário. Os arquivos relevantes para o projeto são organizados da seguinte forma:
```
projeto-pokedex/
├── index.html
├── assets/
│   ├── css/
│   │   ├── global.css
│   │   └── pokedex.css
│   ├── js/
│   │   ├── pokemon-model.js
│   │   ├── poke-api.js
│   │   └── main.js
```


## Arquivo `index.html`

O arquivo `index.html` é a página principal que renderiza a Pokedex. Ele contém a estrutura básica da página, incluindo links para folhas de estilo e scripts JavaScript.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/assets/css/global.css">
    <link rel="stylesheet" href="/assets/css/pokedex.css">
</head>
<body>
    <section class="content">
        <h1>Pokedex</h1>
        <ol id="pokemonList" class="pokemons">
            <!-- ..... Pokemons..... -->
        </ol>
        <div class="pagination">
            <button id="loadMoreButton" type="button">
                Veja mais
            </button>
        </div>
    </section>
    <script src="/assets/js/pokemon-model.js"></script>
    <script src="/assets/js/poke-api.js"></script>
    <script src="/assets/js/main.js"></script>
</body>
</html>
```

## Arquivos CSS

Os arquivos CSS (global.css e pokedex.css) são usados para estilizar a página da Pokedex. Eles estão localizados na pasta assets/css/.

## Arquivos JavaScript

Os arquivos JavaScript (pokemon-model.js, poke-api.js e main.js) são responsáveis por lidar com a lógica dos Pokémon, a interação com a API e a funcionalidade principal da página. Eles estão localizados na pasta assets/js/.

## Arquivo pokemon-model.js

O arquivo pokemon-model.js define a classe Pokemon, que representa as informações de um Pokémon.

## javascript
```
class Pokemon {
    number;
    name;
    type;
    types = [];
    photo;
}
```
## Arquivo poke-api.js
O arquivo poke-api.js contém o objeto pokeApi, que fornece métodos para obter informações dos Pokémon da API.

## javascript
```
// Objeto pokeApi com métodos para obter detalhes e lote de Pokémon
```
##Arquivo main.js

O arquivo main.js é o script principal que interage com os elementos da página e controla a exibição dos Pokémon.

## javascript
```
// Obtendo referências a elementos do DOM
// Definindo constantes para controle de registros e limite
// Função para converter detalhes da API em objetos Pokémon personalizados
// Função para carregar itens de Pokémon
// Carregando os primeiros itens de Pokémon
// Adicionando ouvinte de evento para o botão "Veja mais"
```
## Conclusão

Esta documentação descreve a estrutura e a lógica por trás da construção da Pokedex. Certifique-se de que os arquivos estejam organizados corretamente e de que as dependências estejam acessíveis para garantir o funcionamento adequado da página da Pokedex.
