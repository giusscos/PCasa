<template>
    <section class="section jumbo">
        <!-- <nuxt-img preset="bodyImg" src="jumbo.webp" alt="Foto jumbo" draggable="false" /> -->
        <img src="/img/jumbo.webp" alt="Un angolo verde del nostro pianeta Terra" draggable="false" />
        <div class="black_filter"></div>
        <div class="container">
            <div class="jumbo_text">
                <div class="title_wrapper">
                    <h2 class="title">
                        Ecologia <span class="mark-link">smart</span>
                    </h2>
                    <h3 class="subtitle">
                        Riutiliziamo la plastica in modo intelligente<br>evitando gli sprechi
                    </h3>
                    <NuxtLink to="/ecology" title="Scopri come facciamo ecologia" class="btn_cta">
                        Scopri come
                        <RightArrow class="svg_icon" />
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
    margin-left: 0.5rem;
}

.black_filter {
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
    margin-bottom: 1.5rem;
    line-height: .8;
    font-size: 5rem;
    font-weight: 600;
    letter-spacing: -0.3rem;
}

.subtitle {
    margin-bottom: 0.75rem;
    position: relative;
    left: 0.2rem;
    line-height: 1;
    font-size: 1.75rem;
    font-weight: 500;
    letter-spacing: -0.05rem;
}

@media (min-width: 640px) {
    .jumbo>.container {
        margin-left: 1rem;
    }

    .title {
        font-size: 7.5rem;
    }

    .subtitle {
        font-size: 2rem;
    }
}

@media (min-width: 1024px) {
    .title {
        font-size: 8rem;
    }

    .subtitle {
        font-size: 2.5rem;
    }
}
</style>