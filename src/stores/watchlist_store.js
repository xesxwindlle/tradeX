import { defineStore } from "pinia";
import { ref } from "vue";
import { getStockQuote } from "@/library/util";

const watchings = ref(new Set());
// const stock = ref("");

const watchlistStore = defineStore("watchlist", () => {


  function addWatching(symbol) { 
    //if the stock exists...
    watchings.value.add(symbol);
    console.log(watchings.value);
  }

  function displayWatchings() {
    // console.log(watchings);
    setInterval(async () => {
      for (let symbol of watchings.value) {
      const url = getStockQuote(symbol);
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    }
  }, 5000);
}


  return { addWatching, watchings, displayWatchings};
});

export { watchlistStore };

