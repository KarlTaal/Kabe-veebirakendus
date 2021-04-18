<template>
  <div class="valikud">
    <el-select
        :disabled="gameActive"
        v-model="leftDrop">
      <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.label"
          :value="item.id">
      </el-option>
    </el-select>


    <el-button-group class="nupud">
      <el-button class="startNupp" @click="handleStart" type="primary" icon="el-icon-success">Start</el-button>
      <el-button class="endNupp" @click="handleEnd" type="primary" icon="el-icon-error">End</el-button>
    </el-button-group>

    <el-select
        :disabled="gameActive"
        v-model="rightDrop">
      <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.label"
          :value="item.id">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import {Select, Option} from "element-ui";

export default {
  components: {
    Select,
    Option
  },
  data() {
    return {

      gameActive: false,
      rightDrop: 1,
      leftDrop: 2,

      options: [
        {
          id: 0,
          label: 'Rumal AI'
        }, {
          id: 1,
          label: 'Keskmine AI'
        }, {
          id: 2,
          label: 'Master AI'
        }, {
          id: 3,
          label: 'Inimene'
        }],
      value1: [],
      value2: []
    }
  },
  methods: {
    handleStart() {
      this.gameActive = true;
      this.$emit("start")
    },
    handleEnd() {
      this.gameActive = false;
      this.$emit("end")
    }
  },

  watch: {
    rightDrop(newVal) {
      this.$emit("player2", newVal);
    },
    leftDrop(newVal){
      this.$emit("player1", newVal)
    }
  }
}
</script>

<style scoped>

.valikud{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4em;
}

.startNupp{
  background-color: limegreen;
  border: none;
}
.endNupp{
  background-color: red;
  border: none;
}

</style>