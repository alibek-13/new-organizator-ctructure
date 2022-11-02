<template>
  <div class="main">
    
    <CityItem
      :item="item"
      :index="index"
      v-for="(item, index) in STATE_SITIES"
      :key="item.id"
    />
  </div>
</template>

<script>
import CityItem from "./CityItem.vue";
import { mapGetters } from "vuex";
export default {
  components: { CityItem },
  name: "CityList",
  computed: {
    ...mapGetters(["STATE_SITIES"]),
  },
};
</script>