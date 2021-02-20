<template>
    <div class="nupp" :class="player"></div>
</template>

<script>

export default {
  name: "kabe-nupp",
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
  height: 70%;
  width: 70%;
  border-radius: 100%;
}

.valge {
  background-color: silver;
}

.must {
  background-color: gold;
}

.valge:hover {
  cursor: pointer;
  opacity: 0.5;
}

.must:hover {
  cursor: pointer;
  opacity: 0.5;
}
</style>