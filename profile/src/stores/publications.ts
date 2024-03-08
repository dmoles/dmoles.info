import { defineStore } from "pinia"
import { ref } from "vue"
import { Publication } from "../types/Project"

export const usePublicationsStore = defineStore('publications', () => {
  const publications = ref<Array<Publication>>(
    [
      {
        name: 'Digital Preservation in the Small: Lessons for Preservation from Minimal Computing',
        desc: 'presentation',
        link: 'https://cgscholar.com/cg_event/events/T24en/proposal/70471',
        abstract: `Digital preservation is hard. Getting started in digital preservation is harder.
        Getting started at a small institution, or in the developing world, is harder yet; despite 
        the digital preservation community’s open ethos and sizable body of tools and resources, 
        case studies and guidance largely address the concerns of established programs, and take 
        for granted developed-world infrastructure and resources. To small teams and less 
        well-resourced institutions, preservation can simply seem inaccessible. Meanwhile, 
        initiatives like the Digital Stewardship End-to-End Workflow Model call for preservation 
        to become embedded throughout the digital content lifecycle—a distant goal as long as 
        preservation continues to be seen as arcane, technical, and complex. Can we do better? I 
        propose that we can, and that minimal computing, a philosophy and body of practice emerging 
        in digital humanities over the past decade, offers useful lessons. Minimal computing 
        suggests an approach that does not (implicitly or explicitly) assume that every preservation 
        practice should strive to achieve the maturity of an ideal NDSA Level 4 program—one closer 
        to Owens’ call to “start small and implement simple and discrete tools and practices… 
        using nothing more than the file system you happen to be working in.” At the same time, 
        by making use of those “discrete tools and practices” already developed by the community, 
        this approach can leverage lessons learned and make it possible to scale up to more 
        sophisticated systems and workflows.`,
        venue: 'Twentieth International Conference on Technology, Knowledge, and Society, Valencia, Spain',
        date: 'March 2024'
      },
    ]
  )

  return { publications }
})
