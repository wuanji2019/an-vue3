import { ActionTree, ActionContext } from 'vuex'
import { RootState } from '@/store'
import { State } from './state'
import { Mutations, MutationType } from './mutations'
import { login } from '@/api/user/user'
import { Md5 } from 'ts-md5'
import { setToken } from '@/utils/cookies'

export enum ActionTypes {
  Login = 'LOGIN'
}

type ActionAugments = Omit<ActionContext<State, RootState>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
}

export interface Actions {
  [ActionTypes.Login](context: ActionAugments, userInfo: any): Promise<any>
}

export const actions: ActionTree<State, RootState> & Actions = {
  // 登录
  async [ActionTypes.Login]({ commit }, userInfo) {
    try {
      const { username, password } = userInfo
      const response = await login({
        platform: 'erp-web',
        userName: username.trim(),
        userPwd: Md5.hashStr(password).toString()
      })
      const { data, success, message } = response
      if (success) {
        const { token, nhJewelryAccessName, nhJewelryAccessPlatform } = data
        commit(MutationType.SET_TOKEN, token)
        commit(MutationType.SET_NAME, nhJewelryAccessName)
        commit(MutationType.SET_PLATFORM, nhJewelryAccessPlatform)
        return Promise.reject(response)
      } else {
        Promise.reject(message)
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }

}
