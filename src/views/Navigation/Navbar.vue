<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
    <div class="w-full h-16  bg-mainColor">
        <div class="flex items-center h-16 justify-between container">
            <div class=" text-white text-justify">
                <a href="#" class="text-lg">Contact-app</a>
            </div>
            <div class=" flex gap-5">
                <router-link class="text-lg text-white" :to="{ name: 'home'}">Home</router-link>
                <!-- <router-link class="text-lg text-white" :to="{ name: 'create'}">Add Contact</router-link> -->
            </div>
        </div>
    </div>
</template>