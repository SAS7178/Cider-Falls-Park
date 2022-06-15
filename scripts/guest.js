import { getGuest } from "./database.js";
//import { getAreas } from "./database.js";
// set func to var
const guests = getGuest()
//const areas = getAreas()

//export new Guests func to iterate guest obj and interpolate string w guest.name values for the Current Park guest (asidebar)
export const Guests = () => {
    //create let var  
    let guestHTML = `<ul>`
    // iterate through guests
    for (const guest of guests) {
        // add guest.name in HTML list <li>${guest.name}</li>
        guestHTML += `<li id="guest--${guest.id}">${guest.name}</li>`
    }
    // add </ul> at the end of the string of strings
    guestHTML += `</ul>`
    //return entire HTML string 
    return guestHTML
}

//func to iterate how many guest are in each area takes an area an a para
 export const guestsPerArea = (area) => {
    let guestsOfArea = 0
    for (const guest of guests) {
        if(guest.areaId === area.id){
           ++ guestsOfArea
    
        }
        //returns array a value equal to the count of guest in an area
    } return guestsOfArea
}
