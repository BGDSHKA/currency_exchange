import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/"
});

export const coinsAPI = {
  getCoins() {
    return instance
      .get(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then((response) => response.data);
  },
  
  getHistory(id) {
    return instance
      .get(`/coins/${id}/market_chart?vs_currency=usd&days=365&interval=daily`)
      .then((response) => response.data);
  }
}

