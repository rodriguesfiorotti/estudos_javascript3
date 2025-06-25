function addPlayer() {
    const playersSection = document.getElementById('players')
    const playerPositionField = document.getElementById('playerPosition')
    const playerNameField = document.getElementById('playerName')
    const playerNumberField = document.getElementById('playerNumber')

    if (playerPositionField.value === '' || playerNameField.value === '' || playerNumberField.value === '') {
        alert('Preencha todos os campos corretamente!')
        return
    }

    if (!confirm("Confirma a escalação?")) {
        return
    }

    const ul = document.createElement('ul')

    const h3 = document.createElement('h3')
    h3.innerText = "Jogador " + (playersSection.childElementCount + 1)

    const playerPositionLi = document.createElement('li')
    playerPositionLi.innerText = "Posição: " + playerPositionField.value

    const playerNameLi = document.createElement('li')
    playerNameLi.innerText = "Nome: " + playerNameField.value

    const playerNumberLi = document.createElement('li')
    playerNumberLi.innerText = "Número: " + playerNumberField.value
    
    ul.id = playerNumberField.value
    
    ul.append(h3, playerPositionLi, playerNameLi, playerNumberLi)
    playersSection.appendChild(ul)

    playerPositionField.value = ''
    playerNameField.value = ''
    playerNumberField.value = ''
}

function removePlayer() {
    const playerDeleteNumberField = document.getElementById('playerDeleteNumber')

    if (playerDeleteNumberField.value === '') {
        alert("Informe um Número para ser excluído!")
        return
    }

    const playersSection = document.getElementById('players')
    const ul = document.getElementById(playerDeleteNumberField.value)

    if (ul !== null) {
        playersSection.removeChild(ul)
    } else {
        alert("Número não encontrado na lista!")
    }

    playerDeleteNumberField.value = ''
}