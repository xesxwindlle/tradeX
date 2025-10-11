import { defineStore } from "pinia";
import { ref } from "vue";

const watchings = ref(new Set());
const stock = ref("");

const watchlistStore = defineStore("watchlist", () => {


  function hey() {
    console.log("hey");
  }

  const hi = () => console.log("hi");

  return { hey, hi };
});

export { watchlistStore };
