<template>
  <div class="main_box">
    <!-- header -->
    <div class="header">
      <!-- logo -->
      <div class="header_logo">
        <div class="logo">
          <router-link
            tag="div"
            to="/home/display"
            class="logo-home"
          ></router-link>
        </div>
        <img v-if="$route.path === '/home/display'" src="../assets/logo.gif" />
      </div>
      <!-- tarBar -->
      <slot name="tarbar">
        <div class="tarbar">
          <ul class="type-none nav header-nav">
            <li
              v-for="(item, key) in model"
              :key="key"
              @mouseover="changeTabbarChildren(item)"
            >
              {{ item.name }}
            </li>
            <li>服务</li>
            <li>社区</li>
            <div class="header-nav-children">
              <div class="container">
                <router-link
                  tag="div"
                  :to="`/home/details/${item2.id}`"
                  v-for="(item2, index2) in tarbarChildren.newList"
                  :key="index2"
                >
                  <img :src="item2.icon" />
                  <p class="name">{{ item2.name }}</p>
                  <p class="price">{{ item2.version[0].size[0].price }}元</p>
                </router-link>
              </div>
            </div>
          </ul>
        </div>
        <div class="header_input">
          <input
            type="text"
            placeholder="手机"
            v-model="keywords"
            @keyup="search"
          />
          <button @click="search">
            <i class="iconfont icon-search"></i>
          </button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    model: { type: Array },
  },
  data() {
    return {
      tarbarChildren: {}, //二级菜单容器
      keywords: "", //搜索关键词
    };
  },
  methods: {
    //鼠标移至tarbar上出现商品二级菜单
    changeTabbarChildren(item) {
      this.tarbarChildren = item;
    },
    search() {},
  },
  components: {},
  computed: {},
  created() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
@import "../style/common.scss";
.main_box {
  width: 1226px;
  margin: auto;
  .header {
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header_logo {
      display: flex;
      .logo {
        background: #ff6700;
        padding: 5px;
        margin-right: 10px;
        .logo-home {
          height: 50px;
          width: 50px;
          position: relative;
          overflow: hidden;
        }
        .logo-home:hover::before {
          left: 0;
        }
        .logo-home:hover::after {
          left: 50px;
        }
        .logo-home::before {
          content: "";
          display: block;
          background: url("../assets/mi-home.png") no-repeat;
          width: 50px; //宽高必须有
          height: 50px;
          left: -50px;
          position: absolute;
          transition: 0.3s linear; //过渡
          cursor: pointer;
        }
        .logo-home::after {
          content: "";
          display: block;
          background: url("../assets/mi-logo.png") no-repeat;
          width: 50px;
          height: 50px;
          left: 0;
          position: absolute;
          transition: 0.3s linear;
          cursor: pointer;
        }
      }
    }

    .tarbar {
      height: 100%;
      flex-grow: 1;
      margin-right: 10px;
    }
    @media screen and(max-width:650px) {
      .header-nav {
        & > li {
          &:hover {
            cursor: none !important;
          }
        }
      }
    }
    .header-nav {
      height: 100%;
      justify-content: space-around;
      color: #333;
      & > li {
        text-align: center;
        flex-grow: 1;
        font-size: 16px;
        line-height: 110px;
        &:hover {
          cursor: pointer;
        }
        &:hover ~ .header-nav-children {
          height: 215px;
          border: 1px solid #ccc;
          border-bottom: none;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
      }
      .header-nav-children:hover {
        height: 215px;
        border: 1px solid #ccc;
        border-bottom: none;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      }
    }
    .header_input {
      display: flex;
      margin-left: 30px;
      input {
        height: 48px;
        line-height: 48px;
        width: 223px;
        border: 1px solid #ccc;
        font-size: 16px;
        outline: none;
        text-indent: 20px;
      }
      input:focus {
        border: 1px solid $paimary-color;
      }
      input:focue ~ button {
        border: 1px solid $paimary-color;
        border-left: none;
      }
      button {
        padding: 10px 15px;
        border: 1px solid #ccc;
        border-left: none;
        background: #ffffff;
        outline: none;
      }
    }

    .header-nav-children {
      width: 100%;
      line-height: 1.5;
      position: absolute;
      z-index: 40;
      left: 0;
      top: 160px;
      height: 0;
      background: #ffffff;
      overflow: hidden;
      transition: height 0.3s linear, box-shadow 0.2s linear 0.3s;
      & .container {
        display: flex;
        margin: auto;
        width: $max-width * 1px;
        & > div {
          width: 16.3%;
          text-align: center;
          color: #000;
          position: relative;
          padding: 25px 0px;
          & img {
            height: 110px;
            max-width: 200px;
          }
          &::after {
            //间隔竖线
            content: "";
            height: 120px;
            width: 1px;
            display: block;
            position: absolute;
            right: 0;
            top: 25px;
            background: #ccc;
            transform: scaleX(0.5);
          }
        }
      }
    }
  }
}
</style>
