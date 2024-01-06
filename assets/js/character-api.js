const characterApi = {}

function convertCharactersAPIDetailToCharacter(characterDetail){
    const character = new CharacterData();
    character.name = characterDetail.name;
    character.id = characterDetail.id;
    character.status = characterDetail.status;
    character.species = characterDetail.species;
    character.gender = characterDetail.gender;
    character.origin = characterDetail.origin.name;
    character.image = characterDetail.image;

    return character;
}

/*characterApi.getCharacterDetail = (character) => {
    return fetch(character.url)
        .then((response) => response.json())
        .then(convertCharactersAPIDetailToCharacter)
}

characterApi.getCharacters = (limit = 10) =>{
    for (let index = 1; index <= limit; index++) {
        const url = `https://rickandmortyapi.com/api/character/${index}`;
    
        return fetch(url)
            .then((response) => response.json())
            .then(convertCharactersAPIDetailToCharacter)
            .then((jsonBody) => jsonBody.results)
            .then((jsonBody) => {
                const character = jsonBody;
                const characterList = document.getElementById('characterList');
                console.log(character)
                characterList.innerHTML += convertCharacterToLi(character);
            })
    }
}*/