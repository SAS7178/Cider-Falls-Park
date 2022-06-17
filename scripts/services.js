import { areasHTML } from "./areas.js";
import { getAreas, getServices } from "./database.js";
import { getAreaServices } from "./database.js";


// set functions to vars
const areaServices = getAreaServices()
const services = getServices()
const areas = getAreas()

export const guestHTML = (area) => {
    let areaServicesId = []
    //iterate areaservices
    for (const areaService of areaServices) {//check area.id value to area services.areaid value
        if (area.id === areaService.areaId)
            //if same push areaService.servicesId to array
            areaServicesId.push(areaService.servicesId)
    }
    //returns array of areaservices.servicesids 
    return areaServicesId
}

// services at top of page with addeventlistener
export const Services = () => {
    let servicesHTML = `<ul id = "services">`
    for (const service of services) {
        servicesHTML += `<li id = "services--${service.id}">${service.name}</li>`
    }
    servicesHTML += "</ul>"
    return servicesHTML

}
////////////////////////////

export const serviceNames = (filteredServices) => {
    //var to hold string list of service names
    let offeredServices = "<ul>";
    //iterate thru array to see serviceid  
    for (const serviceobj of filteredServices) {
        //then thru services to see if service.id is same 
        for (const service of services) {
            if (serviceobj.servicesId === service.id) {
                //and if true interpolate the service name into the string
                offeredServices += `<li id="services--${service.id}">${service.name}</li>`
            }
        }
    }
    offeredServices += "</ul>"
    //return the string
    return offeredServices
}

// function that receives a parameter of an area object and
// returns an array with the id of each service offered at each area
export const servicesByArea = (areaObj) => {
    const filteredAreaServices = []
    for (const areaService of areaServices) {
        if (areaObj.id === areaService.areaId) {
            filteredAreaServices.push(areaService)
        }
    }
    return filteredAreaServices

    //return array of each areas serviceids
}


////////////////////////////

const servicesHTML = (filteredareaserviceObjs) => {
   let HTMLString = ``
    for (const areaService of filteredareaserviceObjs) {
        for (const area of areas) {
          if (areaService.areaId === area.id) {
             HTMLString += `<div class="services"><h2 id=services--${area.id}> ${area.name}</h2>`
        }} 
        HTMLString += `</div>`
        return HTMLString
    }
}

const areaMatcher = (filteredArray, serviceobj, areaObj) => {
    let areaNames = ""
    for (const filterObj of filteredArray) {
    if (filterObj.servicesId === serviceobj.id) {
        areaNames += `${areaObj.name}`
        }
    }   return areaNames
}

//addeventlistener-call back func w click, and func as para 
document.addEventListener("click", 
(clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("services")) {
        const [, serviceId] = itemClicked.id.split("--")
            let filteredArea = ""
        for (const service of services) {
            if (service.id === parseInt(serviceId)) {
                for (const area of areas) {
                    const assignments = servicesByArea(area)
                    // iterate thru assignments and return the correct window alert
                    //for which service is clicked
                     filteredArea += areaMatcher(assignments, service, area)
                    
                }
                window.alert(`${service.name} services are available in ${filteredArea}`) 
                
            }
            
        }
    }
})












