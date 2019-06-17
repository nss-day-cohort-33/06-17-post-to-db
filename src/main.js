console.log('POSTing for fun and profit');
let legoList = document.querySelector("#lego-list")

// Get the data from the db and add it to the DOM
function getLegos() {
  fetch("http://localhost:8088/legos")
  .then( legoData => legoData.json())
  .then( legoData => {
    legoData.forEach( lego => {
      legoList.innerHTML += `<li>${lego.creator} made a ${lego.color} thingy with legos!</li>`
    })
  })
}
getLegos()

document.querySelector("#lego-btn").addEventListener("click", () => {
  let creatorName = document.querySelector("#lego-creator").value
  let color = document.querySelector("#lego-color").value
  // example of calling a factory function
  let newLego = buildLegoObj(creatorName, color)
  addNewLegoCreation(newLego)
  .then( data => data.json())
  .then( dataJS => {
    console.log(dataJS.color)
    legoList.innerHTML = ""
    getLegos()
  })
})

function addNewLegoCreation(creation) {
  console.log("no refresh")
  return fetch("http://localhost:8088/legos", {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(creation)
  })
}

function updateLego(id, shape, creation) {
  fetch(`http://localhost:8088/legos/${id}`)
  .then( lego => lego.json())
  .then( lego => {
    console.log(lego)
    lego.shape = shape
    lego.creation = creation
    fetch(`http://localhost:8088/legos/${id}`, {
      method: "PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(lego)
    })
  })
}

// This is a factory function, because it returns an object
function buildLegoObj(creatorName, color) {
  return ({
    creator: creatorName,
    color: color
  })
}
