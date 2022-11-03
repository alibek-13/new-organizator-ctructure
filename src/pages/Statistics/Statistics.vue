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