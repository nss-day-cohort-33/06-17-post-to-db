// Get the data from the db
function getLegos() {
  return fetch("http://localhost:8088/legos")
  .then( legoData => legoData.json())
}

function addNewLegoCreation(creation) {
  return fetch("http://localhost:8088/legos", {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(creation)
  })
}

function deleteLego(id) {
  return fetch(`http://localhost:8088/legos/${id}`, {
    method: "DELETE",
    headers:{
      "Content-Type": "application/json"
    }
  })
}

// Let's ignore this one for now, then come back to it in another chapter
function updateLego(id, updatedLego) {
  fetch(`http://localhost:8088/legos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedLego)
  })
}


export {getLegos, addNewLegoCreation, deleteLego, updateLego}
