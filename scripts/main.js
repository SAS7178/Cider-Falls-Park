//import functions needed
import { Guests } from "./guest.js";
import { areasHTML } from "./areas.js";

const mainContainer = document.querySelector("#container")

const applicationHTML =
`<h1></h1>

<article class="main_page">
    ${areasHTML()}
        
    <section class="aside">
        <h2>Park Guest</h2>
             ${Guests()}
    </section>
</article>`
mainContainer.innerHTML = applicationHTML