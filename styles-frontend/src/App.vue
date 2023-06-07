<script setup lang="ts">
import Navigator from "./components/Navigator.vue";
</script>

<template>
  <header>
    
  </header>
  
  <body class="bg-gray-50 h-screen">
    <Navigator />
    <main class="px-2">
      <RouterView />
    </main>
  </body>
</template>
