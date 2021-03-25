<template>
  <div class="konteiner">
    <Header></Header>
    <kabe-laud/>
    <Footer></Footer>

  </div>
</template>

<script>
import KabeLaud from "@/components/KabeLaud";
import KabeNupp from "@/components/KabeNupp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default {
  name: "kabe",
  components: {Header, KabeNupp, KabeLaud, Footer},
}

</script>

<style scoped>
.konteiner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>