<template>
  <div class="konteiner">

    <div>

      <div>
        <OlenKomponent
           v-for="i in 6"
           :key="i"
           :player="i === 2 || i === 4 ? 'must' : 'valge'"
        ></OlenKomponent>
      </div>

    </div>

  </div>


</template>

<script>
import OlenKomponent from "../components/kabeNupp";

export default {
  name: "Kabe",

  components: {OlenKomponent},

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