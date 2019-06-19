import { addNewLegoCreation } from "./api.js"

// event listener
function triggerListener() {
  document.querySelector("#lego-btn").addEventListener("click", () => {
    let creatorName = document.querySelector("#lego-creator").value
    let color = document.querySelector("#lego-color").value
    // example of calling a factory function
    let newLego = buildLegoObj(creatorName, color)
    addNewLegoCreation(newLego)
    .then( data => data.json())
    .then( dataJS => {
      legoList.innerHTML = ""
      getLegos()
      .then( legoData => listLegos(legoData))
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

export {triggerListener}
