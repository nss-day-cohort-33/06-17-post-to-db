import {deleteLego } from "./api.js"
import { getAndDisplayLegos } from "./helpers.js"

let legoList = document.querySelector("#lego-list")

// Add Lego data to the DOM
function listLegos(legoArr) {
  legoArr.forEach( lego => {
    legoList.appendChild(createLegoComponent(lego))
  })
}

function createLegoComponent(lego) {
  let el = document.createElement("div")
  let li = document.createElement("li")
  let btn = document.createElement("button")
  li.innerHTML = `${lego.creator} made a ${lego.color} thingy with legos!`
  // Add the li to the new div
  el.appendChild(li)
  // give the btn an id based on the id of the lego, give it some text, and setup the event listener
  btn.setAttribute("id", `${lego.id}`)
  btn.textContent = "delete"
  btn.addEventListener("click", () => {
    let id = event.target.id
    // call the delete function
    console.log("Is this the lego to delete?", id)
    deleteLego(id)
    .then( data => {
      console.log(data)
      getAndDisplayLegos()
    })
  })
  // Send the newly created element back to the function that puts the element into the DOM
  el.appendChild(btn)
  return el
}

export {listLegos}
