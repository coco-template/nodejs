import type { PasswordChecker } from './PasswordChecker'

/**
 * 密码规则：密码长度大于等于8
 */
export class PasswordLengthChecker implements PasswordChecker {
  private readonly minLength: number = 8

  check(password: string): boolean {
    return password.length >= this.minLength
  }
}
