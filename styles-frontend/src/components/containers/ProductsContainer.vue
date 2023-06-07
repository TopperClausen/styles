<script lang="ts" setup>
    import type { Style } from '@/schemas/style';
    import axios from 'axios';
    import { ref, onMounted, provide } from 'vue';

    const styles = ref<Style[]>([]);
    onMounted(() => {
        fetchStyles();
    });

    const fetchStyles = () => {
        axios.get('http://localhost:3000/API/styles')
            .then((response) => {
                styles.value = response.data.styles;
            }).catch(error => console.log(error));
        
    };
</script>

<template>
    <slot :styles="styles"></slot>
</template>
