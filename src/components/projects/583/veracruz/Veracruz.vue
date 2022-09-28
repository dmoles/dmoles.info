<script setup lang="ts">
import Map from './Map.vue'
import Timeline from "./Timeline.vue"
</script>

<template>
  <article class="veracruz">
    <Timeline/>
    <Map/>
  </article>
</template>

<style lang="scss">
@use '../../../../_colors';

article.veracruz {
  position: relative;
  background-color: black;
  width: 100%;

  display: grid;
  grid-template-columns: min-content minmax(0, 1fr);
}
</style>
