<script setup lang="ts">

import { storeToRefs } from "pinia"
import { usePublicationsStore } from "../stores/publications"

const { publications } = storeToRefs(usePublicationsStore())
</script>

<template>
  <ul class="publications">
    <template v-for="pub in publications">
      <li>
        <a :href="pub.link" target="_blank">{{ pub.name }}</a>
        ({{ pub.desc }}).
        {{ pub.venue }}, {{ pub.date }}.
      </li>
    </template>
  </ul>
</template>

<style lang="scss">
ul.publications {
  li {
    margin-bottom: 0.5em;
  }
}
</style>
