<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts" setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en';

const locale = getLocale() === 'zhCn' ? zhCn : en;
function getLocale() {
  return 'zhCn';
}
</script>
