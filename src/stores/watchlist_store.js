import { defineStore } from "pinia";
import { ref } from "vue";
import { getStockQuote } from "@/library/util";

const watchings = ref(new Map());
// const stock = ref("");

const watchlistStore = defineStore("watchlist", () => {


  function addWatching(symbol) { 
    //if the stock exists...
    watchings.value.set(symbol, {});
    fetchQuote(symbol);
    // console.log(watchings.value.get(symbol));
  }

  async function fetchQuote(symbol) {
    const url = getStockQuote(symbol);
    const res = await fetch(url);
    const quote = await res.json();
    watchings.value.set(symbol, quote);
  }

  function refreshWatchings() {
    setInterval(async () => {
      for (let symbol of watchings.value.keys()) {
        fetchQuote(symbol);
        console.log(getQuote(symbol));
      }
    }, 5000); 
  }
  
  
  function getQuote(symbol) {
    return watchings.value.get(symbol);
   }
   
  function getCurrenPrice(symbol) {
    return getQuote(symbol).c;
  }

  function getDayChange(symbol) {
    return getQuote(symbol).d;
  }

  function getPercentChange(symbol) {
    return getQuote(symbol).dp;
  }

  function getDayHigh(symbol) {
    return getQuote(symbol).h;
  }

  function getDayLow(symbol) {
    return getQuote(symbol).l;
  }

  function getDayOpen(symbol) {
    return getQuote(symbol).o;
  }

  function getPrevClose(symbol) {
    return getQuote(symbol).pc;
  }
 
  return { addWatching, watchings, fetchQuote, refreshWatchings, getQuote, getCurrenPrice,
     getDayChange, getPercentChange, getDayHigh, getDayLow, getDayOpen, getPrevClose};
});

export { watchlistStore };

