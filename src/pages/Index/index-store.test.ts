import { describe, test, expect } from 'vitest'
import indexStore from './index-store'

describe('index-store', () => {
  test('初始值', () => {
    expect(indexStore).toStrictEqual({ count: 0 })
  })
})
