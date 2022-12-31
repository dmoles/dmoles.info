<script setup lang="ts">
import {Course} from "./types/Course";
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
<!--      <figure v-if="course.projects">-->
<!--        <figcaption>projects</figcaption>-->
<!--        <ul>-->
<!--          <li v-for="project in course.projects">-->
<!--            <a :href="project.link">{{ project.name }}</a>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </figure>-->
    </dd>
  </template>
  <template v-else>
    (none)
  </template>
</dl>
</template>

<style lang="scss">
dl.courses {
  display: grid;
  grid-template-columns: min-content minmax(0, 1fr);
  column-gap: 0.5rem;
  row-gap: 0.3rem;

  dt {
    grid-column: 1;
    justify-self: end;
    font-variant-numeric: tabular-nums;
  }

  dd {
    //display: contents;
    //
    //> a {
    //  grid-column: 2;
    //}

    figure {
      grid-column: 2;
      margin-top: 0.45rem;
      //display: contents;
      //font-size: 0.8rem;

      figcaption {
        //grid-column: 1;
        justify-self: end;

        font-family: Montserrat, 'sans-serif';
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.729rem;
      }

      ul {
        //grid-column: 2;
        font-size: 0.9rem;

        li:not(:last-of-type) {
          margin-bottom: 0.15rem;
        }
      }
    }
  }
}
</style>
