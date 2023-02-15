import {beforeEach, describe, expect, it} from 'vitest'

import {Course, COURSE_URL_BASE, PROGRAM_ID} from "../../../src/types/Course";

describe(Course.name, () => {

    let course: Course

    beforeEach(() => {
        course = new Course(123, 'Test')
    })

    describe('toString()', () => {
        it('returns name and number', () => {
            const expected = `${course.id} ${course.name}`
            expect(course.toString()).toEqual(expected)
        })
    })

    describe('url', () => {
        it('returns the URL', () => {
            const expected = `${COURSE_URL_BASE}?courses=${course.id}&program=${PROGRAM_ID}`
            expect(course.url).toEqual(expected)
        })
    })

    describe('comparisons', () => {
        it('compares by id', () => {
            const c1 = new Course(1, 'xyz')
            const c2 = new Course(2, 'xyz')
            expect(c1 < c2).toEqual(true)
            expect(c2 > c1).toEqual(true)
        })

        it('compares by name', () => {
            const c1 = new Course(1, 'abc')
            const c2 = new Course(1, 'def')
            expect(c1 < c2).toEqual(true)
            expect(c2 > c1).toEqual(true)
        })

        it('allows sorting', () => {
            const c1 = new Course(1, 'abc')
            const c2 = new Course(2, 'xyz')
            const a: Array<Course> = [c2, c1]
            a.sort()
            expect(a).toEqual([c1, c2])
        })
    })
})
