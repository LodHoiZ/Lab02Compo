<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { EventItem } from '@/type'
import type { PropType } from 'vue'

defineProps({
  event: {
    type: Object as PropType<EventItem>,
    require: true
  }
})
</script>
<template>
  <div>
    <div v-if="event">
    <h1 class="italic text-2xl font-bold">{{ event.title }}</h1>
    <p class="underline">{{ event.time }} on {{ event.date }}</p>
    <p class="underline">See you at {{ event.location }}!!!</p>
    <p>{{ event.description }}</p>
  </div>
  </div>
  
</template>
