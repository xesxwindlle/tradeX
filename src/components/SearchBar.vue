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
    <div class="search-bar">
        <form action="">
            <input type="text" v-model="symbol" placeholder="Enter Stock Symbol" autocomplete="off" spellcheck="false">
            <button @click.prevent="addWatching">Search</button>
        </form>
    </div>
</template>


<style scoped>

.search-bar {
    background: gray;
}

input {
    border: 3px solid gray;
    background: white;
}

button {
    background: aquamarine;
    border-radius: 10px;
    color : black;
}
</style>