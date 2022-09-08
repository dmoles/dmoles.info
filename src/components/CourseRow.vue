<script setup lang="ts">

import {computed} from "vue";

const props = defineProps<{
  id: number
  name: string
}>()

const courseUrl = computed(() => `https://comminfo.rutgers.edu/academics/courses?courses=${props.id}&program=32`)

</script>

<template>
  <tr>
    <th scope="row">
      <a :href="courseUrl">17:610:{{ id }}</a>
    </th>
    <td>
      <a :href="courseUrl">{{ name }}</a>
    </td>
  </tr>
</template>
