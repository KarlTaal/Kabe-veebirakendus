<template>
  <div>
    <div class="ringP1">{{}}</div>
    <div class="ringP2">{{}}</div>
  </div>

</template>

<script>

export default {
        name: "OlenKomponent",
        props: {
          P1:{
            default: "P1",
            type: String
          },

          P2:{
            default: "P2",
            type: String
          }
        },
      components: {},
      data() {return {}},


      methods: {},
      computed:{},
      watch: {},

    }


</script>

<style scoped>
.ringP1{
  height: 5em;
  width: 5em;
  border-radius: 50em;
  background-color: white;
  padding: 5px;
  margin: 8px;

}

.ringP2{
  height: 5em;
  width: 5em;
  border-radius: 50em;
  background-color: black;
  padding: 5px;
  margin: 8px;

}
</style>