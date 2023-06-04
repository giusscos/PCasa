<template>
  <main class="ecology">
    <section class="section jumbo">
      <div class="container">
        <div class="jumbo_text">
          <div class="title_wrapper">
            <h2 class="title">
              Ecologia <span class="mark-link">smart</span>
            </h2>
            <ul class="subtitle">
              <li>
                Riutiliziamo la plastica.
              </li>
              <li>
                Evitiamo gli sprechi.
              </li>
              <li>
                Condividiamo.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="section content">
      <div class="container">
        <div class="header_section">
          <h2 class="title_section">
            Fai <span class="mark-seco-darker">ecologia</span> anche tu
          </h2>
          <div class="description_wrapper ">
            <div class="img_wrapper hook">
              <!-- <nuxt-img preset="bodyImg" width="400" src="hook.webp" alt="Fare ecologia" /> -->
              <!-- <img width="400" src="/img/jumbo.webp"
                alt="Inizia a fare ecologia portando dei contenitori nel nostro negozio"> -->
            </div>
            <div class="text_wrapper">
              <p class="desc_text">
                L'ecologia è l'insieme delle scienze che studiano gli organismi viventi, le loro relazioni con
                l'ambiente e con gli altri organismi e l'impatto che l'uomo ha sull'ecosistema. Fare ecologia significa
                adottare comportamenti e scelte consapevoli per ridurre l'impatto ambientale e preservare le risorse
                naturali.<br>

                L'adozione di pratiche ecologiche può avere un impatto positivo sulla qualità della vita delle persone,
                migliorando l'aria e l'acqua, riducendo i rifiuti e proteggendo la biodiversità. Inoltre, può anche
                aiutare a risparmiare denaro e a creare posti di lavoro verdi.<br>

                Il negozio che vende detersivi ecologici e alla spina, offrendo contenitori riutilizzabili, contribuisce
                a ridurre l'impatto ambientale legato all'utilizzo di plastica monouso e aiuta a promuovere un consumo
                più sostenibile. In questo modo, il negozio si impegna a offrire un'alternativa più ecologica ai
                prodotti tradizionali, contribuendo a creare un mondo più pulito e sostenibile per tutti.<br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@import '../assets/main.css';

.section.jumbo {
  position: relative;

  display: flex;
  align-items: center;
}

.jumbo>.container {
  margin-right: auto;
  margin-left: 0.5rem;
}

.jumbo_text {
  position: relative;
  z-index: 10;
}

.title_wrapper {
  color: var(--pc-color-black);
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

.title_section {
  font-size: 5rem;
  font-weight: 600;
  line-height: .75;
  width: 60%;
  letter-spacing: -0.2rem;
  margin-bottom: 0;
  text-transform: capitalize;
}

.description_wrapper {
  gap: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.img_wrapper {
  aspect-ratio: 16/9;
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
