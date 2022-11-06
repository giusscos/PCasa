<template>
    <section class="section about">
        <div class="container">
            <div class="content-about">
                <img class="img-about path-y" src="https://picsum.photos/700/1200" alt="">
                <div class="text-about">
                    <div class="text_wrapper scrub-y-rev">
                        <h2 class="title-about">
                            In breve, siamo...
                        </h2>
                        <p class="desc-about">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel dignissimos, error
                            maxime
                            blanditiis
                            non! Quidem, praesentium fugiat ipsa error perferendis necessitatibus dicta maiores repellat
                            exercitationem. Consequatur ipsa culpa qui?
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
    }
}

.content-about {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    .img-about {
        height: 100%;
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