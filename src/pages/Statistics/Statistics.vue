<template>
    <div class="statistics">
        <input type="text" placeholder="неделя">
        <input type="text" placeholder="часы">
        <button @click="showDinamicsBitoc"> Показать </button>

        {{ Bitoc }}
    </div>
</template>

<script>

import axios from 'axios'

const ethereumData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}

export default {
    data: ()=> ({
        Bitoc: []
    }),
    methods: {
        
        async showDinamicsBitoc() {
            try {
                await axios
                .get('https://api.binance.com/api/v3/depth?symbol=BNBBTC&limit=5')
                .then(res => this.Bitoc = console.log(res.data))
                
                
            } catch (e) {
                console.error(e)
            }

        }
    }
}
</script>

<style>

</style>