<template>
	<div class="box">
		<!-- 左侧菜单栏 -->
		<div class="box-left">
			<ul class="type-none">
				<li v-for="(item, key) in CategoryList" :key="key">
					<router-link tag="a" to="/">{{ item.name }}</router-link>
				</li>
			</ul>
		</div>
		<!-- 详情页 -->
		<div class="box-right"></div>
	</div>
</template>

<script>
export default {
	name: "Body",
	props: {
		CategoryList: {
			type: Array,
			require: true,
		},
		imgList: {
			type: Array,
			require: true,
		},
	},
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
a {
	text-decoration: none;
}
.box {
	height: 460px;
	width: 234px;
	position: relative;

	.box-left {
		width: 100%;
		height: 100%;
		background-color: rgba(105, 101, 101, 0.6);
		ul {
			height: 460px;
			padding: 20px 0;
			li {
				width: 100%;
				height: 42px;

				a {
					line-height: 46px;
					color: #ffffff;
					font-weight: 700;
					height: 42px;
					padding-left: 30px;
					display: block;
				}
			}
			li:hover {
				background-color: #ff6700;
			}
		}
	}
}
</style>
