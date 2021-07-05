<template>
  <NavBar>
    <template v-slot:default> 分类 </template>
  </NavBar>
</template>

 <script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Category",
  components: {
    NavBar,
  },
};
</script> 
 <style scoped>
</style>