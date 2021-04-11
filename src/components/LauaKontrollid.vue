<template>
  <div class="valikud">
    <el-select v-model="leftDrop">
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
        v-model="rightDrop"
        collapse-tags
        style="margin-left: 20px;"
    >
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

      rightDrop: 0,

      leftDrop: 1,

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
      this.$emit("start")
    },
    handleEnd() {
      this.$emit("end")
    }
  },

  watch: {
    rightDrop(newVal) {
      this.$emit("player1", newVal);
    },
    leftDrop(newVal){
      this.$emit("Player2", newVal)
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

.nupud{
  padding-left: 20px;
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