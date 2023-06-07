<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <nav class="h-12 px-4 shadow mb-5 bg-white">
        <ul class="flex flex-row-reverse h-full items-center">
            <li>
                <router-link class="bg-gray-200 py-2 px-1 rounded bg-opacity-60 hover:bg-opacity-80" to="/styles"> Redigér styles </router-link>
            </li>
        </ul>
    </nav>
</template>
