<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { watchlistStore } from '@/stores/watchlist_store';
const wls = watchlistStore();

onMounted (() => {
     wls.displayWatchings();
})

</script>

<template>
     <div class="panel">
        <h2 class="panel-title">Watchlist</h2>
        <li v-for="watching in wls.watchings" >
        <div class="list-item"><span>{{ watching }}</span> <span>{{watching }}</span></div>

        </li>
    </div>
</template>

<style scoped></style>