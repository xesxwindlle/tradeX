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
        <!-- <li v-for="symbol in wls.watchings.keys()"> -->
            <div class="list-item">
                <table>
                    <thead>
                        <tr class="first-row">
                            <th scope="row">Symbol</th>
                            <th>Current Price</th>
                            <th>Price Change</th>
                            <th>Price Change (%)</th>
                            <th>Day High</th>
                            <th>Day Low</th>
                            <th>Openning Price</th>
                            <th>Previous Closing Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="symbol in wls.watchings.keys()">
                            <th scope="row">{{ symbol }}</th>
                            <td>{{ wls.getCurrenPrice(symbol) }}</td>
                            <td :class="{'gain': wls.getDayChange(symbol) > 0, 'loss': wls.getDayChange(symbol)< 0, 'static' : wls.getDayChange(symbol)}">{{ wls.getDayChange(symbol) }}</td>
                            <td :class="{'gain': wls.getDayChange(symbol) > 0, 'loss': wls.getDayChange(symbol)< 0, 'static' : wls.getDayChange(symbol)}">{{ wls.getPercentChange(symbol) }}</td>
                            <td>{{ wls.getDayHigh(symbol) }}</td>
                            <td>{{ wls.getDayLow(symbol) }}</td>
                            <td>{{ wls.getDayOpen(symbol) }}</td>
                            <td>{{ wls.getPrevClose(symbol) }}</td>
                        </tr>
                    </tbody>
                </table>

                <!-- <li>{{ symbol }}</li>
                <li>Current Price : {{ wls.getCurrenPrice(symbol) }}</li>
                <li>Pirce Change : {{ wls.getDayChange(symbol) }}</li>
                <li>Percent Chnage : {{ wls.getPercentChange(symbol) }}</li>
                <li>Day High : {{ wls.getDayHigh(symbol) }}</li>
                <li>Day Low : {{ wls.getDayLow(symbol) }}</li>
                <li>Opening Price : {{ wls.getDayOpen(symbol) }}</li>
                <li>Previous Day Closign Price : {{ wls.getPrevClose(symbol) }}</li> -->
            </div>
        <!-- </li> -->
    </div>
</template>

<style scoped>
</style>