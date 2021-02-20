<template>
  <div class="konteiner">
    <kabe-laud/>
  </div>
</template>

<script>
import OlenKomponent from "../components/KabeNupp";
import KabeLaud from "@/components/KabeLaud";
import KabeNupp from "@/components/KabeNupp";

export default {
  name: "kabe",
  components: {KabeNupp, KabeLaud, OlenKomponent},
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