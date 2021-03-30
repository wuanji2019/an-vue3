/**
 * 网络基础配置
 */

// contentType
enum ContentType{
  FORM = 'application/x-www-form-urlencoded',
  JSON = 'application/json; charset=utf-8'
}

// 提示弹窗
enum InfoShowType{
  LOG,
  NOTIFICATION,
  TOAST
}

interface Headers{
    token: string
    contentType: string
}

const _header: Headers = {
  token: '',
  contentType: ContentType.JSON
}

export interface NetworkConfig{
    host?: string
    timeout?: number
    loading?: false
    errorShowType?: InfoShowType
    header?: {}
}

const networkConfig: NetworkConfig = {
  host: process.env.VUE_APP_BASE_API,
  timeout: 6000,
  loading: false,
  errorShowType: InfoShowType.LOG,
  header: _header
}

export default networkConfig
