<script setup lang="ts">
import Navigator from "./components/Navigator.vue";
import FlashMessageComponent from "./components/FlashMessageComponent.vue";
</script>

<template>
  <header>
    
  </header>
  
  <body class="bg-gray-50 h-screen">
    <Navigator />
    <main class="px-2">
      <FlashMessageComponent />
      <RouterView />
    </main>
  </body>
</template>
