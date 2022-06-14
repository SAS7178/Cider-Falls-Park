//import functions needed
import { Guests } from "./guest.js";
//import { getGuest } from "./database.js";
//import { servicesHTML } from "./services.js";
import { areasHTML } from "./areas.js";

const mainContainer = document.querySelector("#container")

const applicationHTML =
    `<h1>Cider Falls Park</h1>
<article class="main_page">
    
    <section class="aside">
        <h2>Current Park Guest</h2>
        ${Guests()}
    </section>

    <section class = "area_info">
        <h3 class="area_title">${areasHTML()}</h3>
    
        </section>
</article>`
mainContainer.innerHTML = applicationHTML