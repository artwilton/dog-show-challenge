document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()
})

//fetch
function fetchDogs() {
    fetch('http://localhost:3000/dogs')
        .then(response => response.json())
        .then(dogs => renderAllRows(dogs))
}

// render rows

function renderRow(dogObj) {
    const tableBody = document.querySelector('#table-body')
    const tr = document.createElement('tr')
    const tdName = document.createElement('td')
    const tdBreed = document.createElement('td')
    const tdSex = document.createElement('td')
    const tdButton = document.createElement('td')
    tdButton.innerHTML = `<button>Edit</button>`

    tdName.textContent = dogObj.name
    tdBreed.textContent = dogObj.breed
    tdSex.textContent = dogObj.sex

    tr.append(tdName, tdBreed, tdSex, tdButton)
    tableBody.append(tr)

}

function renderAllRows(dogs) {
    dogs.forEach(renderRow)

}


/* <tr><td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr> */