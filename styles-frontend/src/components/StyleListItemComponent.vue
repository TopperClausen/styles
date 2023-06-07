<script lang="ts" setup>
import axios from 'axios';
import type { Style } from '../schemas/style';
import ButtonComponent from '@/components/ButtonComponent.vue';

export interface Props {
    style: Style
}

const props = withDefaults(defineProps<Props>(), {});

const deleteStyle = () => {
    axios.delete(`http://localhost:3000/API/styles/${props.style.id}`)
        .then(() => {
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
        });
}
</script>

<template>
    <li class="flex space-x-2 justify-between border-b py-2 px-2">
        <div class="flex">
            <img :src="style.imageUrl" class="h-16" />
            <div class="px-2">
                <h3 class="text-lg"> {{ style.name }} </h3>
                <span> {{ style.price }} .- </span>
            </div>
        </div>
        <div class="space-x-2 flex items-center">
            <ButtonComponent :is-button="false"  :to="`/styles/edit/${style.id}`"> Rediger </ButtonComponent>
            <ButtonComponent buttonType="danger" :click="deleteStyle"> Slet </ButtonComponent>
        </div>
    </li>
</template>
