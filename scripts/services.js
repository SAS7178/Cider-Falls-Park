import { getServices } from "./database.js";
import { getAreaServices } from "./database.js";
// set functions to vars
const areaServices = getAreaServices()
const services = getServices()


  export const guestHTML = (area) => {
    let areaServicesId = []
    //iterate areaservices
    for (const areaService of areaServices) 
    {//check area.id value to area services.areaid value
        if (area.id === areaService.areaId)
        //if same push areaService.servicesId to array
        areaServicesId.push(areaService.servicesId)
    }
    //returns array of areaservices.servicesids 
    return areaServicesId
}

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

