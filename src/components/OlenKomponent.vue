<template>
  <div>
    <div class="nupp" :class="player"></div>
  </div>

</template>

<script>

export default {
  name: "OlenKomponent",
  props: ['player']
}


</script>

<style scoped>

.nupp {
  height: 5em;
  width: 5em;
  padding: 5px;
  margin: 8px;
  border-radius: 50em;
}

.valge {
  background-color: white;
}

.must {
  background-color: black;
}
</style>