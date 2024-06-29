import { describe, expect, it } from '@jest/globals'
import { HolisticPasswordChecker } from './HolisticPasswordChecker'

describe('HolisticPasswordChecker', () => {
  const holisticPasswordChecker = new HolisticPasswordChecker()

  it('returns true when all checkers pass', async () => {
    // Assuming 'SecureP@ssw0rd' meets the criteria of both length and ingredient checkers
    const password = 'SecureP@ssw0rd'
    const result = holisticPasswordChecker.check(password)
    expect(result).toBe(true)
  })

  it('returns false when any checker fails', async () => {
    // 'Short!' would likely fail the length checker
    const password = 'Short!'
    const result = holisticPasswordChecker.check(password)
    expect(result).toBe(false)
  })
})
