import { describe, test } from 'vitest'

import { UnionArrays } from '../../userscript/source/arrrayext.js'

let SharedValues = Array.from({ length: 500 }, (UnusedValue, Index) => Index)
let FirstArray = [...SharedValues, ...SharedValues, ...Array.from({ length: 900 }, (UnusedValue, Index) => Index + 100)]
let SecondArray = [...SharedValues, ...Array.from({ length: 900 }, (UnusedValue, Index) => Index + 1_000)]
let ThirdArray = [...SharedValues, ...Array.from({ length: 900 }, (UnusedValue, Index) => Index + 2_000)]

describe('UnionArrays', () => {
	test('intersects three arrays with duplicate values', async ({ bench: Bench }) => {
		await Bench('intersects three arrays with duplicate values', () => {
			UnionArrays(FirstArray, SecondArray, ThirdArray)
		}).run({ time: 25_000 })
	})
})