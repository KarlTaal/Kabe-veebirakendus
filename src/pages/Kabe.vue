<template>
  <div class="konteiner">

    <div>

      <div>
        <OlenKomponent
            v-for="n in numbrid"
            :key="n"
        ></OlenKomponent>
      </div>


    </div>

  </div>


</template>

<script>
import OlenKomponent from "../components/OlenKomponent";

export default {
  name: "Kabe",

  components: {OlenKomponent},

  data() {
    return {
      numbrid: [1, 2, 3, 4]
    }
  },
  methods: {}
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