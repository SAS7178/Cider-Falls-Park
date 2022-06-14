import { getServices } from "./database.js";
import { getAreaServices } from "./database.js";
import { getAreas } from "./database.js";
//set func to var
const area = getAreas()
const areaServices = getAreaServices()
const services = getServices()


  export const guestHTML = (area) => {
    let areaServicesId = []
    //check if walker.id is in walkercity.walkerid
    for (const areaService of areaServices) 
    {
        if (area.id === areaService.areaId)
        areaServicesId.push(areaService.servicesId)
    }
    //returns array of areaservices.service.ids that are = to the area.id
    return areaServicesId
}
// const guestHTML = guestHTML()

// func to create 
export const servicesHTML = (filteredServices) => {
    let serviceHTML = "<ul>"
//iterates and give me a list of service names
    for (const servicesId of filteredServices) {
        for (const service of areaServices) {
            if (servicesId === service.id) {
                serviceHTML += `<li class = "services">${service.name}</li>`
            }
        } serviceHTML += `</ul>`
    }
    // returns string list of service names
    return serviceHTML
}


// function that receives a parameter of an area object and
// returns an array with the id of each service offered
export const servicesByArea = (area) =>{
    let filteredAreaServices = []
    for (const areaService of areaServices) {
        if(area.id === areaService.areaId){
            filteredAreaServices.push(areaService.servicesId)
        }
    }
    return filteredAreaServices
}
// function that receives a parameter of a filtered services array from the
// servicesByArea function and returns an html string of those services
export const serviceNames = (filteredServices) =>{
    let offeredServices = `<ul>`;
    for (const serviceId of filteredServices) {
        for (const service of services) {
            if(serviceId === service.id){
                offeredServices += `<li class="service--${service.id}">${service.name}</li>`
            }
        }
    }
    offeredServices += `</ul>`
    return offeredServices
}

