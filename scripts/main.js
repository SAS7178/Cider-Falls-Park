//import functions needed
import { Guests } from "./guest.js";
import { areasHTML } from "./areas.js";
import { getServices } from "./database.js";
//import { getServices } from "./services.js";





// const sectionContainer = document.querySelector("#parkServices")
// const ServicesHTML = 
// `<article class= "services"></article>`

// sectionContainer.innerHTML = ServicesHTML

const mainContainer = document.querySelector("#container")
const applicationHTML =
`<article class="main_page">
<div id = "park_Services"> Park Services: ${getServices()}</div>

    ${areasHTML()}
    <section class="aside">
        <h2>Park Guest</h2>
    ${Guests()}
    </section>
</article>`
mainContainer.innerHTML = applicationHTML