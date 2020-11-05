document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()
    clickHandler()
})

//fetch
const data = {  };

function editFetch(event) {
    const id = event.target.dataset.id
    fetch(`http://localhost:3000/dogs/${id}`, {
    method: 'PATCH', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => fillEditFields(data))
}
function fetchDogs() {
    fetch('http://localhost:3000/dogs')
        .then(response => response.json())
        .then(dogs => renderAllRows(dogs))
}

// render rows
function fillEditFields(event) {
    const name = event.target.parentElement
    console.log(name)
}

function renderRow(dogObj) {
    const tableBody = document.querySelector('#table-body')
    const tr = document.createElement('tr')
    tr.className = 
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

/* <tr><td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr> */