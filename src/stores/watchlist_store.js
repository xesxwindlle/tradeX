import { defineStore } from "pinia";
import { ref } from "vue";
import yahooFinance from 'yahoo-finance2';


// setInterval(()=> fetchStockData("MSFT"), 5000);

// async function fetchStockData(stock) {
//   const result = await yahooFinance.quoteSummary(stock, { modules: ['price'] });
//   console.log(result);
//   console.log(result.price.regularMarketPrice);
// }



const watchings = ref(new Set());
const stock = ref("");

const watchlistStore = defineStore("watchlist", () => {


  function addWatching() { 
    //if the stock exists...
    watchings.value.add(stock);
    console.log(watchings.value);
  }

  async function displayWatchings() {
    for (const watching of watchings) {
      console.log(watching);
    }
    // const result = await yahooFinance.quoteSummary(stock, { modules: ['price'] });
    // console.log(result);
    // console.log(result.price.regularMarketPrice);
  }





// setInterval(()=> fetchStockData("MSFT"), 5000);

// async function fetchStockData(stock) {
//   const result = await yahooFinance.quoteSummary(stock, { modules: ['price'] });
//   console.log(result);
//   console.log(result.price.regularMarketPrice);
// }

  return { addStock, };
});

export { watchlistStore };
