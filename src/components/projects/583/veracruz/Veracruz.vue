<script setup lang="ts">
import type {Ref} from "vue"
import {onMounted, onUnmounted, ref} from "vue";
import type { ArchiveDoc } from './types/ArchiveDoc'

import mapSrc from './assets/images/united-fruit-company-map.jpg'
import iconSrc from './assets/images/archive.svg'
import butler129Src from './assets/images/butler-129-covering-letter.jpg'
import butler133Src from './assets/images/butler-133-butler-to-navy.jpg'
import butler91Src from './assets/images/butler-91-orders.jpg'
import marinesSrc from './assets/images/marines-marching-to-station.jpg'
import ussDolphinSrc from './assets/images/uss-dolphin-1915.jpg'
import locZevonSrc from './assets/images/loc-zevon.jpg'

const mapRef: Ref<HTMLElement | null> = ref(null)

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

const documents: Array<ArchiveDoc> = [
  {
    id: 'butler129', src: butler129Src, location: locations.washington,
    date: new Date('1916-02-29T00:00:00-04:00'),
    description: 'In 1916 Smedley Butler was awarded the Congressional Medal of Honor for his actions at Veracruz on 22 April 1914',
    srcUrl: 'https://catalog.archives.gov/id/57279637',
    citation: 'Col. John A. Lejeune to Maj. Smedley D. Butler, 4 Feb. 1916. Official Military Personnel File for Smedley D. Butler, image 129 of 2814; Official Military Personnel Files, 1905-1998; Records of the US Marine Corps, 1775-, Record Group 127. National Archives and Records Administration.'
  },
  {
    id: 'butler133', src: butler133Src, location: locations.portAuPrince,
    date: new Date('1916-02-04T00:00:00-04:00'),
    description: 'Butler, then stationed at Port-au-Prince, Haiti, wrote to the Secretary of the Navy, attempting to decline the Medal of Honor, writing: “the undersigned feels that no service rendered by him at Vera Cruz, deserves such recognition.”',
    srcUrl: 'https://catalog.archives.gov/id/57279637',
    citation: 'Maj. Smedley D. Butler to Secretary of the Navy, 23 Feb. 1916. Official Military Personnel File for Smedley D. Butler, image 133 of 2814; Official Military Personnel Files, 1905-1998; Records of the US Marine Corps, 1775-, Record Group 127. National Archives and Records Administration.'
  },
  {
    id: 'butler91', src: butler91Src, location: locations.colon,
    date: new Date('1914-01-08T00:00:00-04:00'),
    description: 'In January 1914 Maj. Smedley Butler and his battalion of Marines received orders to leave Panama and report to Rear Admiral Fletcher at Veracruz.',
    srcUrl: 'https://catalog.archives.gov/id/57279637',
    citation: 'Orders for Maj. Smedley D. Butler to depart Panama for Veracruz, Mexico, 8 Jan. 1914. Official Military Personnel File for Smedley D. Butler, image 91 of 2814; Official Military Personnel Files, 1905-1998; Records of the US Marine Corps, 1775-, Record Group 127. National Archives and Records Administration.'
  },
  {
    id: 'marines', src: marinesSrc, location: locations.veracruz,
    date: new Date('1914-05-16T00:00:00-04:00'),
    description: 'US Marines and Army troops continued to occupy the city until late November 1914.',
    srcUrl: 'https://www.loc.gov/item/2010651723/',
    citation: 'Marines Marching to Station - Mexican War. 16 May 1914. Photograph. Retrieved from the Library of Congress.'
  },
  {
    id: 'ussDolphin', src: ussDolphinSrc, location: locations.tampico,
    date: new Date('1914-04-09T00:00:00-04:00'),
    description: '',
    srcUrl: 'https://www.loc.gov/item/2004673121/',
    citation: 'U.S.S. DOLPHIN, 1913-1921: Starboard side view, at pier, Aug. 1915. Photograph. Retrieved from the Library of Congress.'
  },
  {
    id: 'locZevon', src: locZevonSrc, location: locations.losAngeles,
    date: new Date('1978-01-08T00:00:00-08:00'),
    description: 'In 1977 Warren Zevon and Jorge Calderón recorded the song “Veracruz”, a ballad dramatizing the US occupation. It was released on the album _Excitable Boy_, which also included “Roland the Headless Thompson Gunner” and “Lawyers, Guns, and Money”, satirical takes on Cold War adventurism in Africa and Latin America, respectively.',
    srcUrl: 'https://lccn.loc.gov/99568272',
    citation: 'Library of Congress. Catalog record for Zevon, Warren, Excitable Boy. LC Catalog, 1978.'
  }
]

