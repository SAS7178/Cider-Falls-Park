import { getServices } from "./database.js";
import { getAreaServices } from "./database.js";
//set func to var
const areaServices = getAreaServices()
const services = getServices()

export const ServicesList = () => {
    let servicesHTML = "<ul>"

    for (const service of services) {
        servicesHTML += `<li>${service.name}</li>`

        } servicesHTML += "<ul>"
    return servicesHTML
}
