let offset = 1
let limit = 10;
const loadMoreButton = document.getElementById('loadmore')

function loadCharacters(offset, limit){
    for (let index = offset; index <= limit; index++) {
    const url = `https://rickandmortyapi.com/api/character/${index}`;

    fetch(url)
        .then((response) => response.json())
        .then(convertCharactersAPIDetailToCharacter)
        .then((jsonBody) => {
            const character = jsonBody;
            const characterList = document.getElementById('characterList');
            characterList.innerHTML += convertCharacterToHTML(character);
        })
    }
}



function convertCharacterToHTML(character){
    return `
        <li class="character ${character.status} ${character.species}">
            <span class="number">#${character.id}</span>
            <span class="name">${character.name}</span>
            <div class="details">
                <ol class="types">
                    <div class="lines">
                    <li class="type">${character.status}</li>
                    <li class="type ${character.species}">${character.species}</li>
                    </div>
                    <div class="lines">
                    <li class="type">${character.gender}</li>
                    <li class="type">${character.origin.name}</li>
                    </div>
                </ol>
            <img src="${character.image}" alt="${character.name} foto">      
            </div>
        </li>`
}

loadCharacters(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += 10
    limit += 10
    loadCharacters(offset, limit)
})

/*function convertCharacterToLi(character){
    return `
    <li class="character">
        <span class="number">#${character.id}</span>
        <span class="name">${character.name}</span>
        <div class="details">
            <ol class="types">
                <div class="lines">
                <li class="type">${character.status}</li>
                <li class="type">${character.species}</li>
                </div>
                <div class="lines">
                <li class="type">${character.gender}</li>
                <li class="type">${character.origin.name}</li>
                </div>
            </ol>
        <img src="${character.image}" alt="${character.name} foto">      
        </div>
    </li>`
}

const characterList = document.getElementById('characterList')

characterApi.getCharacters().then((characters = []) => {
    const newHtml = characters
    characterList.innerHTML = newHtml
})*/
