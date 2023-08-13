<template>
  <RouterLink class="event-link" :to="{name: 'event-detail', params:{id: event?.id}}">
    <div class="event-class">
    <div class="event-card rounded-xl border-indigo-400 border-4">
      <span>@{{ event?.time }} on {{ event?.date }}</span>
      <h4>{{ event?.title }}</h4>
    </div>
  </div>
  </RouterLink>
</template>

<script setup lang="ts">
import type {EventItem} from '@/type'
import type {PropType} from 'vue'
const props = defineProps ({
    event: {
        type: Object as PropType<EventItem>,
            required: true
    }
})
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  margin-bottom: 18px;
}

.event-card:hover {
  transfrom: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
