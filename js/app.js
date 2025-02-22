let count = 1

class Character {
    constructor(CharacterName, role, power,) {
        this.info = {
            id: count,
            CharacterName,
            role,
            power
        }
    }
    getDescription(CharacterName, role, power) {
        return `My name is ${CharacterName} my role is ${role} And my super powers is ${power}.`
    }
}

const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let obj = {}
    obj = { ...getInfo()}
    const character = new Character(obj.CharacterName, obj.role, obj.power)
    count++
    buildCard(character.info, character.getDescription)
})

const getInfo =()=> {
    const CharacterName = document.getElementById('characterName').value
    const role = document.getElementById('role').value
    const power = document.querySelector('input[name="power"]:checked').value

    return { CharacterName, role, power, }
}

const buildCard = (obj, func) => {
    const row = document.getElementById('cardRow')

    const column = document.createElement('div')
    column.classList.add('col')
    
    const card = document.createElement('div')
    card.classList.add('card', 'h-100')

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const CharacterName = document.createElement('h2')
    CharacterName.classList.add('card-text', 'text-capitalize')
    CharacterName.innerText = obj.CharacterName

    const role = document.createElement('p')
    role.classList.add('card-text', 'text-capitalize')
    role.innerText = `Role: ${obj.role}`

    const power = document.createElement('p')
    power.classList.add('card-text', 'text-capitalize')
    power.innerText = `Power: ${obj.power}`

    const description = document.createElement('p')
    description.classList.add('card-text', 'fst-italic')
    description.innerText = func(obj.CharacterName, obj.role, obj.power)

    cardBody.appendChild(CharacterName)
    cardBody.appendChild(role)
    cardBody.appendChild(power)
    cardBody.append(description)

    card.appendChild(cardBody)

    column.appendChild(card)

    row.appendChild(column)


}