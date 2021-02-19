<template>
  <div class="konteiner">


    <kabe-laud

    ></kabe-laud>




  </div>


</template>

<script>
import OlenKomponent from "../components/kabeNupp";
import KabeLaud from "@/components/kabeLaud";
import KabeNupp from "@/components/kabeNupp";

export default {
  name: "Kabe",

  components: {KabeNupp, KabeLaud, OlenKomponent},

  data() {
    return {
      numbrid: [1, 2, 3, 4, 5]
    }
  }
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