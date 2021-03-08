<template>
	<div>
		<!-- 主题menu+广告幻灯片 -->
		<div class="home-hero">
			<!-- menu -->
			<Body :imageList="swiperList" :CategoryList="CategoryList"></Body>
			<!-- 广告 -->
			<HomeAd></HomeAd>
		</div>
		<!-- 其他模块 -->
		<div class=""></div>
		<!-- 右侧固定滑块 -->
		<div class="right-menu"></div>
	</div>
</template>

<script>
import Body from "../components/Body";
import HomeAd from "../components/HomeAd";
export default {
	name: "Display",
	data() {
		return {
			CategoryList: [],
			swiperList: [],
		};
	},
	methods: {},
	components: {
		Body,
		HomeAd,
	},
	computed: {},
	created() {},
	watch: {},
};
</script>

<style></style>
