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
  let div = document.createElement("div")
  let deleteBtn = document.createElement("button")
  let editBtn = document.createElement("button")
  li.innerHTML = `${lego.creator} made a ${lego.color} thingy with legos!`
  // Add the li to the new div
  el.appendChild(li)
  // give the deleteBtn an id based on the id of the lego, give it some text, and setup the event listener
  div.setAttribute("id", `editFormContainer-${lego.id}`)
  el.appendChild(div)
  editBtn.textContent = "edit"
  deleteBtn.textContent = "delete"
  deleteBtn.addEventListener("click", () => {
    // call the delete function
    console.log("Is this the lego to delete?", lego.id)
    deleteLego(lego.id)
    .then( data => {
      console.log(data)
      getAndDisplayLegos()
    })
  })
  editBtn.addEventListener("click", () => {
    console.log("Edit clicked")
    let editForm = createEditForm(lego)
    addEditFormToDOM(div.id, editForm)

  })
  // Send the newly created element back to the function that puts the element into the DOM
  el.appendChild(deleteBtn)
  el.appendChild(editBtn)
  return el
}

function createEditForm(lego) {
  return `
    <input id="lego-editor-${lego.id}" name="lego__editor" type="text" value=${lego.creator} >
    <select type="text" id="lego-color-${lego.id}" value=${lego.color}>
      <option value="red">red</option>
      <option value="green">green</option>
      <option value="black">black</option>
      <option value="orange">orange</option>
    </select>
    <button id="lego-edit-btn">save lego</button>
  `
}

// Add the form to the DOM
function addEditFormToDOM(editContainer, editForm) {
  document.querySelector(`#${editContainer}`).innerHTML = editForm
}


export {listLegos}
