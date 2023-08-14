<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from './stores/message'
import { storeToRefs } from 'pinia'

const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <header class="max-h-screen leading-normal">
    <div id="flashMessage" v-if="message">
      <h4>{{ message }}</h4>
    </div>
    <div class="bg-sky-300">
      <div class="items-center font-bold">Ratchaporn</div>
      <nav class="p-8 text-black text-xl">
      <RouterLink class="focus:text-indigo-700" :to="{ name: 'EventList' }">Home </RouterLink>
      <RouterLink class="focus:text-indigo-700 ml-10" :to="{ name: 'about' }">About </RouterLink>
      <RouterLink class="focus:text-indigo-700 ml-10" :to="{ name: 'menu' }">Menu </RouterLink>
      <RouterLink class="focus:text-indigo-700 ml-10" :to="{ name: 'student' }">Student</RouterLink>
    </nav>
    </div>
    
    <h1 class="underline text-xl italic font-bold">Event for good</h1>
  </header>

  <RouterView />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



.logo {
  display: block;
  margin: 0 auto 2rem;
}
h4 {
  font-size: 20px;
}

@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation: yellowfade 3s ease-in-out;
}
</style>
