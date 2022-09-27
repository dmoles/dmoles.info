<script setup lang="ts">
import type {Ref} from "vue"
import {onMounted, onUnmounted, ref} from "vue";

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

type Document = {
  id: string,
  src: string,
  location: [number, number],
  iconImg?: HTMLElement,
  docImg?: HTMLElement
}
const documents: Array<Document> = [
  {id: 'butler129', src: butler129Src, location: locations.washington},
  {id: 'butler133', src: butler133Src, location: locations.portAuPrince},
  {id: 'butler91', src: butler91Src, location: locations.colon},
  {id: 'marines', src: marinesSrc, location: locations.veracruz},
  {id: 'ussDolphin', src: ussDolphinSrc, location: locations.tampico},
  {id: 'locZevon', src: locZevonSrc, location: locations.losAngeles}
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
