import { getGuest } from "./database.js";
//import { getAreas } from "./database.js";
// set func to var
const guests = getGuest()
//const areas = getAreas()

//export new Guests func to iterate guest obj and interpolate string w guest.name values  
export const Guests = () => {
    //create let var  
    let guestHTML = `<ul>`
    // iterate through walkers
    for (const guest of guests) {
        // add walker.name in HTML list <li>${walker.name}</li>
        guestHTML += `<li id="guest--${guest.id}">${guest.name}</li>`
    }
    // add </ul> at the end of the string of strings
    guestHTML += `</ul>`
    //return entire HTML string 
    return guestHTML
}

 const guestAreaArray = () => {
    let areaOfGuests = []
    for (const guest of guests) {
        if(guest.areaId){
            areaOfGuests.push(guest.areaId)
    
        }
    } return areaOfGuests
}
