<template>
    <section class="section hook">
        <div class="container">
            <div class="header_section">
                <h2 class="title_section">
                    Fai <span class="mark-seco-darker">ecologia</span> anche tu
                </h2>
                <div class="description_wrapper ">
                    <div class="img_wrapper hook">
                        <!-- <nuxt-img preset="bodyImg" width="400" src="hook.webp" alt="Fare ecologia" /> -->
                        <img width="400" src="/img/ecologia-semplice.webp"
                            alt="Inizia a fare ecologia portando dei contenitori nel nostro negozio">
                    </div>
                    <div class="text_wrapper">
                        <p class="desc_text">
                            Fare ecologia &eacute; semplice!<br>Con poche abitudini puoi dare una mano a te stesso, al
                            tuo portafogli e al tuo Pianeta 🌍
                        </p>
                        <NuxtLink class="btn_cta btn_cta-text" to="/ecologia" title="Scopri come fare ecologia">
                            Scopri come
                            <RightArrow class="svg_icon" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
.title_section {
    font-size: 5rem;
    font-weight: 600;
    line-height: .75;
    width: 60%;
    letter-spacing: -0.2rem;
    text-transform: capitalize;
}

.description_wrapper {
    gap: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
}

.text_wrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.desc_text {
    font-size: 3.5rem;
    font-weight: 400;
    line-height: 1;
}

@media (min-width: 1024px) {
    .img_wrapper {
        flex-basis: calc((100% * 6) / 12);
    }

    .text_wrapper {
        flex-basis: calc((100% * 5) / 12);
    }

    .title_section {
        font-size: 7rem;
        line-height: .8;
    }

    .desc_text {
        font-size: 5rem;
    }
}
</style>