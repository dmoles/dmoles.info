<script setup lang="ts">
import { Organization} from "./types/Organization";
import {computed} from "vue";

const props = defineProps<{
  organizations: Array<Organization>
}>()

const hasOrganizations = computed(() => Array.isArray(props.organizations) && props.organizations.length > 0)
</script>

<template>
  <ul class="organizations">
    <template v-if="hasOrganizations" v-for="org in organizations">
      <li>
        <a :href="org.link" :title="org.name">{{ org.abbr }}</a>
      </li>
    </template>
  </ul>
</template>
