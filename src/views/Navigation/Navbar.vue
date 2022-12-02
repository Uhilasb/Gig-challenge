<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
    <div class="w-full h-16  bg-mainColor flex items-center justify-between">
        <div class="ml-5 md:ml-6 text-white text-justify">
            <a href="#" class="text-lg">Contact-app</a>
        </div>
        <div class="mr-5 md:mr-10 flex gap-5">
            <router-link class="text-lg text-white" :to="{ name: 'home'}">Home</router-link>
            <router-link class="text-lg text-white" :to="{ name: 'create'}">Add Contact</router-link>
        </div>
    </div>
</template>