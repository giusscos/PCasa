<template>
    <section class="section cta">
        <div class="container">
            <div class="header-section">
                <h2 class="title-section">
                    Acquista i nostri prodotti <span class="evidence">online</span>
                </h2>
                <p class="desc-section">
                    Tanti prodotti acquistabili in pochi click e spediti in pochissimo tempo a casa tua!
                </p>
                <a class="link-section" href="https://pcasa.sumupstore.com/" target="_blank" title="Visita il nostro Negozio Online">Visita il Negozio Online</a>
            </div>
        </div>
    </section>
</template>
<script>
export default{
    name: 'Call2Action',
}
</script>
<style lang='scss' scoped>
@import '~/assets/css/main.scss';
.section{
    &.cta{
        color: $color-seco;
        background-color: $color-prim;
        box-shadow: 0px 0px 50px #999;

        .header-section{
            margin: 0 auto;
            align-items: center;
            text-align: center;

            .desc-section{
                padding-bottom: $big-size;
            }
            .link-section{
                position: relative;
                overflow: hidden;
                
                font-size: $big-size;
                border-radius: $smallest-size;
                border: 3px solid $color-link;
                padding: $small-size $bigger-size;

                &::before{
                    display: block;
                    content: '';

                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;

                    width: 100%;
                    height: 0;
                    border-bottom-left-radius: 200%;
                    border-bottom-right-radius: 200%;
                    background-color: $color-link;
                    mix-blend-mode: color;

                    transition: $standard-transition;
                }

                &:hover{
                    &::before{
                        height: 100%;
                        border-radius: 0;
                    }
                }
            }
        }
    }
}
</style>