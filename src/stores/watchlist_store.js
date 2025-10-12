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

  async function printQuote(symbol) {
    const url = getStockQuote(symbol);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }

  async function displayWatchings() {
    for (const watching of watchings) {
      console.log(watching);
    }
    // const result = await yahooFinance.quoteSummary(stock, { modules: ['price'] });
    // console.log(result);
    // console.log(result.price.regularMarketPrice);
  }


  return { addWatching, printQuote};
});

export { watchlistStore };

