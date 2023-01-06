<template>
    <footer class="main_footer">
        <div class="container">
            <div class="info_wrapper">
                <Logo class="svg_logo-footer" />
                <div class="info">
                    <p>P.IVA IT03401820786</p>
                    <p>Via Trinitá N. 9, Cariati (CS), Italia</p>
                </div>
            </div>
            <TheNavFooter />
            <div class="credits">
                <p>
                    Progettato e Sviluppato da <a target="_blank" href="https://giuseppecosenza.it"
                        title="Visita il sito di Giusscos">Giusscos</a> in Italia
                </p>
                <span>
                    Copyright © 2023. Tutti i diritti riservati.
                </span>
            </div>
        </div>
    </footer>
</template>
<style>
@import '../assets/main.css';

.main_footer {
    padding: 3rem 0 2rem;
    color: var(--pc-color-white);
    background-color: var(--pc-color-prim);
}

.svg_logo-footer {
    width: 12rem;
    height: 6rem;
}

.info {
    padding: 0.75rem 0.5rem;
    font-size: 1.25rem;
    font-weight: 500;
}

.info>* {
    line-height: 1;
}

.credits {
    font-size: 1.25rem;
    padding: 3rem 0 0;
    text-align: center;
}

.credits>p>a {
    font-weight: 600;
}

.credits>p>a:hover {
    text-decoration: underline;
}
</style>