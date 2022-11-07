<template>
    <section class="section about">
        <div class="container">
            <div class="content-about">
                <nuxt-img class="img-about path-y" src="/images/noctua-nh-d15s-4.jpeg" alt="In breve ecco chi è Pcasa"
                    preset="fullOptimize" />
                <div class="text-about">
                    <div class="text_wrapper scrub-y-rev">
                        <h2 class="title-about">
                            In breve, siamo...
                        </h2>
                        <p class="desc-about">
                            Un azienda che ha a cuore l'ambiente e la propria Terra. Il nostro obiettivo è dare il
                            giusto valore alla Calabria, facendo riscoprire le tradizioni e i sapori che la
                            caratterizzano.
                            Aiutare il mondo nella lotta contro l'inquinamento, <NuxtLink to="/detersivi"
                                class="evidence-darker">riutilizzando le bottiglie di plastica</NuxtLink> per i detersivi e tanto altro.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'TheAbout',
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
        display: block;
        object-fit: cover;
        object-position: center;

        -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
        clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);

        pointer-events: none;
    }

    .text-about {
        display: flex;
        align-items: flex-end;

        .text_wrapper {
            padding: $ultra-size $small-size;
            background-color: $color-prim-darker-blur;
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);

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