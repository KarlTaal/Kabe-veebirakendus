<template>

  <div class="nupp" :class="player"></div>


</template>

<script>

export default {
  name: "OlenKomponent",
  props: {
    player: {
      default: 'must',
      type: String
    }
  }
}


</script>

<style scoped>

.nupp {
  height: 5em;
  width: 5em;
  border-radius: 50em;
}

.valge {
  background-color: white;
}

.must {
  background-color: black;
}
</style>