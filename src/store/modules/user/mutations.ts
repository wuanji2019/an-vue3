import { MutationTree } from 'vuex'
import { State } from './state'

export enum MutationType {
  SET_TOKEN = 'SET_TOKEN',
  SET_NAME = 'SET_NAME',
  SET_PLATFORM = 'SET_PLATFORM',
  SET_USERINFO = 'SET_USERINFO'
}

export type Mutations<S = State> = {
  [MutationType.SET_TOKEN](state: S, token: string): void
  [MutationType.SET_NAME](state: S, name: string): void
  [MutationType.SET_PLATFORM](state: S, platform: string): void
  [MutationType.SET_USERINFO](state: S, userInfo: string): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SET_TOKEN](state: State, token: string) {
    state.token = token
  },

  [MutationType.SET_NAME](state: State, name: string) {
    state.name = name
  },

  [MutationType.SET_PLATFORM](state: State, platform: string) {
    state.platform = platform
  },

  [MutationType.SET_USERINFO](state: State, userInfo: string) {
    state.userInfo = userInfo
  }

}
