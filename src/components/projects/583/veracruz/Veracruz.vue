<script setup lang="ts">
import {onMounted, ref} from "vue";
import type {Ref} from "vue"

import mapSrc from './assets/images/united-fruit-company-map.jpg'
import iconSrc from './assets/images/archive.svg'

const mapSize = [1564, 1604]

const mapRef: Ref<HTMLElement | null> = ref(null)

const initMap = () => {
  const mapVal = mapRef.value;
  if (mapVal == null) {
    return
  }
  const map: HTMLElement = mapVal

  // TODO: read docRefs & put them in something we can look up
}

onMounted(initMap)

// Locations

type Locations = { [k: string]: [number, number] }
const locations: Locations = {
  veracruz: [202, 953],
  mexicoCity: [119, 947],
  portAuPrince: [873, 975],
  washington: [740, 316],
  colon: [660, 1239],
  losAngeles: [47, 487],
  tampico: [153, 859]
}

// Documents

import butler129Src from './assets/images/butler-129-covering-letter.jpg'
import butler133Src from './assets/images/butler-133-butler-to-navy.jpg'
import butler91Src from './assets/images/butler-91-orders.jpg'
import marinesSrc from './assets/images/marines-marching-to-station.jpg'
import ussDolphinSrc from './assets/images/uss-dolphin-1915.jpg'

type Document = {
  id: string, src: string, location: [number, number]
}
const documents: Array<Document> = [
  {id: 'butler129', src: butler129Src, location: locations.washington},
  {id: 'butler133', src: butler133Src, location: locations.portAuPrince},
  {id: 'butler91', src: butler91Src, location: locations.colon},
  {id: 'marines', src: marinesSrc, location: locations.veracruz},
  {id: 'ussDolphin', src: ussDolphinSrc, location: locations.tampico}
]

const docRefs: Ref<Array<HTMLElement | null>> = ref([])

</script>

<template>
  <article class="veracruz">
    <img ref="mapRef" :src="mapSrc"/>
    <ul class="documents">
      <li v-for="document in documents" ref="docRefs">
        <img :id="`icon-${document.id}`" :src="iconSrc" class="icon"/>
        <img :id="`doc-${document.id}`" :src="document.src" class="document"/>
      </li>
    </ul>
  </article>
</template>

<style lang="scss">
article.veracruz {
  ul.documents {
    display: contents;
    li {
      display: contents;
      img.icon {
        height: 1rem;
        width: 1rem;
      }
      img.document {
        height: 100px;
      }
    }
  }
}
</style>
