<script setup>
import { watchlistStore } from '@/stores/watchlist_store';
import { ref } from 'vue';

const wls = watchlistStore();
const symbol = ref("");

function addWatching() {
    wls.addWatching(symbol.value);
    symbol.value = ''; 
}

</script>
<template>
    <div>
        <form action="">
            <input id="search-bar"type="text" v-model="symbol" placeholder="Enter Stock Symbol" autocomplete="off" spellcheck="false">
            <button @click.prevent="addWatching">Search</button>
        </form>
    </div>
</template>


<style scoped>
</style>