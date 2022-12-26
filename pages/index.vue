<template>
  <main>
    <Jumbo />
    <SectionHook />
    <div class="section no_overflow">
      <ClipPath />
    </div>
    <MainProd />
    <div class="section no_overflow">
      <ClipPathReverse />
    </div>
    <AboutUs />
  </main>
</template>
<style scoped>
.section.no_overflow {
  padding: 20rem 0;
  min-height: 120vh;
}
</style>
