<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import StorageComponent from '@/components/StorageComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue';

const route = useRoute();

const style = ref({
    id: undefined,
    name: "",
    description: "",
    imageUrl: "",
    price: 0
});

const populateModel = () => {
    axios.get(`http://localhost:3000/API/styles/${route.params.id}`)
        .then((response) => {
            style.value = response.data.style;
        })
        .catch((error) => {
            console.log(error);
        });
}

populateModel();

</script>

<template>
    <div class="flex justify-center">
        <div class="shadow ring-1 ring-gray-200 rounded bg-white px-3 py-2 w-full md:w-2/3">
            <h3 class="text-3xl"> {{ style.name  }} </h3>
            <span class="text-sm font-light"> Stylenumber #{{ style.id }} </span>
            <div class="md:flex">
                <div class="md:w-2/3">
                    <img :src="style.imageUrl" class="w-96 h-96 mt-2" alt="Billede af produktet">
                </div>
                <div class="md:w-1/3">
                    <div class="bg-gray-200 w-full rounded py-2 px-3">
                        <p class="font-bold text-2xl"> {{ style.price }} .- </p>
                        <p class="font-light"> + 45 .- for shipping </p>
                        <ButtonComponent class="w-full mt-4"> Køb </ButtonComponent>
                        <StorageComponent :storage="5" />
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <p class="text-lg"> {{ style.description }} </p>
            </div>
        </div>
    </div>
</template>