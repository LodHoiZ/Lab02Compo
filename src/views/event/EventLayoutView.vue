<script setup lang="ts">
import { useEventStore } from '@/stores/event';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'
import { useRouter } from 'vue-router'



const router = useRouter()
const store = useEventStore()
const event = storeToRefs(store).event
const id = ref(event?.value?.id)
</script>
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link class=" text-black border-4 border-indigo-400" :to="{ name: 'event-detail', params: { id } }">Details</router-link>
      |
      <router-link class=" text-black border-4 border-indigo-400" :to="{ name: 'event-register', params: { id } }">Register</router-link>
      |
      <router-link class=" text-black border-4 border-indigo-400" :to="{ name: 'event-edit', params: { id } }">Edit</router-link>
    </div>

    <RouterView :event="event"></RouterView>
  </div>
</template>
