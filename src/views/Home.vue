<template>
  <div class="mains">
    <!-- 顶部黑色菜单栏 -->
    <div class="bg-black">
      <div class="top_sliderbar">
        <!-- 菜单栏左侧  -->
        <ul>
          <li class="first">小米商城</li>
          <span>|</span>
          <li>MIUI</li>
          <span>|</span>
          <li class="down">下载app</li>
        </ul>
        <!-- 菜单栏右侧(待完善) -->
        <ul>
          <router-link tag="li" to="/login">登录</router-link>
          <router-link tag="li" to="/register">注册</router-link>
          <li class="a">
            <a ref="a">后台管理系统</a>
          </li>
          <li class=""><i></i>购物车</li>
        </ul>
      </div>
    </div>
    <!-- 定边栏end -->
    <Header></Header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  components: {
    Header,
    Footer,
  },
  computed: {},
  created() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
@import "@/style/common.scss";
.mains {
  margin-bottom: 70px;
  // min-width: ;
  position: relative;
}
.top_sliderbar {
  background-color: #333;
  margin: auto;
  width: $max-width * 1px; //1226px
  // (CSS3)justify-content用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
    font-weight: 400;
    font-size: 14px;
    color: #b0b0b0;
    align-items: center;
    span {
      color: #b1acac;
    }
    li {
      height: 100%;
      padding: 15px 30px;
      &:hover {
        color: rgb(231, 224, 224);
        cursor: pointer;
      }
    }
    .first {
      padding-left: 0 !important;
    }
  }
}
</style>