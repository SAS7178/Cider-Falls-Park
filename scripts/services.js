import { getAreas, getServices } from "./database.js";
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

/////////////////////////////


// function that receives a parameter of an area object and
// returns an array with the id of each service offered at each area
export const servicesByArea = (area) =>{
    let filteredAreaServices = []
    for (const areaService of areaServices) {
        if(area.id === areaService.areaId){
            filteredAreaServices.push(areaService.servicesId)
        }
    }
    //return array of each areas serviceids
    return filteredAreaServices
}
// function that receives a parameter of a filteredServices array of serviceids from the
// servicesByArea
export const serviceNames = (filteredServices) => {
    //var to hold string list of service names
    let offeredServices = `<ul>`;
    //iterate thru array to see serviceid  
    for (const serviceId of filteredServices) {
        //then thru services to see if service.id is same 
        for (const service of services) {
            if(serviceId === service.id){
                //and if true interpolate the service name into the string
                offeredServices += `<li id=service--${service.id}">${service.name}</li>`
            }
        }
    }
    offeredServices += `</ul>`
    //return the string
    return offeredServices
}

////////////////////////////


//addeventlistener-call back func w click, and func as para 
document.addEventListener("click",(clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("service")) {
        const [,serviceId] = itemClicked.id.split("--")
       
          const areas = getAreas()
         for (const area of areas) {
        for (const service of services) {
            if (service.id === parseInt(serviceId)) {
                const assignments = servicesByArea(area)
                const areas = serviceNames(assignments)

                window.alert(`${service.name} services are available in ${areas}`)
            }
        }
    }}
})












