const dogForm = document.querySelector("#dog-form")
const tableBody = document.querySelector('#table-body')
let currentDogId

document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()
    clickHandler()
    formHandler()
})

//fetch

function editFetch(dogObj) {
    fetch(`http://localhost:3000/dogs/${dogObj.id}`, {
    method: 'PATCH', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(dogObj),
    })
    fetchDogs()
    // .then(data => fillEditFields(data))
}
function fetchDogs() {
    fetch('http://localhost:3000/dogs')
        .then(response => response.json())
        .then(dogs => renderAllRows(dogs))
}

// render rows
function fillEditFields(event) {
    const row = event.target.parentElement.closest('tr')
    const name = row.querySelector('.dog-name').textContent
    const breed = row.querySelector('.dog-breed').textContent
    const sex = row.querySelector('.dog-sex').textContent
    currentDogId = event.target.dataset.id

    dogForm.name.value = name
    dogForm.breed.value = breed
    dogForm.sex.value = sex
}

function renderRow(dogObj) {
    const tr = document.createElement('tr')
    const tdName = document.createElement('td')
    tdName.className = "dog-name"
    const tdBreed = document.createElement('td')
    tdBreed.className = "dog-breed"
    const tdSex = document.createElement('td')
    tdSex.className = "dog-sex"
    const tdButton = document.createElement('td')
    const button = document.createElement('button')
    button.textContent = "Edit Dog"
    button.dataset.id = dogObj.id
    button.className = "editBtn"
    tdButton.append(button)

    tdName.textContent = dogObj.name
    tdBreed.textContent = dogObj.breed
    tdSex.textContent = dogObj.sex

    tr.append(tdName, tdBreed, tdSex, tdButton)
    tableBody.append(tr)

}

function renderAllRows(dogs) {
    tableBody.innerHTML = ""
    dogs.forEach(renderRow)

}

// event handler
function clickHandler() {
    document.addEventListener("click", e => {
        if(e.target.className === "editBtn") {
            fillEditFields(e)
        }       
    })
}

function formHandler() {
    document.addEventListener('submit', e => {
        e.preventDefault()
        dogObj = {
            name: e.target.name.value,
            breed: e.target.breed.value,
            sex: e.target.sex.value,
            id: currentDogId
        }
        console.log(dogObj)
    editFetch(dogObj)
    })
}