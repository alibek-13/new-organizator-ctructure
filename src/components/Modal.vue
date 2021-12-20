<template>
  <div class="modal">
    <div class="modal_mask">
      <div class="modal__container">
        <form @submit.prevent="addModalCyti">
          <input
            class="model"
            v-model.trim="title"
            type="text"
            placeholder="Отделение"
          />
          <input
            class="model"
            v-model.trim="total"
            type="text"
            placeholder="Обище количество"
          />
          <input
            class="model"
            v-model.trim="fact"
            type="text"
            placeholder="Фактическое количество"
          />
          <button type="submit">Добавить</button>
        </form>
        <slot>
          <button type="button" @click="close">Закрыть</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  components: {},
  name: "modal",

  data() {
    return {
      title: "",
      total: "",
      fact: "",
    };
  },
  computed: {
 
  },
  methods: {
   ...mapMutations(['ADD_CITIES']),
    addModalCyti() {
      this.ADD_CITIES({
        created_at: Date.now(),
        id: this.$uuid.v1(),
        title: this.title,
        total: this.total,
        fact: this.fact,
        subDivision:[],
      }),
      (this.title = ""), (this.total = ""), (this.fact = "");
    },
    close() {
      this.$store.dispatch("ACTION_VISIBILITIMODAL");
      (this.title = ""), (this.total = ""), (this.fact = "");
    },
  },
};
</script>

<style>
button {
  margin: 5px;
}
.model {
  border: 2px solid teal;
  border-radius: 5px;
  margin-bottom: 5px;
  width: 250px;
}
</style>