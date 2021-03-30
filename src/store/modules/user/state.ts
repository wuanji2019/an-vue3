import { getToken } from '@/utils/cookies'

export interface State{
    token: string
    name: string
    platform: string
    userInfo: string
}

export const state: State = {
  token: getToken() || '',
  name: '', // 用户名
  platform: '', // 平台
  userInfo: '' // 用户信息
}
