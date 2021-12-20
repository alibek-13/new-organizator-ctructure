<template>
  <div id="app">
    <div class="header">
      <p>ОРГАНИЗАЦИОННАЯ СТРУКТУРА</p>
    </div>
    <div class="addCity">
      <button @click="showModal">+ Добавть</button>
    </div>
    <transition name="modal-fade">
      <Modal v-show="STATE_SHOWMODAL" />
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
import { mapGetters } from "vuex";
import CityList from "./components/CityList.vue";
import Modal from "./components/Modal.vue";
export default {
  components: { CityList, Modal },
  name: "App",
  computed: {
    ...mapGetters(["DROPSTATE", "STATE_SHOWMODAL"]),
  },
  methods: {
    showModal() {
      this.$store.dispatch("ACTION_VISIBILITIMODAL");
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
