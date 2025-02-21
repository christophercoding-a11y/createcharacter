let count = 1

class characters {
    constructor(characterName, role, power,) {
        this.character = {
            id: '',
            CharacterName: '',
            role: '',
            powers: '',
        }
    }
}

const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault
    console.log('clicked')
})

const getCharacters =()=> {
    const CharacterName = document.getElementById('CharacterName').value
    const role = document.getElementById('role')
    const power = document.getElementById('power')
}