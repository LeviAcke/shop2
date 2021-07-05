<template>
  <router-view />
  <div id="nav">
    <router-link class="tab-bar-item" to="/">
      <div class="icon">
        <i class="iconfont icon-shouye1-copy"></i>
      </div>
      <div>首页</div>
    </router-link>
    <router-link class="tab-bar-item" to="/category">
      <div class="icon">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
      </div>
      <div>分类</div>
    </router-link>
    <router-link class="tab-bar-item" to="/shopcart">
      <div class="icon">
        <i class="iconfont icon-gouwuche"></i>
      </div>
      <div>购物车</div>
    </router-link>
    <router-link class="tab-bar-item" to="/profile">
      <div class="icon">
        <i class="iconfont icon-wode"></i>
      </div>
      <div>我的</div>
    </router-link>
  </div>
</template>

<style lang="less">
@import url("assets/css/base.css");
@import url("assets/css/iconfont.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 10;
  background-color: #fff;
  .tab-bar-item {
    flex: 1;
    height: 50px;

    .icon {
      display: inline-block;
      width: 24px;
      height: 24px;
      margin-top: 3px;
    }
  }

  a {
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
