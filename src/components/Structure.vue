<template>
  <div>
    <HeaderVue/>
    <div class="addCity">
      <button @click="showModal">+ Добавть</button>
    </div>

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
    <transition name="modal-fade">
      <Modal v-show="STATE_SHOWMODAL" />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Modal from "./Modal.vue";
import HeaderVue from "./Header.vue";

export default {
  name: "Header",
  components: { Modal, HeaderVue },
  computed: {
    ...mapGetters(["STATE_SHOWMODAL"]),
  },
  methods: {
    showModal() {
      this.$store.dispatch("ACTION_VISIBILITIMODAL");
    },
  }
};
</script>
