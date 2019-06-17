console.log('POSTing for fun and profit');

document.querySelector("#lego-btn").addEventListener("click", () => {
  let creatorName = document.querySelector("#lego-creator").value
  let color = document.querySelector("#lego-color").value
  let newLego = {
    creator: creatorName,
    color: color
  }
  addNewLegoCreation(newLego)
})

function addNewLegoCreation(creation) {
  fetch("http://localhost:8088/legos", {
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
