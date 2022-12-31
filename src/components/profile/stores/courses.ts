import {defineStore, storeToRefs} from "pinia";
import {computed, ComputedRef, Ref, ref} from "vue";
import {Course} from "../types/Course";
import {Term, TermName, TermYear} from "../types/Term";
import {useTermsStore} from "./terms";

type CourseByTerm = { [key in TermName]?: Array<Course> }
type CoursesByYear = { [key in TermYear]?: CourseByTerm }

export const useCoursesStore = defineStore('courses', () => {

    // --------------------------------------------------
    // Internal functions and properties

    function initCourses(): CoursesByYear {
        return {
            2022: {
                'Fall': [
                    new Course(501, 'Introduction to Library and Information Professions'),
                    new Course(580, 'Knowledge & Society'),
                    new Course(583, 'Foundations of Preservation and Archives',
                        {
                            name: '“Veracruz is dying”: the US occupation of Veracruz in history and memory',
                            link: '/projects/583/veracruz/'
                        }
                    )
                ]
            },
            2023: {
                'Spring': [
                    new Course(522, 'Cataloging and Classification'),
                    new Course(532, 'Collection Development & Management')
                ]
            }
        }
    }

    const courses: Ref<CoursesByYear> = ref<CoursesByYear>(initCourses())

    function coursesForTerm(term: Term): Array<Course> {
        const coursesForYear = (courses.value)[term.year]
        if (coursesForYear) {
            return coursesForYear[term.name] || []
        }
        return []
    }

    // --------------------------------------------------
    // Exported functions and properties

    const currentCourses: ComputedRef<Array<Course>> = computed(() => {
        const {currentTerm} = storeToRefs(useTermsStore())
        return coursesForTerm(currentTerm.value) || []
    })

    const pastCourses = computed(() => {
        const {terms, currentTerm} = storeToRefs(useTermsStore())
        const current: Term = currentTerm.value
        return terms.value
            .filter((t) => t < current)
            .flatMap((t) => coursesForTerm(t))
    })

    const allCourses: ComputedRef<Course[]> = computed(() => {
        return Object.values(courses.value)
            .flatMap((cfy) => Object.values(cfy).flat())
    })

    return {currentCourses, pastCourses, allCourses}
})
