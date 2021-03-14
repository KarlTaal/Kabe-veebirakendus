<template>
  <div class="konteiner" style="flex-direction: row">

    <div style="display: flex; flex-direction: column; align-items: center;">
      <div
          v-for="i in 8"
          :key="i"
          style="display: flex;  align-items:center; justify-content: flex-end; margin-right: 5px; width: 6em; height: 6em;"
      >
        {{i-1}}
      </div>
    </div>

    <div class="field">
      <div
          v-for="i in 8"
          :key="i"
          style="display: flex; justify-content: center"
      >
        {{i-1}}
      </div>


      <div
          v-for="(ruut, index) in gameSquares"
          :key="index"
          :class="getSquareClass(index)"
          :style="index > 55 ? 'border-bottom: solid' : ''"
      >

      <kabe-nupp
      v-if="ruut"
      :player="ruut.player"
      :powerful="ruut.powerful"
      />

      </div>
    </div>

  </div>
</template>

<script>
import KabeNupp from "@/components/KabeNupp";
import "@/scripts/data";
import ErinevadLauaSeisud from "../../tests/unit/erinevadLauaSeisud";


export default {

  name: "kabe-laud",
  components: {KabeNupp},
  data() {
    return {
      gameField: ErinevadLauaSeisud().tammiJaTavanupudValge
    }
  },

  computed: {
    gameSquares() {
      const squares = [];
      this.gameField.forEach(rida => {
        squares.push(...rida);
      });
      return squares;
    }
  },

  methods: {
    isEvenRow(index) {
      if (index < 8)
        return true;
      if (index < 16)
        return false;
      if (index < 24)
        return true;
      if (index < 32)
        return false;
      if (index < 40)
        return true;
      if (index < 48)
        return false;
      if (index < 56)
        return true;
      return false;
    },

    getSquareClass(index) {
      const isEvenRow = this.isEvenRow(index);
      const isEvenCol = index % 2 === 0;

      if (isEvenRow && isEvenCol)
        return "ruutValge"
      if (!isEvenRow && isEvenCol)
        return "ruutMust"
      if (isEvenRow && !isEvenCol)
        return "ruutMust"
      if (!isEvenRow && !isEvenCol)
        return "ruutValge"
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

.field {
  display: grid;
  grid-template-columns: repeat(8, 6em);

}

.ruutValge {
  border: solid;
  border-bottom: none;
  background-color: beige;
  display: flex;
  width: 6em;
  height: 6em;
  justify-content: center;
  align-items: center;
}

.ruutMust {
  border: solid;
  border-bottom: none;
  background-color: darkslategray;
  display: flex;
  width: 6em;
  height: 6em;
  justify-content: center;
  align-items: center;

}
</style>