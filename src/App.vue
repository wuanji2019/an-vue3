<template>
  <ConfigProvider :locale="locale">
    <router-view />
  </ConfigProvider>
</template>

<script lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { defineComponent } from 'vue'
import { ConfigProvider } from 'ant-design-vue'
export default defineComponent({
  name: 'App',
  components: { ConfigProvider },
  data() {
    return {
      locale: zhCN
    }
  }
})
</script>
