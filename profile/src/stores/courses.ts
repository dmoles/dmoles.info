import { defineStore, storeToRefs } from "pinia"
import { computed, ComputedRef, Ref, ref } from "vue"
import { Course } from "../types/Course"
import { Term, TermName, TermYear } from "../types/Term"
import { useTermsStore } from "./terms"

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
          new Course(580, 'Knowledge & Society',
            {
              name: 'Memory and Forgetting at Angel Island Immigration Station',
              desc: 'term paper',
              link: '/files/580/580%20TP2%20-%20Angel%20Island%20-%20final.pdf'
            }),
          new Course(583, 'Foundations of Preservation and Archives',
            {
              name: '“Veracruz is dying”: the US occupation of Veracruz in history and memory',
              desc: 'online exhibit prototype',
              link: 'https://dmoles.github.io/veracruz/'
            },
            {
              // TODO: formatted text in project names (Markdown?)
              name: 'Benjamin Rosenbaum’s “The Unraveling”',
              desc: 'digital collection finding aid',
              link: '/files/583/583%20Personal%20Collection%20-%20Finding%20Aid.pdf'
            }
          )
        ]
      },
      2023: {
        'Spring': [
          new Course(522, 'Cataloging and Classification'),
          new Course(532, 'Collection Development & Management')
        ],
        'Fall': [
          new Course(502, 'Colloquium in LIS'),
          new Course(510, 'Human Information Behavior'),
          new Course(524, 'Metadata for the Information Professional',
            {
              name: 'TTRPG•ML: Sketch for a tabletop role-playing game markup language',
              desc: 'XML schema',
              link: 'https://dmoles.github.io/ttrpg-ml/'
            }
          ),
          new Course(533, 'Manuscripts & Archives'),
          new Course(556, 'Preservation of Library & Archival Materials',
            {
              name: 'Floppy Disks: Care, Handling, and Preservation',
              desc: 'leaflet',
              link: '/files/556/M4_Leaflet_David%20Moles%20v2.pdf'
            }
          )
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
    const { currentTerm } = storeToRefs(useTermsStore())
    return coursesForTerm(currentTerm.value) || []
  })

  const pastCourses = computed(() => {
    const { terms, currentTerm } = storeToRefs(useTermsStore())
    const current: Term = currentTerm.value
    return terms.value
      .filter((t) => t < current)
      .flatMap((t) => coursesForTerm(t))
      .sort((c1, c2) => c1.id - c2.id)
  })

  const allCourses: ComputedRef<Course[]> = computed(() => {
    return Object.values(courses.value)
      .flatMap((cfy) => Object.values(cfy).flat())
  })

  return { currentCourses, pastCourses, allCourses }
})
