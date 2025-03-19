<template>
	<view class="container">
		<view class="sort">
			<view v-for="(item, index) in categories" :key="index" class="sort_one" @click="selectCategory(index)">
				{{ item }}
			</view>
		</view>
		<view class="label">
			<view v-for="(item, index) in selectedCategoryContent" :key="index" class="label_sort">
				{{ item }}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categories: ['热门标签', '玄幻', '都市', '历史', '仙侠', '奇幻', '武侠', '悬疑'],
				categoryContent: {
					'热门标签': ['标签1', '标签2', '标签3'],
					'玄幻': ['玄幻1', '玄幻2', '玄幻3'],
					'都市': ['都市1', '都市2', '都市3'],
					'历史': ['历史1', '历史2', '历史3'],
					'仙侠': ['仙侠1', '仙侠2', '仙侠3'],
					'奇幻': ['奇幻1', '奇幻2', '奇幻3'],
					'武侠': ['武侠1', '武侠2', '武侠3'],
					'悬疑': ['悬疑1', '悬疑2', '悬疑3']
				},
				selectedCategory: '热门标签'
			}
		},
		computed: {
			selectedCategoryContent() {
				return this.categoryContent[this.selectedCategory];
			}
		},
		methods: {
			selectCategory(index) {
				this.selectedCategory = this.categories[index];
			}
		}
	}
</script>

<style>
.container {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.sort {
	display: flex;
	width: 20%;
	flex-direction: column;
}
.sort_one {
	padding: 10px;
	border-bottom: 1px solid #ccc;
	text-align: center;
}
.label {
	display: flex;
	width: 80%;
	flex-direction: column;
}
.label_sort {
	padding: 10px;
	border-bottom: 1px solid #ccc;
}
</style>