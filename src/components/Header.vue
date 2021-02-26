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
						<div class="">
							<div class="container">
								<router-link tag="div"> </router-link>
							</div>
						</div>
					</ul>
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
	},
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
		}
	}
}
</style>
