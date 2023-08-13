<script setup lang="ts">
import type { Ref } from 'vue'
import type { EventItem } from '@/type'
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'

const props = defineProps({
  event: {
    type: Object as PropType<EventItem>,
    require: true
  }
})
const router = useRouter()
const store = useMessageStore()
function edit() {
  store.updateMessage('You have successfully edit. ' + props.event?.title)
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({
    name: 'event-detail',
    params: {
      id: props.event?.id
    }
  })
}
</script>
<template>
  <p>Edit the event here</p>
  <button @click="edit">Edit here</button>
</template>
