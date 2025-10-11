<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { watchlistStore } from '@/stores/watchlist_store';
const wls = watchlistStore();

</script>

<template>
     <div class="panel">
        <h2 class="panel-title">Watchlist</h2>
        <div class="list-item"><span>AAPL</span> <span>172.25</span></div>
        <div class="list-item"><span>GOOGL</span> <span>139.83</span></div>
        <div class="list-item"><span>TSLA</span> <span>263.62</span></div>
    </div>
</template>

<style scoped></style>