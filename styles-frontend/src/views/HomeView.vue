<script setup lang="ts">
import ProductsContainer from '@/components/containers/ProductsContainer.vue';
import ProductComponent from '@/components/ProductComponent.vue';

</script>

<template>
  <main>
    <ProductsContainer v-slot="{ styles }">
      <ul class="grid grid-cols-1 md:grid-cols-6 md:grid-flow-col gap-3">
        <ProductComponent v-for="style in styles" tag="li" :style="style" />
      </ul>
    </ProductsContainer>
  </main>
</template>
