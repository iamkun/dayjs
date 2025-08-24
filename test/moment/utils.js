/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import { faker, Faker, base } from '@faker-js/faker'
import * as fc from 'fast-check/lib/cjs/fast-check.js'

class FakerBuilder extends fc.Arbitrary {
  constructor(generator) {
    super()
    this.generator = generator
  }
  generate(mrng) {
    const randomizer = {
      next: () => mrng.nextDouble(),
      seed: () => {} // no-op, no support for updates of the seed, could even throw
    }
    const customFaker = new Faker({ locale: base, randomizer })
    return new fc.Value(this.generator(customFaker), undefined)
  }
  canShrinkWithoutContext() {
    return false
  }
  shrink() {
    return fc.Stream.nil()
  }
}

function fakerToArb(generator) {
  return new FakerBuilder(generator)
}

export const timezoneArb = fakerToArb(faker.location.timeZone)

export const dateArb = fc.date({
  min: new Date('1970-01-01'),
  max: new Date('2030-01-01'),
  noInvalidDate: true
})
