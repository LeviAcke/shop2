<template>
  <NavBar>
    <template v-slot:default> shop </template>
  </NavBar>
</template>

 <script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script> 
 <style scoped>
</style>