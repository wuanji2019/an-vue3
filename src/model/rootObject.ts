
// {
//     "code": 0,
//     "msg": "success",
//     "data": {
//     }
// }

export interface RootObject<T>{
  code: number
  message: string
  data: T
  success: boolean
}

export interface LoginModel {
  token: string
  nhJewelryAccessName: string
  nhJewelryAccessPlatform: string
}
