<template>
  <NavBar>
    <template v-slot:default> shop </template>
  </NavBar>
  <div class="banner">
    <img src="~assets/images/1.jpg" alt="" />
  </div>
  <RecommendView :recommends="recommends"> </RecommendView>
  <TabControl :titles="['畅销', '新书', '精选']" @tabClick="tabClick">
  </TabControl>
  <GoodsList :goods="showGoods"> </GoodsList>
</template>

 <script>
import NavBar from "components/common/navbar/NavBar";
import RecommendView from "./ChildComps/RecommendView.vue";
import { ref, reactive, onMounted, computed } from "vue";
import { getHomeAllDate, getHomeGoods } from "network/home";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
export default {
  name: "Home",
  components: {
    NavBar,
    RecommendView,
    TabControl,
    GoodsList,
  },
  setup() {
    const recommends = ref([]);
    const temid = ref(0);

    const goods = reactive({
      sales: { page: 0, list: [] },
      recommend: { page: 0, list: [] },
      new: { page: 0, list: [] },
    });

    let currentType = ref("sales");

    const showGoods = computed(() => {
      console.log(currentType);
      return goods[currentType.value].list;
    });
    onMounted(() => {
      {
        getHomeAllDate()
          .then((res) => {
            recommends.value = res.goods.data;
          })
          .catch(() => {});
        getHomeGoods("sales")
          .then((res) => {
            goods.sales.list = res.goods.data;
            console.log(goods.sales.list);
          })
          .catch(() => {});
        getHomeGoods("recommend")
          .then((res) => {
            goods.recommend.list = res.goods.data;
            console.log(goods.recommend.list);
          })
          .catch(() => {});
        getHomeGoods("new")
          .then((res) => {
            goods.new.list = res.goods.data;
            console.log(goods.new.list);
          })
          .catch(() => {});
      }
    });

    const tabClick = (index) => {
      temid.value = index;
      let types = ["sales", "new", "recommend"];
      currentType.value = types[index];
    };
    return {
      recommends,
      tabClick,
      temid,
      goods,
      showGoods,
    };
  },
};
</script> 
 <style scoped>
.banner img {
  width: 100%;
  height: auto;
  margin-top: 45px;
}
</style>