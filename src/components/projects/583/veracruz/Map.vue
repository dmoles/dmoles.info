<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";
import type {Ref} from "vue"
import mapSrc from './assets/images/united-fruit-company-map.jpg'

// ------------------------------------------------------------
// Map scale management

const mapRef: Ref<HTMLElement | null> = ref(null)
const xScale = ref(1.0)
const yScale = ref(1.0)

const mw = 1564
const mh = 1604

function rescale() {
  const mapVal = mapRef.value;
  if (mapVal == null) {
    return
  }

  const map: HTMLElement = mapVal
  const mapWidth = map.offsetWidth
  const mapHeight = map.offsetHeight

  xScale.value = mapWidth / mw
  yScale.value = mapHeight / mh

  console.log('xScale: %o / %o = %o', mapWidth, mw, xScale.value)
  console.log('yScale: %o / %o = %o', mapHeight, mh, yScale.value)
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
  resizeObserver.observe(mapVal)
})

onUnmounted(resizeObserver.disconnect)

// ------------------------------------------------------------
// Documents
import {documents} from './data/documents'
import DocView from "./DocView.vue";

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
}
</style>
