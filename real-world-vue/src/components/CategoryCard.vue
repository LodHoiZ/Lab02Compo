
  
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

  <template>
    <div class="category-card">
      <div class-="category-card">
        <span>@{{ event.category }} on {{ event.organizer }}</span>
      </div>
    </div>
  </template>

  <style scoped>
  .category-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
  }
  
  .category-card :hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
  </style>
  