<script lang="ts" setup>
import { ref } from 'vue';
import { useFlashStore } from '@/stores/flash';
import type { Flash } from '@/schemas/Flash';

const flash = useFlashStore();

</script>

<template>
    <div v-if="flash.time > 0" class="absolute right-1 w-96 px-2 py-3 shadow bg-white rounded-lg ring-1">
        <div class="flex space-x-3">
            <div>  </div>
            <div>
                <p> {{ flash.message }} </p>
            </div>
        </div>
    </div>
</template>