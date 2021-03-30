/**
 * 用户相关接口
 */
import { RootObject, LoginModel } from '@/model/rootObject'
import https from '@/utils/https'
import { RequestParams, ContentType, Method } from 'axios-mapper'

export const login = (userInfo: RequestParams) => {
  return https(false).request<RootObject<LoginModel>>('user/login', Method.POST, userInfo, ContentType.json)
}
