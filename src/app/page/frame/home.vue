<template>
  <el-container>
    <el-header>
      <headTop></headTop>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
      <el-aside width="200px">Aside</el-aside>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import headTop from './headTop.vue';
</script>
