<script setup>
import { watchlistStore } from '@/stores/watchlist_store';
const wls = watchlistStore();

</script>
<template>
    <div class="search-bar">
        <form action="">
            <input type="text" v-model="wls.stock" placeholder="Enter Stock Symbol" autocomplete="off" spellcheck="false">
            <button @click.prevent="wls.hey">Search</button>
          
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