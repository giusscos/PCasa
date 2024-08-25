<script>
export default {
  setup() {
    useHead({
      title: "Contatti - Pcasa",
      meta: [
        { name: 'description', content: "Contattaci per qualsiasi informazione o raggiungici direttamente in negozio, ti aspettiamo" },

        // Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://pcasa.it/contatti' },
        { property: 'og:title', content: 'Contatti - Pcasa' },
        { property: 'og:description', content: "Contattaci per qualsiasi informazione o raggiungici direttamente in negozio, ti aspettiamo" },
        { property: 'og:image', content: 'https://pcasa.it/pcasa-social-meta.png' },

        // Twitter 
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://pcasa.it/contatti' },
        { property: 'twitter:title', content: 'Contatti - Pcasa' },
        { property: 'twitter:description', content: "Contattaci per qualsiasi informazione o raggiungici direttamente in negozio, ti aspettiamo" },
        { property: 'twitter:image', content: 'https://pcasa.it/pcasa-social-meta.png' }
      ]
    })
  }
}
</script>
<template>
    <!-- <section class="section contacts">
      <div class="container">
        <div class="header_section">
          <h2 class="title_section">
            Scrivici subito
          </h2>
          <div class="description_wrapper ">
            <a href="mailto:info@pcasa.it" class="title" title="Scrivi una email a pcasa">
              info@pcasa.it
            </a>
          </div>
        </div>
      </div>
    </section> -->
    <section class="section pt-20">
      <div class="container mx-auto h-full px-4 flex items-center py-10">
        <h2 class="title-standard leading-none">
          Ci trovi anche in negozio
        </h2>
      </div>
      <iframe class="w-full h-[600px] border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.8447195723334!2d16.94407371529119!3d39.49542077948283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1340f32376efe403%3A0x6043ceae7ff53e0!2sPcasa%20-%20Artigianato%20Locale%20-%20Detersivi%20alla%20Spina%20-%20Prodotti%20Tipici!5e0!3m2!1sen!2sit!4v1671992138578!5m2!1sen!2sit"
        allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
</template>
<style>
@import '~/assets/css/main.css';
</style>