<template>
    <footer class="main_footer">
        <div class="container">
            <div>
                <TheLogo />
                <div class="brand-info">
                    <div>
                        P.IVA IT03401820786
                    </div>
                    <div>
                        Via Trinit&aacute; N. 9, Cariati (CS), Italia
                    </div>
                </div>
            </div>
            <div class="footer-nav">
                <FooterList :info="link" v-for="(link, i) in footerListLinks" :key="i" />
            </div>
        </div>
        <div class="last">
            <div class="mention">
                Progettato e Sviluppato da <a href="https://giusscostest.software" target="_blank"
                    title="Visita la pagina di giusscos">Giusscos</a> in Italia
            </div>
            <div class="copyr">
                Copyright &copy; 2022. Tutti i diritti riservati.
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'TheFooter',
    data() {
        return {
            footerListLinks: [
                {
                    'title': 'Prodotti',
                    'links': [
                        {
                            'text': 'Detersivi alla Spina Ecologici',
                            'route': '/detersivi',
                            'link': '',
                        },
                        {
                            'text': 'Artigianato Locale',
                            'route': '/artigianato',
                            'link': '',
                        },
                        {
                            'text': 'Prodotti Tipici Calabresi',
                            'route': '/prodotti-tipici',
                            'link': '',
                        },
                    ],
                },
                {
                    'title': 'La Nostra Storia',
                    'links': [
                        {
                            'text': 'La Sfida',
                            'route': '',
                            'link': '#',
                        },
                        {
                            'text': 'Innovazioni',
                            'route': '',
                            'link': '#',
                        },
                        {
                            'text': 'Investimenti',
                            'route': '',
                            'link': '#',
                        },
                    ],
                },
                {
                    'title': 'Contatti e Social',
                    'links': [
                        {
                            'text': 'Inviaci un Email',
                            'route': '',
                            'link': 'mailto:rosamprimocerio@gmail.com',
                        },
                        {
                            'text': 'Instagram',
                            'route': '',
                            'link': '#',
                        },
                        {
                            'text': 'Facebook',
                            'route': '',
                            'link': 'https://www.facebook.com/PcasaDetersiviProdottiTipiciArtigianato',
                        },
                    ],
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.main_footer {
    padding: $ultra-size 0;
    color: $color-seco;
    background-color: $color-prim-darker;

    .footer-nav {
        display: grid;
        row-gap: $standard-size;
        column-gap: $bigger-size;
        grid-template-columns: repeat(1, 1fr);
    }
}

.last {
    padding: $ultra-size $standard-size $smallest-size;
    display: flex;
    gap: $smallest-size;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-size: $standard-size;

    .mention {
        a {
            color: $color-link;
            text-decoration: 2px underline;
        }
    }
}

@media(min-width: $md) {
    .main_footer {
        .footer-nav {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}

@media(min-width: $lg) {
    .main_footer {
        .footer-nav {
            grid-template-columns: repeat(3, 1fr);
        }
    }
}
</style>