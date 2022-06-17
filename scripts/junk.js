
// func to create 
export const servicesHTML = () => {
    let serviceHTML = "<ul>"
//iterates and give me a list of service names
     for (const servicesId of filteredServices) {
        for (const areaservice of areaServices) {
            if (servicesId === areaservice.areaId) {
                serviceHTML += `<li class = "services">${services.name}</li>`
            }
        } serviceHTML += 
        }
    // returns string list of service names
    return serviceHTML
}


