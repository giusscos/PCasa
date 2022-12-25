<script setup>
const title = "Contatti - Pcasa"
const description = "Scrivici subito o raggiungici in negozio"
</script>
<template>

  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="description" />
  </Head>
  
  <main class="contacts">
    <section class="section contacts">
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
    </section>
    <section class="section contacts">
      <div class="container">
        <div class="header_section">
          <h2 class="title_section">
            Ci trovi anche in negozio
          </h2>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.8447195723334!2d16.94407371529119!3d39.49542077948283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1340f32376efe403%3A0x6043ceae7ff53e0!2sPcasa%20-%20Artigianato%20Locale%20-%20Detersivi%20alla%20Spina%20-%20Prodotti%20Tipici!5e0!3m2!1sen!2sit!4v1671992138578!5m2!1sen!2sit"
        width="1000" height="600" style="border:0;" allowfullscreen="true" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  </main>
</template>
<style>
.contacts .description_wrapper {
  justify-content: center;
}

.contacts iframe {
  width: 100%;
}

.contacts .title {
  font-weight: 400;
}
</style>