<script setup lang="ts">
import {Course} from "../types/Course";
import {computed} from "vue";

const props = defineProps<{
  courses: Array<Course>
}>()

const hasCourses = computed(() => Array.isArray(props.courses) && props.courses.length > 0)
</script>

<template>
<dl class="courses">
  <template v-if="hasCourses" v-for="course in courses">
    <dt><a :href="course.url">{{ course.fullId }}</a></dt>
    <dd>
      <a :href="course.url">{{ course.name }}</a>
    </dd>
  </template>
  <template v-else>
    (none)
  </template>
</dl>
</template>

<style lang="scss">
</style>
