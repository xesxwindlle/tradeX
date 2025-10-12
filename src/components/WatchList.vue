<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { watchlistStore } from '@/stores/watchlist_store';
const wls = watchlistStore();

onMounted (() => {
     wls.refreshWatchings();
})
</script>

<template>
     <div class="panel">
        <h2 class="panel-title">Watchlist</h2>
        <li v-for="symbol in wls.watchings.keys()">
            <div class="list-item">
                <li>{{ symbol }}</li>
                <li>Current Price : {{ wls.getCurrenPrice(symbol) }}</li>
                <li>Pirce Change : {{ wls.getDayChange(symbol) }}</li>
                <li>Percent Chnage : {{ wls.getPercentChange(symbol) }}</li>
                <li>Day High : {{ wls.getDayHigh(symbol) }}</li>
                <li>Day Low : {{ wls.getDayLow(symbol) }}</li>
                <li>Opening Price : {{ wls.getDayOpen(symbol) }}</li>
                <li>Previous Day Closign Price : {{ wls.getPrevClose(symbol) }}</li>
            </div>
        </li>
    </div>
</template>

<style scoped></style>