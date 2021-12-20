<template>
  <div class="main">
    <div class="main__body">
      <h3>{{ item.title }}</h3>
      <h3>{{ item.total }}</h3>
      <h3>{{ item.fact }}</h3>

      <button type="button" v-if="!parentItem" @click="deleteCtructure">
        Удалить заголовок
      </button>
      <div class="main__footer">
        <h3>{{ item.title2 }}</h3>
        <h3>{{ item.total2 }}</h3>
        <h3>{{ item.fact2 }}</h3>
      </div>
      <div class="body__item">
        <form @submit.prevent="addSubDivision" class="form_container">
          <input type="text" v-model="title2" />
          <input type="text" v-model="total2" />
          <input type="text" v-model="fact2" />
          <button type="submit">добавить подзаголовок</button>
        </form>
        <button type="button" v-if="parentItem" @click="deleteSubDivision">
          удалить подзаголовок
        </button>

        <ul
          class="list-none"
          v-if="item.subDivision && item.subDivision.length > 0"
        >
          <CityItem
            v-for="(child, subIndex) in item.subDivision"
            :item="child"
            :index="subIndex"
            :key="child.id"
            :parentItem="item"
            @deleteSubDivision="deleteSubDivision"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "CityItem",
  components: {},
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    parentItem: {
      required: false,
    },
  },
  data() {
    return {
      title2: "",
      total2: "",
      fact2: "",
    };
  },
  computed: {
    ...mapGetters(["STATE_SITIES", "STATE_SHOWMODAL"]),
  },
  methods: {
    ...mapMutations(["ADD_CITIES", "ADD_SUBDIVISION"]),
    deleteSubDivision() {
      this.parentItem.subDivision.splice(this.index, 1);
    },
    deleteCtructure(index) {
      this.STATE_SITIES.splice(index, 1);
    },
    addSubDivision() {
      // this.ADD_SUBDIVISION({

      //   created_at: Date.now(),
      //   id: this.$uuid.v1(),
      //   title2: this.title2,
      //   total2: this.total2,
      //   fact2: this.fact2,
      //   subDivision:[],

      // })
      const task = {
        created_at: Date.now(),
        id: this.$uuid.v1(),
        title2: this.title2,
        fact2: this.fact2,
        total2: this.total2,
        subDivision: [],
      };
      this.item.subDivision.push(task);
    },
  },
};
</script>

<style>
.form_container {
  width: 200px;
  display: flex;
  flex-direction: column;
}
</style>