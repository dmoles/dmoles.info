<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";
import type {Ref} from "vue"
import mapSrc from './assets/images/united-fruit-company-map.jpg'

// ------------------------------------------------------------
// Map scale management

import { useGeometryStore } from './stores/geometry'
const geom = useGeometryStore()

const mapRef: Ref<HTMLElement | null> = ref(null)

const { mapWidth, mapHeight, xScale, yScale } = storeToRefs(geom)


function rescale() {
  const mapVal = mapRef.value;
  if (mapVal == null) {
    return
  }

  const map: HTMLElement = mapVal
  const w = map.offsetWidth;
  const h = map.offsetHeight;

  console.log('setting mapWidth => %o', w)
  console.log('setting mapHeight => %o', h)

  mapWidth.value = w
  mapHeight.value = h

  console.log('…mapWidth = %o', mapWidth.value)
  console.log('…mapHeight = %o', mapHeight.value)
}

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      rescale()
    }
  }
})

onMounted(() => {
  const mapVal = mapRef.value
  if (mapVal == null) {
    return
  }
  rescale()
  resizeObserver.observe(mapVal)
})

onUnmounted(resizeObserver.disconnect)

// ------------------------------------------------------------
// Documents

import DocView from "./DocView.vue";
import {storeToRefs} from "pinia";
import {useDocumentStore} from "./stores/documents";

const {documents} = storeToRefs(useDocumentStore())


</script>

<template>
  <div class="vc-map">
    <img class="vc-map-image" ref="mapRef" :src="mapSrc" alt="Map"/>
    <DocView
      v-for="doc in documents"
      :doc="doc"
      :x-scale="xScale"
      :y-scale="yScale"
    />
  </div>
</template>

<style lang="scss">
div.vc-map {
  position: relative;
  background-color: black;

  img.vc-map-image {
    width: 100%;
    z-index: 0;
  }

  .vc-timeline {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
