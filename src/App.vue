<script setup>
import Panel from './components/Panel.vue'
import WatchList from './components/WatchList.vue';
import SearchBar from './components/SearchBar.vue';
import Chart from './components/Chart.vue';
import OrderBook from './components/OrderBook.vue';
</script>

<template>
  <!-- <h1>Hello</h1> -->
  <!-- <Panel></Panel> -->
  <header class="header">
        <div class="header-brand">TradeX</div>
    </header>

    <div class="main-container">
        <aside class="sidebar-left">
            <SearchBar></SearchBar>
            <WatchList></WatchList>
        </aside>

        <main class="main-content">
            <Chart></Chart>
        </main>

        <aside class="sidebar-right">
            <OrderBook></OrderBook>
        </aside>
    </div>

</template>

<style scoped></style>
