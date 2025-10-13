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
        <form  @submit.prevent="submitForm" action="">
            <input @keyup.enter.prevent="addWatching" id="search-bar"type="text" v-model="symbol" placeholder="Enter Stock Symbol" autocomplete="off" spellcheck="false">
            <i class="fa-solid fa-magnifying-glass" @click.prevent="addWatching"></i>
            <!-- <button id="search-btn"@click.prevent="addWatching">Search</button> -->
        </form>
    </div>
</template>


<style scoped>
</style>