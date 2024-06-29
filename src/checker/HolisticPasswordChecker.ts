import type { PasswordChecker } from '../PasswordChecker'
import { PasswordIngredientChecker } from './PasswordIngredientChecker'
import { PasswordLengthChecker } from './PasswordLengthChecker'

export class HolisticPasswordChecker implements PasswordChecker {
  private readonly checkers: PasswordChecker[]

  constructor() {
    this.checkers = [new PasswordLengthChecker(), new PasswordIngredientChecker()]
  }

  check(password: string): boolean {
    return this.checkers.every((checker) => checker.check(password))
  }
}
