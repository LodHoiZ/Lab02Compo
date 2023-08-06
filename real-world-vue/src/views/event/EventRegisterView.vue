<script setup lang="ts">
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
  <p>Registration from here</p>
</template>
