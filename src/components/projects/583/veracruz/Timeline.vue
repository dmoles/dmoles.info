<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useDocumentStore} from "./stores/documents";
import {ArchiveDoc} from "./types/ArchiveDoc";

const {documents} = storeToRefs(useDocumentStore())
const {docSelected, shortDesc} = useDocumentStore()

function toggleSelection(doc: ArchiveDoc) {
  console.log('toggling %o', doc.id)
  const selected = docSelected(doc)
  const wasSelected = selected.value;
  console.log('%o => %o', wasSelected, !wasSelected)

  selected.value = !wasSelected
}
</script>

<template>
  <div class="vc-timeline">
    <h3>Timeline</h3>
    <ul>
      <li v-for="doc in documents">
        <button @click="toggleSelection(doc)">{{ shortDesc(doc).value }}</button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
div.vc-timeline {
  background: #d4be90;
  border: 1px solid black;
  padding: 1rem;
  display: block;

  h3 {
    text-transform: uppercase;
    font-family: Arvo, serif;
    font-size: 1.2rem;
    font-weight: bold;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    li {
      display: block;
      margin: 1rem;
      padding: 0;

      button {
        display: block;
        appearance: none;
        background: none;
        border: none;
        font-family: Arvo, serif;
        font-size: 0.8rem;
        line-height: 1.2em;
        white-space: nowrap;
        padding: 0;
        margin: 0;
        text-decoration: underline;
      }
    }
  }

}
</style>
