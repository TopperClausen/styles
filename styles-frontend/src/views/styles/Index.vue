<script lang="ts" setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
import StyleListItemComponent from '@/components/StyleListItemComponent.vue';
import ProductsContainer from '@/components/containers/ProductsContainer.vue';
</script>

<template>
    <div class="flex justify-center">
        <div class="bg-white shadow md:w-2/3 w-full rounded ring-1 ring-gray-200">
            <div class="flex items-center justify-between py-2 px-2 border-b">
                <span class="text-xl"> Styles </span>
                <ButtonComponent to="/styles/new" :is-button="false"> Opret style </ButtonComponent>
            </div>
            <ul>
                <ProductsContainer v-slot="{styles}">
                    <StyleListItemComponent v-for="style in styles" :key="style.id" :style="style" />
                </ProductsContainer>
            </ul>
        </div>
    </div>
</template>
 