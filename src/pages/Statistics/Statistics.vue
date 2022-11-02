<template>
    <div class="statistics">
        <input type="text" placeholder="неделя">
        <input type="text" placeholder="часы">
        <button @click="showDinamicsBitoc"> Показать </button>
    </div>
</template>

<script>
// import { mapActions } from 'vuex';
// import {getBitcoin} from '../../plugins/axios.js'
// import api from '../../plugins/axios.js'
import axios from 'axios'

export default {
    methods: {
        
        async showDinamicsBitoc() {
            try {
                const res = await axios
                .get('https://api.blockchain.info/charts/transactions-per-second')
                .then(console.log(res))
                
            } catch (e) {
                console.error(e)
            }

        }
    }
}
</script>

<style>

</style>