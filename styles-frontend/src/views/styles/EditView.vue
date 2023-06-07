<script lang="ts" setup>
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import type { Style } from '@/schemas/style';
import { ref } from 'vue';
import axios from 'axios';
import router from '@/router';
import { useRoute } from 'vue-router'

const model = ref({
    id: undefined,
    name: "",
    description: "",
    imageUrl: "",
    price: 0
});

const route = useRoute();

const populateModel = () => {
    axios.get(`http://localhost:3000/API/styles/${route.params.id}`)
        .then((response) => {
            console.log(response.data.style);
            model.value = response.data.style;
            console.log(model.value)
        })
        .catch((error) => {
            console.log(error);
        });
}

populateModel();

const submit = (event: any) => {
    event.preventDefault();

    axios.put(`http://localhost:3000/API/styles/${route.params.id}`, { style: model.value })
        .then((response) => {
            router.push("/styles");
        })
        .catch( err => {
            console.log(err);
        });
}
</script>

<template>
    <div class="flex justify-center align-middle">
        <div class="md:w-1/3 shadow border bg-white">
            <div class="border-b p-2">
                <h3 class="text-lg"> Opret Style </h3>
            </div>
            <form action="" class="space-y-2 px-1 py-2">
                
                <InputComponent placeholder="" v-model="model.id" :hidden="true" />
                <InputComponent placeholder="Name" v-model="model.name" />
                <InputComponent placeholder="Description" type="rich-text" v-model="model.description" />
                <InputComponent placeholder="Url for image" type="url" v-model="model.imageUrl" />
                <InputComponent placeholder="Price" v-model="model.price" />

                <ButtonComponent buttonType="submit" :click="submit"> Opret style </ButtonComponent>
            </form>
        </div>
    </div>    
</template>
