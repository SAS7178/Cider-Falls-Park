// function that receives a parameter of an area object and
// returns an array with the id of each service offered
import { getAreas } from "./database.js";
import { guestsPerArea } from "./guest.js";
import { servicesByArea } from "./services.js";
import { serviceNames } from "./services.js";

const areas = getAreas()


// func that iterate areas array and returns location names in a list
export const areasList = () => {
    let areasHTML = "<ul>"

    for (const area of areas) {
        areasHTML += `<li>${area.location}</li>`
    } areasHTML += "<ul>"
    return areasHTML
}

// Event Listener that window alerts a message containing the number of guests in a given area
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("area")) {
            const [,areaId] = itemClicked.id.split("--")

            for (const area of areas) {
                if (area.id === parseInt(areaId)) {
                    const currentGuests = guestsPerArea(area)           
                    window.alert(`There are ${currentGuests} guests in ${area.name}.`)
                }
            }
        }
    }
)

// Function that creates an html string for each area and calls the functions
//  which figure out the services offered in area.

export const areasHTML = () =>{
    let htmlString = `<div class="areaList">`
    for (const area of areas) {
        htmlString += `<article class="area__card"><h2 id=area--${area.id}>${area.name}</h2>`
        const filteredAreaServices = servicesByArea(area)
        const servicesHTML = serviceNames(filteredAreaServices)
        htmlString += servicesHTML
        htmlString += `</article>`
    }
    htmlString += `</div>`
    return htmlString
}


