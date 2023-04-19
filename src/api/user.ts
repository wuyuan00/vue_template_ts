import { get } from '@/utils/request'

export default class User {
  static async getUser() {
    return get('wuyuan00')
  }
}
