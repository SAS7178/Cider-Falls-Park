//import functions needed
import { Guests } from "./guest.js";
import { areasHTML } from "./areas.js";
import { Services } from "./services.js";




const mainContainer = document.querySelector("#container")
const applicationHTML =
`<article class="main_page">
    <section class = "top_main">  
        <div id = "Park_Services">Park Services:</div>
        <div>${Services()}</div>
    <article class = "center"><section class= "tables">${areasHTML()}</section>
            <section class="aside">
            <h2>Park Guest</h2>
                ${Guests()}
            </section>
        </article>
</article>`
mainContainer.innerHTML = applicationHTML