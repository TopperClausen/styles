<script lang="ts" setup>
import type { Style } from '../schemas/style';
import StorageComponent from './StorageComponent.vue';

export interface Props {
    tag?: string,
    style: Style
}

const props = withDefaults(defineProps<Props>(), {
    tag: 'div'
});
</script>

<template>
    <component :is="tag" class="bg-white hover:shadow-md">
        <div class="flex justify-center">
            <img :src="style.imageUrl" class="w-64 h-64" alt="Billede af produktet">
        </div>
        <div class="mt-2 px-2 pb-2">
            <h3 class="text-lg"> {{ style.name  }} </h3>
            <StorageComponent :storage="5" />
            <div class="flex justify-between">
                <p class="font-bold text-2xl"> {{ style.price }} .- </p>
                <a href="#" class="mt-2 text-blue-700 hover:underline"> Se lager </a>
            </div>
        </div>
    </component>
</template>