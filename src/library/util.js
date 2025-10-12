import { API_KEY } from "./constants";


function getStockQuote(symbol) {
    const url = "https://finnhub.io/api/v1/quote?symbol=" + symbol + "&token=" + API_KEY;
    return url;
}

export {getStockQuote};