<template>
  <div class="goods-list-item" @click="goDetail(product.id)">
    <img :src="product.cover_url" alt="" />
    <div class="goods-info">
      <p>{{ product.title }}</p>
      <span class="price">¥{{ product.price }}</span>
      <span class="collect">{{ product.collects_count }}</span>
    </div>
  </div>
</template>

 <script>
import { useRouter } from "vue-router";
export default {
  name: "GoodsListItem",
  props: {
    product: {
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
 <style lang='less' scoped>
.goods-list-item {
  width: 46%;
  padding-bottom: 40px;
  position: relative;
  img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    overflow: hidden;
    p {
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .price {
      color: red;
      margin-right: 20px;
    }
    .collect {
      position: relative;
    }
    .collect::before {
      content: "";
      position: absolute;
      left: -15px;
      top: 2px;
      width: 14px;
      height: 14px;
      background: url("~assets/images/collect.png");
      background-size: 14px;
    }
  }
}
</style>