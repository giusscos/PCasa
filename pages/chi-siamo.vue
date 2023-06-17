<script>
export default {
  setup() {
    useHead({
      title: "Chi siamo e come vediamo il futuro - Pcasa",
      meta: [
        { name: 'description', content: "Vogliamo cambiare il mondo con piccoli e semplici gesti, semplici come portare una bottiglia in plastica nel nostro negozio e riutilizzarla come contenitore per i nostri detersivi alla spina ecologici." },

        // Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://pcasa.it/chi-siamo' },
        { property: 'og:title', content: 'Chi siamo e come vediamo il futuro - Pcasa' },
        { property: 'og:description', content: "Vogliamo cambiare il mondo con piccoli e semplici gesti, semplici come portare una bottiglia in plastica nel nostro negozio e riutilizzarla come contenitore per i nostri detersivi alla spina ecologici." },
        { property: 'og:image', content: 'https://pcasa.it/pcasa-social-meta.png' },

        // Twitter 
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://pcasa.it/chi-siamo' },
        { property: 'twitter:title', content: 'Chi siamo e come vediamo il futuro - Pcasa' },
        { property: 'twitter:description', content: "Vogliamo cambiare il mondo con piccoli e semplici gesti, semplici come portare una bottiglia in plastica nel nostro negozio e riutilizzarla come contenitore per i nostri detersivi alla spina ecologici." },
        { property: 'twitter:image', content: 'https://pcasa.it/pcasa-social-meta.png' }
      ]
    })
  }
}
</script>
<template>
  <main>
    <section class="section py-20">
      <div class="container mx-auto px-4">
        <h1 class="sr-only">Chi siamo?</h1>
        <h2 class="minus_title leading-none py-8">
          Siamo un azienda ambiziosa che vuole cambiare il <span
            class="inline-block bg-pcasa-blue px-2 md:px-4 pb-2 md:pb-4 rounded-full text-pcasa-white leading-none">mondo</span>
        </h2>
        <p class="standard_paragraph leading-tight">
          Vogliamo cambiare il mondo con piccoli e semplici gesti, semplici come portare una bottiglia in plastica
          nel nostro negozio e riutilizzarla come contenitore per i nostri detersivi alla spina ecologici. Abbiamo
          iniziato proprio da loro per la semplicità con cui infinite bottiglie in plastica possono essere riutilizzate
          in modo intelligente. Nel nostro piccolo paese abbiamo subito riscontrato successo e sostegno. Oggi in
          tantissimi riutilizzano i loro contenitori più volte, migliorando la gestione della plastica.
          Abbiamo quindi deciso di provare anche online, portando i nostri prodotti, le nostre idee e le nostre conoscenze
          in tutto il mondo.<br><br>

          Abbiamo introdotto l'artigianato locale come alternativa a prodotti in plastica o non ecosostenibili.
          In questo modo sosteniamo anche i nostri artigiani locali che utilizzano ancora le tecniche utilizzate dai
          nostri
          antenati con l'aggiunta di nuove tecnologie e nuovi materiali ecosostenibili.<br><br>

          Anche il palato vuole la sua parte e in collaborazione con produttori locali siamo in grado di offrire diversi
          prodotti
          tipici locali, tra i più rinomati in Italia e nel mondo. Il nostro oro verde, o anche detto olio extra vergine
          d'oliva, è
          forse il prodotto più utilizzato nelle cucine italiane e mondiali.<br><br>

          Come azienda che promuove l'ecosostenibilità, ci impegnamo a offrire un'alternativa più ecologica ai
          prodotti tradizionali come con i classici detersivi, contribuendo a creare un mondo più pulito e sostenibile per
          tutti. 🍀
        </p>
      </div>
    </section>
  </main>
</template>
<style>
@import '~/assets/css/main.css';
</style>
