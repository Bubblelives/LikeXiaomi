<template>
	<div class="Ad-content">
		<!-- <el-carousel :interval="3000" arrow="always">
			<el-carousel-item v-for="item in 4" :key="item">
				<h3>{{ item }}</h3>
			</el-carousel-item>
		</el-carousel> -->
	</div>
</template>

<script>
export default {
	name: "HomeAd",
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
.Ad-content {
	width: 100%;
	height: 100%;
	top: 0;
	position: absolute;
	left: 0;
	z-index: -1;

	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n + 1) {
		background-color: #d3dce6;
	}
}
</style>
