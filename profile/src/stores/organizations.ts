import { defineStore } from "pinia"
import { ref } from "vue"
import { Organization } from "../types/Organization"

export const useOrganizationsStore = defineStore('organizations', () => {
  const organizations = ref<Array<Organization>>(
    [
      // {
      //     abbr: 'LISSA',
      //     name: 'Library and Information Science Student Association',
      //     link: 'https://lissa.rutgers.edu/'
      // },
      {
        abbr: 'SCARLA',
        name: 'The Student College, Academic, and Research Libraries Association',
        link: 'https://scarla.rutgers.edu/',
        role: 'webmaster'
      },
      // {
      //     abbr: 'SOURCE',
      //     name: 'https://sites.comminfo.rutgers.edu/source/',
      //     link: 'https://sites.comminfo.rutgers.edu/source/'
      // }
    ]
  )

  return { organizations }
})
