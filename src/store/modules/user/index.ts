
import { Store as VuexStore, CommitOptions, Module } from 'vuex'

// TODO: How to surpass cyclical dependency linting errors cleanly?
import { RootState } from '@/store'
import { state } from './state'
import { mutations, Mutations } from './mutations'
// import { actions, Actions } from './action'
import { getters, Getters } from './getter'

import type { State } from './state'

export { State }

export type UserStore<S = State> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'>
& {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  // dispatch<K extends keyof Actions>(
  //   key: K,
  //   payload: Parameters<Actions[K]>[1],
  //   options?: DispatchOptions
  // ): ReturnType<Actions[K]>
} & {
  getters: {
      [K in keyof Getters]: ReturnType<Getters[K]>
  }
}
export const store: Module<State, RootState> = {
  state,
  mutations,
  // actions,
  getters
  // TODO: With namespaced option turned on, having problem how to use dispatch with action types...
  // But without it, a bigger store might have clashes in namings
  // namespaced: true,
}
