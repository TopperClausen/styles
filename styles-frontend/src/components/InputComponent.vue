<script lang="ts" setup>
import type { Style } from '@/schemas/style';
import { computed } from '@vue/reactivity';

export interface Props {
    hidden: boolean,
    type?: string,
    placeholder: string
    modelValue: any
}

const emit = defineEmits();
const props = withDefaults(defineProps<Props>(), {
    hidden: false,
    type: 'text'
});

const input = computed({
    get() {
        return props.modelValue;
    },
    set(value: any) {
        return emit('update:modelValue', value);
    }
});

const hiddenClass = computed({
    get() {
        return props.hidden ? 'hidden' : '';
    },
    set() {
        return;
    }
});

</script>

<template>
    <input :type="props.type"
        :class="`${hiddenClass} appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-600 leading-tight focus:outline-none focus:shadow-outline`" 
        v-model="input" 
        :placeholder="placeholder"
    />
</template>