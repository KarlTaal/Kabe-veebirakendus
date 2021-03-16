<template>
  <div class="konteiner" style="flex-direction: row">

    <div style="display: flex; flex-direction: column; align-items: center;">
      <div
          v-for="i in 8"
          :key="i"
          style="display: flex;  align-items:center; justify-content: flex-end; margin-right: 5px; width: 6em; height: 6em;"
      >
        {{ i - 1 }}
      </div>
    </div>

    <div class="field">
      <div
          v-for="i in 8"
          :key="i"
          style="display: flex; justify-content: center"
      >
        {{ i - 1 }}
      </div>


      <div
          v-for="(ruut, index) in gameSquares"
          :key="index"
          :class="[getSquareColorClass(index), ruut !== null && ruut.tüüp === 'sihtkoht' ? 'sihtkoht' : '']"
          :style="index > 55 ? 'border-bottom: solid' : ''"
          @click="handleRuuduKlikk(ruut !== null && ruut.tüüp === 'sihtkoht', ruut.cords)"
      >

        <kabe-nupp
            v-if="ruut !== null && ruut.tüüp === 'nupp'"
            :player="ruut.player"
            :powerful="ruut.powerful"
            :position="ruut.cords"
            :klikitav="ruut.player === kasutaja"
            @nupuKlikk="handleNupuKlikk"
        />

      </div>
    </div>

    <button class="button" @click="sooritaAiKäik()">  </button>

  </div>
</template>

<script>
import sooritaKäik from "@/scripts/sooritaKäik";
import annaRuuduKäigud from "@/scripts/annaRuuduKäigud";
import KabeNupp from "@/components/KabeNupp";
import "@/scripts/data";
import ErinevadLauaSeisud from "../../tests/unit/erinevadLauaSeisud";
import rumalAi from "@/AI/rumalAI";
import getInitialGameField from "@/scripts/data";



export default {

  name: "kabe-laud",
  components: {KabeNupp},
  data() {
    return {
      gameField: [[]],
      valitudNupp: null,
      kasutaja: "valge",
      aktiivneMängija: "valge"
    }
  },

  methods: {
    algSeadistaLaud(){
      const uusLaud = getInitialGameField(); //ErinevadLauaSeisud().tavaNupuTavaKäigudValge;
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (uusLaud[i][j]) //ehk ei ole null
            uusLaud[i][j]["tüüp"] = "nupp"
        }
      }
      this.gameField = uusLaud;
    },

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

    eemaldaSihtkohad() {
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (this.gameField[i][j] !== null && this.gameField[i][j].tüüp === "sihtkoht")
            this.gameField[i][j] = null;
        }
      }
    },

    getSquareColorClass(index) {
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
    },

    handleNupuKlikk(koordinaadid) {
      this.valitudNupp = koordinaadid;
      this.eemaldaSihtkohad();
      const käigud = annaRuuduKäigud(koordinaadid, this.gameField);
      for (let i = 0; i < käigud.length; i++) {
        const ruuduke = käigud[i][0];
        this.gameField[ruuduke[0]][ruuduke[1]] = {tüüp: "sihtkoht", cords: [ruuduke[0], ruuduke[1]]};
      }
      this.gameField = JSON.parse(JSON.stringify(this.gameField));
    },

    handleRuuduKlikk(kasOnSihtkoht, sihtKohaKoordinaadid) {
      if (kasOnSihtkoht) {
        this.eemaldaSihtkohad();
        const uusLaud = sooritaKäik([this.valitudNupp, sihtKohaKoordinaadid], this.gameField);
        this.aktiivneMängija = "must";
        this.gameField = uusLaud;
      }
    },

    sooritaAiKäik(){
      const käik = rumalAi(this.aktiivneMängija, this.gameField);
      setTimeout(() => {
        let asukoht = käik[0];
        for (let i = 0; i < käik[1].length; i++) {
          const uusLaud = sooritaKäik([asukoht, käik[1][i]], this.gameField);
          asukoht = käik[1][i];
          this.gameField = uusLaud;
        }
        this.aktiivneMängija = this.aktiivneMängija === "valge" ? "must" : "valge";
        }, 500);
    }
  },

  watch: {
    aktiivneMängija() {
      //if (this.aktiivneMängija === "must")
        this.sooritaAiKäik();
    }
  },

  computed: {
    gameSquares() {
      const squares = [];
      for (let i = 0; i < this.gameField.length; i++) {
        for (let j = 0; j < this.gameField[0].length; j++) {
          const ruut = this.gameField[i][j];
          if (ruut !== null && ruut.tüüp === "nupp") {
            ruut["cords"] = [i, j];
          }
          squares.push(ruut);
        }
      }
      return squares;
    }
  },

  mounted() {
    this.algSeadistaLaud();
  },

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
  background-color: darkslategrey;
  display: flex;
  width: 6em;
  height: 6em;
  justify-content: center;
  align-items: center;
}

.sihtkoht {
  background-color: red;
}

.button{
  height: 50px;
  width: 50px;
  padding-left: 50px;
  margin-left: 50px;
  background-color: #0074D9;
}



</style>