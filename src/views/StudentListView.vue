<script setup lang="ts">
import StudentCard from '../components/StudentCard.vue'
import type { StudentItem } from '@/StudentType'
import { ref, type Ref } from 'vue'
import StudentService from '@/services/StudentService'
const students: Ref<Array<StudentItem>> = ref([])

StudentService.getStudent().then((response) =>{
  students.value = response.data
})
</script>

<template>
  <h1 Events For Good></h1>
  <main class="events">
    <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
  </main>
</template>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
