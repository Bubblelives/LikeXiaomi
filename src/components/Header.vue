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
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {},
  components: {},
  computed: {},
  created() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.main_box {
  width: 1226px;
  margin: auto;
  .header {
  }
}
</style>