<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { defineProps, withDefaults } from 'vue';

export interface Props {
    storage: number
}

const props = withDefaults(defineProps<Props>(), {});

const storageText = computed({
    get() {
        if (props.storage > 0) {
            return 'På lager';
        } else {
            return 'Ikke på lager';
        }
    },
    set() {
        return;
    }
});

</script>

<template>
    <div class="flex text-green-500 text-center align-middle">
        <i class="bg-green-500 rounded-full w-3 h-3 text-transparent mt-1 mr-1">x</i>
        <span> {{ storageText  }} </span>
    </div>
</template>
