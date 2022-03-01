<template>
  <el-row class="row-bg" justify="space-between">
    <el-col :span="6" class="left">
      <div class="logo">logo</div>
      <div class="nav">nav</div>
      <div class="tools">tools</div>
      <div class="fastButton">fastButton</div>
    </el-col>
    <el-col :span="6" class="middle">
      <div class="name">name</div>
    </el-col>
    <el-col :span="6" class="right">
      <div class="show">show</div>
      <div class="size">
        <el-select v-model="value" class="m-2" placeholder="Select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

interface option {
  value: number;
  label: string;
}

const options = ref<Array<option>>([]);
const size = [50, 80, 100, 150, 200, 300, 400];
onMounted(() => {
  getOptions();
});

function getOptions() {
  size.forEach((i) => {
    options.value.push({
      value: i,
      label: `${i}%`,
    });
  });
}
</script>

<style lang="less">
.left {
  display: flex;
}
.right {
  display: flex;
}
</style>
