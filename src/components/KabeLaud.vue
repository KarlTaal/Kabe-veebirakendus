<template>
  <div class="konteiner" style="flex-direction: row">

    <div style="display: flex; flex-direction: column; align-items: center;">
      <div
          v-for="i in 8"
          :key="`${i}error`"
          style="display: flex;  align-items:center; justify-content: flex-end; margin-right: 5px; width: 6em; height: 6em;"
      >
        {{ i - 1 }}
      </div>
    </div>

    <div class="field">
      <div
          v-for="i in 8"
          :key="`${i}minema`"
          style="display: flex; justify-content: center"
      >
        {{ i - 1 }}
      </div>


      <div
          v-for="(ruut, index) in gameSquares"
          :key="index"
          :class="[getSquareColorClass(index), ruut !== null && ruut.tüüp === 'sihtkoht' ? 'sihtkoht' : '' ]"
          :style="index > 55 ? 'border-bottom: solid' : ''"
          @click="handleRuuduKlikk(ruut)"
      >

        <kabe-nupp
            v-if="ruut !== null && ruut.tüüp === 'nupp'"
            :player="ruut.player"
            :powerful="ruut.powerful"
            :position="ruut.cords"
            :klikitav="ruut.player === aktiivneMängija"
            :class="ruut.indikaator ? 'käija' : ''"
            @nupuKlikk="handleNupuKlikk(ruut)"
        />

      </div>
    </div>

  </div>
</template>

<script>
import {sooritaKäik, kasToimusSöömine} from "@/scripts/sooritaKäik";
import {annaRuuduKäigud, annaSöömised} from "@/scripts/annaRuuduKäigud"
import KabeNupp from "@/components/KabeNupp";
import "@/scripts/data";
import ErinevadLauaSeisud from "../../tests/unit/erinevadLauaSeisud";
import rumalAi from "@/AI/rumalAI";
import getInitialGameField from "@/scripts/data";
import annaAiKäik from "@/AI/targemAI";
import kasLõpp from "@/scripts/kasMängLäbi";
import LauaKontrollid from "@/components/LauaKontrollid";
import annaKõikKäigud from "@/scripts/annaKõikKäigud";


export default {

  name: "kabe-laud",
  components: {LauaKontrollid, KabeNupp},
  data() {
    return {
      gameField: [[]],
      valitudNupp: null,
      player1: "valge",
      aktiivneMängija: "valge",
      player1Algo: 3,
      player2Algo: 0,
    }
  },

  //Valge = player1
  //Must = player2

  //0 - Rumal Ai
  //1 - Keskmine Ai
  //2 - Master Ai
  //3 - Inimene

  methods: {

    setDifficultyPlayer1(player1) {
      this.player1Algo = player1;
    },

    setDifficultyPlayer2(player2) {
      this.player2Algo = player2;
    },

    startGame() {
      if (this.player1Algo === 3 && this.player2Algo === 3){
        return;
      }
      if (this.player1Algo !== 3)
        this.sooritaAiKäik(this.player1Algo);
    },

    endGame() {
      this.algSeadistaLaud();
      this.valitudNupp = null;
      this.player1 = "valge";
      this.aktiivneMängija = "valge";
      this.player1Algo = 3;
      this.player2Algo = 0;
    },

    algSeadistaLaud() {
      const uusLaud = getInitialGameField();// ErinevadLauaSeisud().usersMultipleMoves;
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
      if (this.gameField.length !== 1) {
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 8; j++) {
            if (this.gameField[i][j] !== null && this.gameField[i][j].tüüp === "sihtkoht")
              this.gameField[i][j] = null;
          }
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

    handleNupuKlikk(ruut) {
      if (!ruut || ruut.tüüp === "sihtkoht") return;

      this.valitudNupp = ruut.cords;
      this.eemaldaSihtkohad();
      if (ruut.indikaator) {
        const käigud = annaRuuduKäigud(ruut.cords, this.gameField);
        for (let i = 0; i < käigud.length; i++) {
          const ruuduke = käigud[i][0];
          this.gameField[ruuduke[0]][ruuduke[1]] = {tüüp: "sihtkoht", cords: [ruuduke[0], ruuduke[1]]};
        }
      }
      this.gameField = JSON.parse(JSON.stringify(this.gameField));

    },

    handleRuuduKlikk(ruut) {
      if (!ruut || ruut.tüüp === "nupp") return;

      this.eemaldaSihtkohad();
      const uusLaud = sooritaKäik([this.valitudNupp, ruut.cords], this.gameField);
      this.gameField = uusLaud;

      if (kasToimusSöömine([this.valitudNupp, ruut.cords])) {
        const eating = annaSöömised(ruut.cords, this.gameField);
        if (eating.length !== 0) {
          this.aktiivneMängija = this.aktiivneMängija === "valge" ? "valge" : "must";
        } else
          this.aktiivneMängija = this.aktiivneMängija === "valge" ? "must" : "valge";
      } else {
        this.aktiivneMängija = this.aktiivneMängija === "valge" ? "must" : "valge";
      }

    },

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },

    async sooritaAiKäik(algo) {
      const kiirus = 500;
      const winner = kasLõpp(this.gameField);

      if (winner) {
        console.log(`VÕITIS: ${winner}`)
        return;
      }

      let käik;
      if (algo === 0)
        käik = rumalAi(this.aktiivneMängija, this.gameField);
      else if (algo === 1)
        käik = annaAiKäik(this.aktiivneMängija, this.gameField, 4, [], this.aktiivneMängija).tee[0];
      else
        return;

      let asukoht = käik[0];
      for (let i = 0; i < käik[1].length; i++) {
        await this.sleep(kiirus);
        const uusLaud = sooritaKäik([asukoht, käik[1][i]], this.gameField);
        asukoht = käik[1][i];
        this.gameField = uusLaud;
      }
      await this.sleep(kiirus)
      this.aktiivneMängija = this.aktiivneMängija === "valge" ? "must" : "valge";
    }

  },

  watch: {
    aktiivneMängija() {
      if (this.aktiivneMängija === "must" && this.player2Algo !== 3)
        this.sooritaAiKäik(this.player2Algo);
      else if (this.aktiivneMängija === "valge" && this.player2Algo !== 3)
        this.sooritaAiKäik(this.player1Algo);
    }
  },

  computed: {
    gameSquares() {
      const squares = [];
      const moves = annaKõikKäigud(this.aktiivneMängija, this.gameField).map(it => JSON.stringify(it[0]));

      for (let i = 0; i < this.gameField.length; i++) {
        for (let j = 0; j < this.gameField[0].length; j++) {
          const ruut = this.gameField[i][j];

          if (ruut !== null && ruut.tüüp === "nupp") {
            if (moves.includes(JSON.stringify([i, j]))) {
              this.gameField[i][j]["indikaator"] = true;
            } else
              this.gameField[i][j]["indikaator"] = false;
          }

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

.käija:hover {
  background-color: lime;
}


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

.button {
  height: 50px;
  width: 50px;
  padding-left: 50px;
  margin-left: 50px;
  background-color: red;
}


</style>