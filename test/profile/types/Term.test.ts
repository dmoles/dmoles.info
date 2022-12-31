import {beforeEach, describe, expect, it} from 'vitest'

import {Term} from "../../../src/components/profile/types/Term";

describe(Term.name, () => {
    let term: Term

    beforeEach(() => {
        term = new Term(2022, 'Fall')
    })

    describe('toString()', () => {
        it('returns a human-readable name', () => {
            const expected = `${term.name} ${term.year}`
            expect(term.toString()).toEqual(expected)
        })
    })

    describe('valueOf()', () => {
        it('returns a fractional year', () => {
            const expected = term.year + 0.5
            expect(term.valueOf()).toEqual(expected)
        })
    })

    describe('comparisons', () => {
        describe('<>', () => {
            it('compares by id', () => {
                const t1 = new Term(2022, 'Fall')
                const t2 = new Term(2023, 'Fall')
                expect(t1 < t2).toEqual(true)
                expect(t2 > t1).toEqual(true)
            })

            it('compares by name', () => {
                const t1 = new Term(2022, 'Spring')
                const t2 = new Term(2022, 'Fall')
                expect(t1 < t2).toEqual(true)
                expect(t2 > t1).toEqual(true)
            })
        })

        describe('compareFn', () => {
            it('sorts an array', () => {
                const t1 = new Term(2022, 'Spring')
                const t2 = new Term(2022, 'Fall')
                const a: Array<Term> = [t2, t1]
                a.sort(Term.compareFn)
                expect(a).toEqual([t1, t2])
            })
        })
    })
})
