<script setup lang="ts">
import {computed, ref} from "vue";
import Markdown from 'vue3-markdown-it';

import archiveIcon from './assets/images/archive.svg'
import closeIcon from './assets/images/times-circle.svg'

import type {ArchiveDoc} from './types/ArchiveDoc'

const props = defineProps<{
  doc: ArchiveDoc,
  xScale: number,
  yScale: number
}>()

const inputId = computed(() => props.doc.id)

const x = computed(() => props.doc.location[0])
const y = computed(() => props.doc.location[1])

const topPx = computed(() => {
  const yActual = y.value * props.yScale
  console.log('topPx: %o * %o => %o', y.value, props.yScale, yActual)
  return `${yActual}px`
})

const leftPx = computed(() => {
  const xActual = x.value * props.xScale
  console.log('leftPx: %o * %o => %o', x.value, props.xScale, xActual)
  return `${xActual}px`
})

const style = computed(() => `top: ${topPx.value}; left: ${leftPx.value};`)

const visible = ref(false)

</script>

<template>
  <div class="vc-document" :style="style">
    <input :id="inputId" type="checkbox" v-model="visible">
    <label class="vc-document-icon" :for="inputId"><img class="vc-icon" :src="archiveIcon" alt="document"/></label>
    <div class="vc-document-details">
      <img class="vc-document-img" :src="doc.src" alt="doc.id"/>
      <input :id="`details-${inputId}`" type="checkbox" v-model="visible">
      <label class="vc-document-close" :for="`details-${inputId}`">
        <img class="vc-icon" :src="closeIcon" alt="document"/>
      </label>
      <div class="vc-document-details-text">
        <Markdown :source="doc.description" class="vc-document-details-description"/>
        <section class="vc-citation">
          <h3>Source</h3>
          <Markdown :source="doc.citation"/>
          <p><a :href="doc.srcUrl">{{ doc.srcUrl }}</a></p>
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
div.vc-document {
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,700;0,900;1,300;1,500;1,700;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  position: absolute;
  display: grid;
  grid-template-columns: min-content minmax(0, 1fr);
  justify-content: start;
  gap: 0.5rem;

  input[type=checkbox] {
    display: none;

    &:not(:checked) ~ div.vc-document-details {
      display: none;
    }

    // TODO: share styles w/label hover
    &:checked ~ label.vc-document-icon {
      img {
        filter: invert(1);
        transition: filter 0.25s;
      }

      background: black;
      box-shadow: 0 0 3px 1px black;
      transition: background 0.25s, box-shadow 0.25s;
    }
  }

  img.vc-icon {
    display: block;
    height: 1rem;
    width: 1rem;
  }

  label.vc-document-icon {
    grid-column: 1;
    grid-row: 1;

    display: block;
    width: min-content;
    height: min-content;

    // TODO: share styles w/checked checkbox
    &:hover {
      img {
        filter: invert(1);
        transition: filter 0.25s;
      }

      background: black;
      box-shadow: 0 0 3px 1px black;
      transition: background 0.25s, box-shadow 0.25s;
    }
  }

  div.vc-document-details {
    position: relative;

    grid-row: 1;
    grid-column: 2;

    background-color: white;
    box-shadow: 0 0 3px 1px black;
    display: grid;
    grid-template-columns: min-content minmax(0, 1fr);
    grid-template-rows: min-content minmax(0, 1fr);

    img.vc-document-img {
      grid-row: 1 / 3;
      grid-column: 1;

      display: block;
      max-width: 300px;
      max-height: 300px;
    }

    label.vc-document-close {
      grid-row: 1;
      grid-column: 2;
      margin-left: auto;
      padding: 0.2rem;
    }

    div.vc-document-details-text {
      grid-row: 2;
      grid-column: 2;

      max-width: 300px;
      padding: 0.5rem;
      font-family: Arvo, serif;
      font-size: 0.9rem;
      line-height: 1.2em;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      section.vc-citation {
        margin-top: 1rem;
        font-size: 0.6rem;
        line-height: 1.2em;
        font-family: Montserrat, sans-serif;

        h3 {
          font-family: Montserrat, sans-serif;
          font-weight: bold;
          font-size: 1em;
          margin-bottom: 0.2em;
        }

        p {
          margin-top: 0.4em;
        }
      }
    }

    em {
      font-style: italic;
    }

  }
}
</style>
