<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import type { EventItem } from '@/type'
import { computed, ref, type Ref } from 'vue'
import EventService from '@/services/EventService'
import Nprogress from 'nprogress'
import { useRouter } from 'vue-router'
import type { AxiosResponse } from 'axios'
import { watchEffect } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
const events: Ref<Array<EventItem>> = ref([])
const totalEvent = ref<number>(0)
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
const perPage = ref<number>(3)
const router = useRouter()


  EventService.getEvent(perPage.value, props.page).then((response: AxiosResponse<EventItem[]>) => {
    events.value = response.data
    totalEvent.value = response.headers['x-total-count']
  }) .catch(() => {
    router.push({ name: 'NetworkError' })
  
  })
  onBeforeRouteUpdate((to, from, next) =>{
    const toPage = Number(to.query.page)
    
    EventService.getEvent(3, toPage).then((response: AxiosResponse<EventItem[]>) => {
      events.value = response.data
      totalEvent.value = response.headers['x-total-count']
      next()
    }).catch(() => {
      next({ name: 'NetworkError' })
    
    })
  })

const hasNextPage = computed(() => {
  //first calculate the total page
  const totalPages = Math.ceil(totalEvent.value / perPage.value)
  return props.page.valueOf() < totalPages
})
</script>

<template>
  <h1 Events For Good></h1>
  <main class="flex flex-col items-center">
    <div>
      <label for="perPage">Event / Pages</label>
      <select id="perPage" v-model="perPage">
        <option>2</option>
        <option>4</option>
        <option>6</option>
      </select>
    </div>
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    <div class="pagination">
      <RouterLink :to="{ name: 'EventList', query: { page: page - 1 } }" rel="prev" v-if="page != 1"
        >Prev Page</RouterLink
      >
      <RouterLink
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next Page</RouterLink
      >
    </div>
  </main>
</template>

<style scoped>

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
