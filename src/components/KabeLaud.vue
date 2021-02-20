<template>
  <div class="konteiner">

    <div class="field">

      <div
          v-for="(ruut, index) in gameSquares"
          :key="index"
          :class="getSquareClass(index)"
          :style="index > 55 ? 'border-bottom: solid' : ''"
      >

      <kabe-nupp
      v-if="ruut"
      :player="ruut.player"
      />

      </div>

    </div>

  </div>
</template>

<script>
import KabeNupp from "@/components/KabeNupp";
import "@/scripts/data";
import getInitialGameField from "@/scripts/data";

export default {

  name: "kabe-laud",
  components: {KabeNupp},
  data() {
    return {
      gameField: getInitialGameField()
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