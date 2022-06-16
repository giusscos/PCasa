const createNav = () => {
    let nav = document.getElementById("nav");

    nav.innerHTML = `
    <div class="nav-container">
        <div class="logo-container">
            <a href="https://pcasa.it">
                <img src="./assets/logo_pcasa.webp" alt="logo pcasa" title="Pcasa">
            </a>
        </div>
        <div class="menu-container">
            <ul class="menu-nav">
                <li class="menu-item">
                    <a class="menu-link capitalize" href="https://pcasa.it" title="Home">
                        home
                    </a>
                </li>
                <li class="menu-item">
                    <a class="menu-link capitalize" href="https://pcasa.sumupstore.com/" title="Negozio Online">
                        negozio online
                    </a>
                </li>
                <li class="menu-item">
                    <a class="menu-link uppercase" href="./FAQ.html" title="Risposte a Domande Frequenti">
                        faq
                    </a>
                </li>
                <li class="menu-item">
                    <a class="menu-link capitalize" href="./contatti.html" title="Contatti">
                        contatti
                    </a>
                </li>
            </ul>
        </div>
        <div class="show-menu">
            <span class="menu-button capitalize" onclick="activeMenu()">
                &#9776; men&ugrave;
            </span>
        </div>
    </div>
`;
}

const createFooter = () => {
    let footer = document.querySelector(".footer");

    footer.innerHTML = `
    <div class="root-container footer-container">
        <div class="info-container">
            <div class="location-container capitalize">
                <strong>pcasa</strong>
                via trinita' n. 9, cariati (CS), italia
            </div>
            P.IVA: IT03401820786 <br> 
            Email: <a href="mailto:rosamprimocerio@gmail.com" class="info-link" target="_blank">rosamprimocerio@gmail.com</a>   
        </div>
        <div class="info-container">
            <ul class="info-list">
                <li>
                    <a href="https://pcasa.sumupstore.com/pagina/termini-e-condizioni" class="info-link">
                        Terms & Conditions
                    </a>
                </li>
                <li>
                    <a href="https://pcasa.sumupstore.com/pagina/informativa-sulla-privacy" class="info-link">
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <a href="https://pcasa.sumupstore.com/politica-sui-cookie" class="info-link">
                        Cookie
                    </a>
                </li>
            </ul>
        </div> 
    </div>
    <div class="root-container copy-container capitalize">
        copyright &copy; tutti i diritti riservati
        <div class="author">
            Designed and Coded by <a href="https://giusscos.netlify.app" class="info-link" target="_blank">Giusscos</a>
        </div>   
        <div class="author" style="color: lightblue">
            Sito in aggiornamento - Prossimamente Versione Definitiva 
        </div>   
    </div>
    `;
}

const createComingSoon = () => {
    let main = document.querySelector(".main-soon");

    main.innerHTML = `
    <a class="link-product" href="./index.html">
        <div class="product-container" style="background-color: #000;">
            <div class="name-product">
                <h1 class="title capitalize">in arrivo</h1> 
                Tra pochi giorni sara' <strong class="capitalize">disponibile</strong>
            </div>
        </div>
    </a>
    `;
} 

createNav();
createFooter();
createComingSoon();
