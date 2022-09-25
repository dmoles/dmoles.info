<script setup lang="ts">
import {computed, ref} from "vue";
import type {Component, Ref} from "vue"
import {onMounted, onUnmounted} from 'vue'
import NotFound from './components/NotFound.vue'
import Profile from './components/profile/Profile.vue'
import Veracruz from './components/projects/583/veracruz/Veracruz.vue'


// ------------------------------------------------------------
// Window location/navigation state management

const location: Ref<URL> = ref(new URL(window.location.toString()))

const updateState: EventListener = (_event: Event) => {
  const oldLocation = location.value.toString()
  const newLocation = window.location.toString()
  if (oldLocation !== newLocation) {
    location.value = new URL(newLocation)
  }
}

onMounted(() => window.addEventListener('popstate', updateState))
onUnmounted(() => window.removeEventListener('popstate', updateState))

// ------------------------------------------------------------
// Routing

const rootComponent: Component = Profile

type Routes = { [k: string]: Component }
const routes: Routes = {
  '/': rootComponent,
  '/projects/583/veracruz/': Veracruz
}

const currentView = computed(() => {
  const rawPath: string = location.value.pathname
  var paths: Array<string> = [rawPath]
  if (!rawPath.endsWith('/')) {
    paths.push(`${rawPath}/`)
  }
  for (const path of paths) {
    const route = routes[path]
    if (route) {
      return route
    }
  }
  return NotFound
})

</script>

<template>
  <component :is="currentView"/>
</template>
