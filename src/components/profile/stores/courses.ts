import {defineStore} from "pinia";
import {ref} from "vue";
import {Course} from "../types/Course";

export const useCoursesStore = defineStore('courses', () => {
    const current = ref<Array<Course>>(
        [
            {
                id: 501,
                name: 'Introduction to Library and Information Professions'
            },
            {
                id: 580,
                name: 'Knowledge & Society'
            },
            {
                id: 583,
                name: 'Foundations of Preservation and Archives',
                projects: [
                    {
                        name: '“Veracruz is dying”: the US occupation of Veracruz in history and memory',
                        link: '/projects/583/veracruz/'
                    }
                ]
            }
        ]
    )

    const past = ref<Array<Course>>([])

    return { current, past }
})
