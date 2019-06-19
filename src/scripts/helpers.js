import { getLegos } from "./api.js"
import { listLegos } from "./lego.js"

let legoList = document.querySelector("#lego-list")

function getAndDisplayLegos() {
  legoList.innerHTML = ""
  getLegos()
  .then( legoData => listLegos(legoData))
}

export { getAndDisplayLegos }
