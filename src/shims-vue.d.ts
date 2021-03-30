//Vuex 4 删除其 Vue 组件中的全球打字，以解决#994的问题。当使用 TypeScript 时，您必须声明自己的模块增强。this.$store
// 将以下代码放在您的项目中，以便正确键入：this.$store

import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    count: number
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
