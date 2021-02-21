<template>
  <div id="app">
    <keep-alive :include="['Home', 'Mi']">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
</style>
