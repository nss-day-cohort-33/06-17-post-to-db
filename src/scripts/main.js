console.log('POSTing for fun and profit');
import { getLegos } from "./api.js"
import { triggerListener } from "./event.js"
import { listLegos } from "./lego.js"

// get the ball rolling on page load
getLegos()
.then( (legoData) => listLegos(legoData))
triggerListener()
