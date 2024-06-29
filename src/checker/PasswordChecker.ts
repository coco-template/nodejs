/**
 * 密码校验不触发细分错误信息，检测阶段使用布尔值即可
 */
export interface PasswordChecker {
  check(password: string): boolean
}
