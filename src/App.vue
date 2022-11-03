<template>
  <div id="app">
    <Structure />
    <router-view/>
    <CityList />
  </div>
</template>

<script>
import CityList from "./pages/City/CityList.vue";
import Structure from "./components/Structure.vue"
export default {
  components: { CityList, Structure },
  name: "App",
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background-color: #219653;
  color: #ffffff;
  padding: 20px;
}

.addCity {
  margin: 20px;
}

.center__Title {
  display: flex;
  justify-content: space-around;
}

.div {
  background-color: #219653;
  color: #ffffff;
  padding: 20px;
}

.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal_mask {
  display: table-cell;
  vertical-align: middle;
}

.modal__container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
