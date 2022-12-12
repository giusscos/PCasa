<template>
    <section class="section jumbo">
        <nuxt-img preset="bodyImg" src="/img/jumbo.webp" alt="Foto jumbo" draggable="false" />
        <!-- <img src="/img/jumbo.webp" alt="Foto jumbo" draggable="false" /> -->
        <div class="black_filter"></div>
        <div class="container">
            <div class="jumbo_text">
                <div class="title_wrapper">
                    <h2 class="title">
                        Ecologia <span class="mark-red">smart</span> 
                    </h2>
                    <h3 class="subtitle">
                        Riutilizziamo la plastica in modo intelligente<br>evitando gli sprechi
                    </h3>
                    <NuxtLink to="/ecology" title="Scopri come facciamo ecologia" class="btn_cta">
                        Scopri come <RightArrow class="svg_icon" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
@import '../assets/main.css';

.section.jumbo {
    height: 100vh;
    position: relative;

    display: flex;
    align-items: center;
}

.jumbo>.container {
    margin-right: auto;
    margin-left: 1rem;
}
.black_filter{
    z-index: 5;

    background-color: black;
    opacity: 0.6;

    position: absolute;
    width: 100%;
    height: 100%;
}
.section>img {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.jumbo_text {
    position: relative;
    z-index: 10;
}

.title_wrapper {
    color: var(--pc-color-white);
}

.title {
    margin-bottom: 1rem;
    line-height: .75;
    font-size: 15vw;
    font-weight: 600;
    letter-spacing: -0.15rem;
}

.subtitle {
    margin-bottom: 0.75rem;
    position: relative;
    left: 0.2rem;
    line-height: 1;
    font-size: 5vw;
    font-weight: 500;
    letter-spacing: -0.05rem;
}

@media (min-width: 640px) {
    .title {
        font-size: 10vw;
    }

    .subtitle {
        font-size: 3vw;
    }
}

@media (min-width: 1024px) {
    .title {
        font-size: 7vw;
    }

    .subtitle {
        font-size: 2vw;
    }
}
</style>