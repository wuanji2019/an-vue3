import { createStore, createLogger } from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import { store as user, UserStore, State } from '@/store/modules/user'

export interface RootState {
    user: State
}

export type Store = UserStore<Pick<RootState, 'user'>>

// Plug in logger when in development environment
// 在开发环境中开启logger
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []

// Plug in session storage based persistence
// 可以根据自己需要添加其他插件，例如：vuex持久化插件
// plugins.push(createPersistedState({ storage: window.sessionStorage }))

export const store = createStore({
  plugins,
  modules: {
    user
  }
})

export function useStore(): Store {
  return store as Store
}
