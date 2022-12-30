import {defineStore} from "pinia";
import {ref} from "vue";
import {Course} from "../types/Course";

export const useCoursesStore = defineStore('courses', () => {
    const current = ref<Array<Course>>(
        [
            new Course(501, 'Introduction to Library and Information Professions'),
            new Course(580, 'Knowledge & Society'),
            new Course(583, 'Foundations of Preservation and Archives',
                    {
                        name: '“Veracruz is dying”: the US occupation of Veracruz in history and memory',
                        link: '/projects/583/veracruz/'
                    }
            )
        ]
    )

    const past = ref<Array<Course>>([])

    return {current, past}
})
