<template>
    <section class="section about">
        <div class="container">
            <div class="content-about">
                <img class="img-about path-y" src="~/assets/images/about-us.webp" alt="Chi è Pcasa?" />
                <div class="text-about">
                    <div class="text_wrapper scrub-y-about">
                        <h2 class="title-about">
                            In breve, siamo...
                        </h2>
                        <p class="desc-about">
                            Un azienda che ha a cuore l'ambiente e la propria Terra. Il nostro obiettivo è dare il
                            giusto valore alla Calabria, facendo riscoprire le tradizioni e i sapori che la
                            caratterizzano.
                            Aiutare il mondo nella lotta contro l'inquinamento, <NuxtLink to="/detersivi"
                                class="evidence-darker" title="Detersivi ecologici alla spina">riutilizzando le
                                bottiglie di plastica</NuxtLink> per i detersivi e tanto altro.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import gsap from 'gsap'

export default {
    name: 'TheAbout',
    mounted() {
        gsap.from('.scrub-y-about', {
            scrollTrigger: {
                trigger: '.scrub-y-about',
                start: 'start bottom',
                end: 'bottom start',
                scrub: 2,
                ease: 'power4.inOut',
            },
            stagger: 0.2,
            y: -300,
        })

        gsap.to('.path-y', {
            scrollTrigger: {
                trigger: '.path-y',
                start: 'start bottom',
                end: 'bottom center',
                scrub: 1,
                delay: 0.1,
                ease: 'power4.inOut',
            },
            stagger: 0.2,
            'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            '-webkit-clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)'
        })
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.section {
    &.about {
        color: $color-seco;
        box-shadow: 0px 0px 50px #999;
        overflow: hidden;
    }
}

.content-about {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    .img-about {
        max-width: 600px;
        display: block;
        object-fit: cover;
        object-position: center;

        pointer-events: none;

        clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
        -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
    }

    .text-about {
        display: flex;
        align-items: flex-end;

        .text_wrapper {
            padding: $ultra-size $small-size;
            background-color: $color-prim-darker-blur;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);

            .title-about {
                font-size: $max-size;
                padding-bottom: $standard-size;
                line-height: 1;
            }

            .desc-about {
                font-size: $big-size;
                line-height: 1.25;
            }
        }
    }
}

@media (min-width: $md) {
    .content-about {
        grid-template-columns: repeat(2, 1fr);

        .img-about {
            border-radius: $smallest-size;
        }

        .text-about {
            align-items: center;

            .text_wrapper {
                margin-left: -$ultra-size;
                padding: $standard-size $small-size;
                border-radius: $standard-size;

                .title-about {
                    font-size: $bigger-size;
                }

                .desc-about {
                    font-size: $standard-size;
                }
            }
        }
    }
}

@media (min-width: $lg) {
    .content-about {
        .text-about {
            .text_wrapper {
                .title-about {
                    font-size: $max-size;
                }

                .desc-about {
                    font-size: $big-size;
                }
            }
        }
    }
}
</style>