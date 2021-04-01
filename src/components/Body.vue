<template>
	<div class="box">
		<!-- 左侧菜单栏 -->
		<div class="box-left">
			<ul class="type-none">
				<li
					v-for="(item, key) in CategoryList"
					:key="key"
					@mouseover="showProducts(item)"
				>
					<router-link tag="a" to="/">{{ item.name }}</router-link>
					<!-- 详情页 -->
					<div class="box-right">
						<ul>
							<li v-for="(i, k) in productsList" :key="k">
								<router-link tag="div" to="/">{{ i.name }}</router-link>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
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
		return {
			productsList: [],
		};
	},
	methods: {
		showProducts(obj) {
			this.$axios
				.post("/test/getProductsList", {})
				.then((response) => {
					this.productsList = response.data.retObj;
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
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
			.box-right {
				display: none;
				position: absolute;
				width: 992px;
				height: 460px;
				left: 234px;
				top: 0;
				border: 1px solid rgb(136, 136, 136);
				border-left: 0;
			}
			li:hover .box-right {
				display: block;
			}
		}
	}
}
</style>
