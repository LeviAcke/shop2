<template>
  <div class="recommend">
    <div
      class="recommend-item"
      v-for="(item, index) in recommends.slice(0, 4)"
      :key="index"
    >
      <a href="#" @click.prevent="goDetail(item.id)">
        <img :src="item.cover_url" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

 <script>
import { useRouter } from "vue-router";
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup() {
    const router = useRouter();
    const goDetail = (id) => {
      router.push({ path: "/detail", query: { id } });
    };
    return {
      goDetail,
    };
  },
};
</script> 
 <style scoped lang='less'>
.recommend {
  width: 100%;
  display: flex;
  text-align: center;
  padding: 15px 0 20px;
  border-bottom: 8px solid #ccc;
  font-size: 12px;
  .recommend-item {
    flex: 1;
    img {
      height: 70px;
      width: 70px;
      margin-bottom: 10px;
    }
  }
}
</style>