//     width: 1564px;
// height: 1604px;

const mw = 1564
const mh = 1604

const docItemsRef: Ref<Array<HTMLElement>> = ref([])

onMounted(init)
onUnmounted(() => resizeObserver.disconnect())

function init() {
  const mapVal = mapRef.value;
  if (mapVal == null) {
    return
  }

  let docItems = docItemsRef.value;

  for (const doc of documents) {
    for (const docItem of docItems) {
      if (doc.id == docItem.id) {
        for (const child of docItem.children) {
          if (child.tagName == 'IMG') {
            const imgElement = <HTMLElement>child
            const cssClass = imgElement.getAttribute('class')
            if (cssClass == 'icon') {
              doc.iconImg = imgElement
            } else if (cssClass == 'document') {
              doc.docImg = imgElement
            }
          }
        }
        break
      }
    }
  }

  setIconLocations()

  resizeObserver.observe(mapVal)
}

function setIconLocations() {
  const mapVal = mapRef.value;
  if (mapVal == null) {
    return
  }

  const map: HTMLElement = mapVal
  const mapWidth = map.offsetWidth
  const mapHeight = map.offsetHeight

  const xRatio = mapWidth / mw
  const yRatio = mapHeight / mh

  for (const doc of documents) {
    let top: number, left: number
    [left, top] = doc.location

    let scaledTop = top * xRatio;
    let scaledLeft = left * yRatio;

    let iconImg = doc.iconImg;
    if (iconImg) {
      const iconWidth = iconImg.offsetWidth
      const iconHeight = iconImg.offsetHeight

      const iconTopPx = `${scaledTop - (iconHeight / 2)}px`;
      const iconLeftPx = `${scaledLeft + (iconWidth / 2)}px`;

      const iconStyle = iconImg.style
      iconStyle.top = iconTopPx
      iconStyle.left = iconLeftPx

      let docImg = doc.docImg;
      if (docImg) {
        const docTopPx = `${scaledTop}px`
        const docLeftPx = `${scaledLeft + 2 * iconWidth}px`
        const docStyle = docImg.style
        docStyle.top = docTopPx;
        docStyle.left = docLeftPx;
      }
    }
  }
}

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      setIconLocations()
    }
  }
})

</script>

<template>
  <article class="veracruz">
    <img class="map" ref="mapRef" :src="mapSrc"/>
    <ul class="documents">
      <li v-for="document in documents" ref="docItemsRef" :id="document.id" :key="document.id">
        <img :src="iconSrc" class="icon"/>
        <img :src="document.src" class="document"/>
      </li>
    </ul>
  </article>
</template>

<style lang="scss">
@use '../../../../_colors';

article.veracruz {
  position: relative;
  background-color: black;

  img.map {
    position: relative;
    width: 100%;
    z-index: 0;
  }

  ul.documents {
    display: contents;

    li {
      display: contents;

      // TODO: make icons/images clickable (use checkbox)
      img.icon {
        height: 1rem;
        width: 1rem;

        position: absolute;
        z-index: 1;

        filter: invert(1);
        transition: filter 0.25s, box-shadow 0.25s;
        box-shadow: 0 0 2px 2px white;

        &:hover + img.document {
          z-index: 2;
        }
      }

      img.document {
        width: 15%;

        position: absolute;
        z-index: -2;
        border: 1px solid black;
      }
    }
  }
}
</style>
