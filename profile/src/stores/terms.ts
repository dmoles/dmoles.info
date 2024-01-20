import {defineStore} from "pinia";
import {ref} from "vue";
import {Term} from "../types/Term";

export const useTermsStore = defineStore('terms', () => {

    // --------------------------------------------------
    // Internal functions and properties

    const fall2022 = new Term(2022, 'Fall')
    const spring2023 = new Term(2023, 'Spring')
    const fall2023 = new Term(2023, 'Fall')
    const spring2024 = new Term(2024, 'Spring')

    function initTerms(): Array<Term> {
        const terms = [
            fall2022,
            spring2023,
            fall2023,
            spring2024
        ]
        terms.sort() // just to be sure
        return terms
    }

    // --------------------------------------------------
    // Exported functions and properties

    const terms = ref<Array<Term>>(initTerms())

    const currentTerm = ref<Term>(spring2024)

    return {terms, currentTerm}
})
