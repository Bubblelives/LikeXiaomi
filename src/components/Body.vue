<template>
	<div class="box">
		<!-- 左侧菜单栏 -->
		<div class="box-left">
			<ul class="type-none">
				<li v-for="(item, key) in CategoryList" :key="key">
					{{ item.name }}
				</li>
			</ul>
		</div>
		<!-- 幻灯片 -->
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

<style lang="scss" scoped></style>
