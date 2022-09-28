import {defineStore} from "pinia";
import type { Ref } from 'vue'
import {ref} from 'vue'
import type { Location } from '../types/location'

export const useLocationStore = defineStore('location', () => {

    const veracruz: Ref<Location> = ref(<Location>[202, 953])
    const mexicoCity: Ref<Location> = ref(<Location>[119, 947])
    const portAuPrince: Ref<Location> = ref(<Location>[873, 975])
    const washington: Ref<Location> = ref(<Location>[740, 316])
    const colon: Ref<Location> = ref(<Location>[660, 1239])
    const losAngeles: Ref<Location> = ref(<Location>[47, 487])
    const tampico: Ref<Location> = ref(<Location>[153, 859])

    console.log('exporting washington = %o', washington)

    return {veracruz, mexicoCity, portAuPrince, washington, colon, losAngeles, tampico}
})
