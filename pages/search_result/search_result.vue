<template>
    <view>
        <!-- 这里根据后端返回的小说信息列表渲染 -->
        <view v-if="novelInfos.length">
            <view v-for="(novelInfo, index) in novelInfos" :key="index" class="novel-item" @click="goToNovelDetails(novelInfo.novel_id)">
                <text>{{ novelInfo.novel_name }}</text>
            </view>
        </view>
        <view v-else>
            <text>暂无小说详情</text>
        </view>
    </view>
</template>

<script>
import { getNovelDetails } from '../../api/search_result.js'; // 根据实际路径调整

export default {
    data() {
        return {
            novelInfos: [] // 存储后端返回的包含小说 ID 和小说名的信息列表
        };
    },
    onLoad(options) {
        const novelIds = options.novelIds;
        if (novelIds) {
            this.fetchNovelDetails(novelIds);
        }
    },
    methods: {
        async fetchNovelDetails(novelIds) {
            try {
                const result = await getNovelDetails(novelIds);
                this.novelInfos = result;
            } catch (error) {
                console.error('获取小说详情出错:', error);
            }
        },
        goToNovelDetails(novelId) {
            uni.navigateTo({
                url: `/pages/novel_details/novel_details?novel_id=${novelId}`
            });
        }
    }
};
</script>

<style>
/* 可以添加样式来美化页面 */
.novel-item {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    /* 可以根据需要添加其他样式，如文字颜色、对齐方式等 */
    color: #333;
    text-align: left;
}
</style>    