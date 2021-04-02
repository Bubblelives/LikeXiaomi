<template>
	<div class="displayContent">
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
	methods: {
		getCategoryList() {
			this.$axios
				.get("/test/getCategoryList")
				.then((response) => {
					this.CategoryList = response.data.retObj;
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
	components: {
		Body,
		HomeAd,
	},
	computed: {},
	created() {
		this.getCategoryList();
	},
	watch: {},
};
</script>

<style lang="scss" scoped>
.displayContent {
	width: 1226px;
	margin: 0 auto;
	.home-hero {
		position: relative;
	}
}
</style>
