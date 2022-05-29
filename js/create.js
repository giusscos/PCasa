const createNav = () => {
    let nav = document.querySelector(".navigation");

    nav.innerHTML = `
    <div class="nav-container">
        <div class="logo-container">
            <a href="./index.html">
                <img src="./assets/logo_pcasa.png" alt="logo pcasa" title="Pcasa">
            </a>
        </div>
        <div class="menu-container">
            <ul class="menu-nav">
                <li class="menu-item">
                    <a class="menu-link capitalize" href="./index.html" title="Home">
                        home
                    </a>
                </li>
                <li class="menu-item">
                    <a class="menu-link capitalize" href="./store.html" title="Negozio Online">
                        store
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
                &#9776; menu
            </span>
        </div>
    </div>
`;
}

const createFooter = () => {
    let footer = document.querySelector(".footer");

    footer.innerHTML = `
    <div class="footer-container">
        <div class="info-container">
            <div class="location-container capitalize">
                <strong>pcasa</strong>
                via trinita', 9, cariati (CS), italia
            </div>
            P.IVA: XX00000000 <br>
            Email: esempio@esempio.ese   
        </div>
        <div class="info-container">
            <ul class="info-list">
                <li>
                    <a href="#" class="info-link">
                        Terms & Conditions
                    </a>
                </li>
                <li>
                    <a href="#" class="info-link">
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <a href="#" class="info-link">
                        Cookie
                    </a>
                </li>
            </ul>
        </div> 
    </div>
    <div class="copy-container capitalize">
        copyright &copy; tutti i diritti riservati
        <div class="author">
            Designed and Coded by <a class="info-link" href="https://giusscos.netlify.app" target="_blank">Giusscos</a>
        </div>   
    </div>
    `;
}

const createComingSoon = () => {
    let main = document.querySelector(".main");

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