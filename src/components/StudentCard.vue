<template>
    <div class="student-card rounded-xl border-indigo-400 border-4">
      <div class-="student-card">
        <span>@{{ student.name }}   {{ student.surname }}</span>
        <h4>{{ student.gpa }}</h4>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type {StudentItem} from '../StudentType'
  import type {PropType} from 'vue'
  const props = defineProps ({
      student: {
          type: Object as PropType<StudentItem>,
              required: true
      }
  })
  </script>
  
  <style scoped>
  .student-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    margin-bottom: 18px;
  }
  
  .student-card:hover {
    transfrom: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
  </style>