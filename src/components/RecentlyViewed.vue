<script setup>
import { watchlistStore } from '@/stores/watchlist_store';
</script>
<template>
     <div class="panel">
        <h2 class="panel-title">RecentlyViewed</h2>
        <!-- <li v-for="symbol in wls.watchings.keys()"> -->
            <div class="list-item">
                <table>
                    <thead>
                        <tr>
                            <th>Symbol</th>
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
                        <tr>
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
<style scoped></style>