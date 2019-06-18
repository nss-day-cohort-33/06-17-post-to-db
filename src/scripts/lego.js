let legoList = document.querySelector("#lego-list")

// Add Lego data to the DOM
function listLegos(legoArr) {
  legoArr.forEach( lego => {
    legoList.innerHTML += createLegoComponent(lego)
  })
}

function createLegoComponent(lego) {
  return `<li>${lego.creator} made a ${lego.color} thingy with legos!</li>`
}

export {listLegos}
