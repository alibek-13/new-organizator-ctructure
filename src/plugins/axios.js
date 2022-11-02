import axios from 'axios'

const api  = axios.create({
  baseURL: 'https://api.blockchain.info/',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

export default api
// const getBitcoin =  axios.get(
// 'https://api.blockchain.info/charts/transactions-per-second?timespan=1weeks&rollingAverage=24hours&format=json')
// console.log(getBitcoin);


// export default getBitcoin;