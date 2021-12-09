<template>
  <div id="app">
    <div class="header">
      <p>ОРГАНИЗАЦИОННАЯ СТРУКТУРА</p>
    </div>
    <div class="addCity">
      <button @click="addButton">+ Добавть</button>
    </div>
    <transition>
      <Modal c-show="!show" />
    </transition>
    <div class="title">
      <ul class="center__header">
        <li class="center__Title div">
          <div>Город</div>
          <div>Общие колличестов</div>
          <div>Фактическое колличестов</div>
          <div>действие</div>
        </li>
      </ul>
    </div>
    <CityList />
  </div>
</template>

<script>
import CityList from "./components/CityList.vue";
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: { CityList, Modal },
  data() {
    return {
      show: true,
    };
  },

  methods: {
    addButton() {
      if (show = !show) return;
      // try {
      //   const payload = {

      //     id:  this.$uuid.v1(),
      //     child: [],
      //   }
      // } catch (error) {

      // }
    },
  },
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
  background-color: #045e5e;
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
  background-color: #045e5e;
  color: #ffffff;
  padding: 20px;
}
</style>
