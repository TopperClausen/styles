<script lang="ts" setup>

export interface Props {
    isButton?: boolean
    to?: any,
    buttonType?: string
    click?: () => void
}

const props = withDefaults(defineProps<Props>(), {
    isButton: true,
    buttonType: 'primary'
});

const buttonClasses = () => {
    switch (props.buttonType) {
        case 'primary':
            return 'bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded';
        case 'danger':
            return 'bg-red-500 hover:bg-red-600 text-white py-2 px-2 rounded';
        default:
            return 'bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded';
    }
}
</script>

<template>
    <button v-if="isButton" :class="buttonClasses()" @click="click">
        <slot></slot>
    </button>
    <router-link v-else :class="buttonClasses()" :to="to"> <slot></slot> </router-link>
</template>
