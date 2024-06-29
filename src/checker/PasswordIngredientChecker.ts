import type { PasswordChecker } from '../PasswordChecker'

export class PasswordIngredientChecker implements PasswordChecker {
  /**
   * 密码组合必须同时包含数字、大写字母、小写字母、特殊字符
   */
  check(password: string): boolean {
    const rules: RegExp[] = [
      /\d/,
      /[A-Z]/,
      /[a-z]/,
      // 特殊字母匹配
      /[!@#$%^&*(),.?":{}|<>]/,
    ]

    return rules.every((rule) => rule.test(password))
  }
}
