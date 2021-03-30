/**
 * AES加密
 */
import { AES, mode, pad, enc } from 'crypto-ts'

const AseKey = 'Ase-Key'

export default class VAES {
  static encrypt(text: string | null): string | null {
    return AES.encrypt(text ?? '', AseKey, { mode: mode.ECB, padding: pad.PKCS7 }).toString()
  }

  static decrypt(text: string | null): string | null {
    return AES.decrypt(text ?? '', AseKey, { mode: mode.ECB, padding: pad.PKCS7 }).toString(enc.Utf8)
  }
}
