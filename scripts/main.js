//import functions needed
import { Guests } from "./guest.js";
// import { getGuest } from "./database.js";
// const guests = getGuest()
 import { ServicesList } from "./services.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls Park</h1>
<article class="details">
    <section class="aside">
        <h2>Current Park Guest</h2>
             ${Guests()}
    </section>
    <section class="">

    <article class = "area_info">
        <h3 class="area_title">Northeast</h3>
        <div>${ServicesList()}</div>

        <h3 class="area_title">Northern</h3>
        <div>services</div>
        
        <h3 class="area_title">Northwest</h3>
        <div>services</div>
        
        <h3 class="area_title">Southeast</h3>
        <div>services</div>
        
        <h3 class="area_title">Southern</h3>
        <div>services</div>
        
        <h3 class="area_title">Southwest</h3>
        <div>services</div>
       </section>
    </article>
    <section class="">
        <h2>hello</h2>
    
    </section>
</article>
<article class="">
    <h2>C</h2>
</article>
`


mainContainer.innerHTML = applicationHTML