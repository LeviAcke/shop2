<template>
  <NavBar>
    <template v-slot:default>详情</template>
  </NavBar>
  <h1>{{ id }}</h1>
</template>

 <script>
import NavBar from "components/common/navbar/NavBar";
import { useRoute } from "vue-router";
import { ref } from "vue";
export default {
  name: "Detail",
  setup() {
    const route = useRoute();
    let id = ref(0);
    id.value = route.query.id;
    return { id };
  },

  components: {
    NavBar,
  },
};
</script> 
 <style scoped lang='less'>
 h1{
   margin-top: 50px;
 }
</style>