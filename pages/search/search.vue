<template>
  <view class="container">
    <!-- 搜索框区域 -->
    <view class="search-box">
      <uni-search-bar
        v-model="searchKeyword"
        placeholder="请输入搜索内容"
        radius="5"
        cancelButton="none"
        @confirm="onSearch"
        @input="onInput"
      >
        <!-- 自定义搜索图标 -->
        <template v-slot:searchIcon>
          <uni-icons type="search" size="18" color="#999"></uni-icons>
        </template>
      </uni-search-bar>
    </view>

    <!-- 搜索历史区域 -->
    <view class="history-box" v-if="searchHistory.length">
      <view class="history-header">
        <text class="history-title">搜索历史</text>
        <image
          src="/static/icons/deleteAll.png"
          class="clear-all-icon"
          @click="clearAllHistory"
        ></image>
      </view>
      <view v-for="(item, index) in searchHistory" :key="index" class="history-item">
        <text>{{ item }}</text>
        <image
          :src="'/static/icons/deleteOne.png'"
          class="clear-one-icon"
          @click="removeHistory(index)"
        ></image>
      </view>
    </view>

    <!-- 榜单区域 -->
    <view class="list" >
      <view class="rank-item" v-for="(item, index) in rankList" :key="index" @click="selectRank(index)">
        <view class="rank-title">{{ item.title }}</view>
        <view class="rank-bg" :style="{ backgroundImage: item.color }"></view>
      </view>
    </view>
  </view>
</template>

<script>
import { searchApi } from '../../api/search.js';

export default {
  data() {
    return {
      searchKeyword: "", // 搜索关键词
      searchHistory: [], // 搜索历史
      rankList: [ // 榜单数据
        { title: '热搜榜', color: 'linear-gradient(135deg, #ff7e5f, #feb47b)' },
        { title: '巅峰榜', color: 'linear-gradient(135deg, #00b09b, #96c93d)' },
        { title: '分类榜', color: 'linear-gradient(135deg, #8e2de2, #4a00e0)' },
        { title: '评论榜', color: 'linear-gradient(135deg, #ff5f6d, #ffc371)' }
      ]
    }
  },
  methods: {
    onInput() {
      console.log("输入内容：", this.searchKeyword);
    },
    async onSearch() {
      console.log("搜索内容：", this.searchKeyword);
      if (this.searchKeyword.trim() !== "") {
        this.searchHistory.push(this.searchKeyword.trim());
        this.searchKeyword = ""; // 清空搜索框

        try {
          const result = await searchApi(this.searchHistory[this.searchHistory.length - 1]);
          console.log('搜索结果:', result);
          // 跳转到小说结果页，并将小说 ID 作为参数传递
          uni.navigateTo({
            url: `/pages/search_result/search_result?novelIds=${result.join(',')}`
          });
        } catch (error) {
          console.error('搜索请求出错:', error);
        }
      }
    },
    removeHistory(index) {
      this.searchHistory.splice(index, 1);
    },
    clearAllHistory() {
      this.searchHistory = [];
    },
    selectRank(index) {
      console.log("Selected rank:", index);
    }
  }
}
</script>

<style>
.container {
  padding: 20px;
}

.search-box {
  margin-bottom: 20px;
}

.history-box {
  margin-bottom: 20px;
}
.history-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.history-title {
  font-size: 18px;
  color: #333;
}
.clear-all-icon {
  width: 24px;
  height: 24px;
}
.history-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.history-item text {
  font-size: 16px;
  color: #555;
}
.clear-one-icon {
  width: 20px;
  height: 20px;
}

.list {
  display: flex;
  overflow-x: auto;
}
.rank-item {
  flex: 0 0 70%; /* 设置每个榜单框的宽度为页面的70% */
  margin-right: 10px; /* 添加右边距，让滑动看起来更自然 */
  text-align: center;
  height: 500px; /* 设置榜单高度 */
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  padding: 10px;
}
.rank-title {
  font-size: 16px;
  color: #333;
}
.rank-bg {
  width: 100%;
  height: 100%;
}
</style>    