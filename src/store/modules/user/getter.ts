import { GetterTree } from 'vuex'

import { RootState } from '@/store'

import type { State } from './state'

export type Getters = {
    token(state: State): string
    name(state: State): string
    platform(state: State): string
    userInfo(state: State): string
}

export const getters: GetterTree<State, RootState> & Getters = {
  token: (state) => state.token,
  name: (state) => state.name,
  platform: (state) => state.platform,
  userInfo: (state) => state.userInfo
}
