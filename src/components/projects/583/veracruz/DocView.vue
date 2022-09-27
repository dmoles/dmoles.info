<script setup lang="ts">
import {computed} from "vue";
import Markdown from 'vue3-markdown-it';

import iconSrc from './assets/images/archive.svg'

import type {ArchiveDoc} from './types/ArchiveDoc'

const props = defineProps<{
  doc: ArchiveDoc
}>()

const inputId = computed(() => props.doc.id)

</script>

<template>
  <div class="document">
    <input :id="inputId" type="checkbox">
    <label class="icon" :for="inputId"><img :src="iconSrc" alt="document"/></label>
    <div class="details">
      <img :src="doc.src" alt="doc.id"/>
      <Markdown :source="doc.description"/>
      <Markdown :source="doc.citation"/>
      <p><a :href="doc.srcUrl">{{doc.srcUrl}}</a></p>
    </div>
  </div>
</template>

<style lang="scss">
div.document {
  position: absolute;
  display: grid;
  grid-template-columns: min-content minmax(0, 1fr);
  justify-content: start;
  gap: 0.5rem;

  input[type=checkbox] {
    display: none;

    &:not(:checked) ~ div.details {
      display: none;
    }
  }

  label.icon {
    grid-column: 1;
    grid-row: 1;

    display: block;
    width: min-content;
    height: min-content;

    img {
      display: block;
      height: 1rem;
      width: 1rem;
    }
  }

  div.details {
    grid-row: 1;
    grid-column: 2;

    img {
      display: block;
      max-width: 25vw;
      max-height: 25vh;
    }
  }
}
</style>
