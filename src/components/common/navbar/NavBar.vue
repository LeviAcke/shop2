<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left">
        <img src="~assets/images/left.png" alt="" />
      </slot>
    </div>
    <div class="center">
      <slot>shop</slot>
    </div>
    <div class="right">
      <slot name="right"> </slot>
    </div>
  </div>
</template>

 <script>
export default {
  name: "NavBar",
};
</script> 
 <style scoped lang='less'>
.nav-bar {
  background-color: var(--color-tint);
  height: 45px;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  line-height: 45px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  .left,
  .right {
    width: 60px;
  }
  .center {
    flex: 1;
    font-size: 22px;
  }
  .left img {
    width: 45px;
    padding: 10px;
  }
}
</style>