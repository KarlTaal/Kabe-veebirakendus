<template>
  <div class="konteiner">
    <kabe-laud/>
  </div>
</template>

<script>
import KabeLaud from "@/components/KabeLaud";
import KabeNupp from "@/components/KabeNupp";

export default {
  name: "kabe",
  components: {KabeNupp, KabeLaud},
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