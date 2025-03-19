<template>
  <view class="container">
    <view class="head">
      <!-- 搜索框区域 -->
      <view class="search-box" @click="goToSearchPage">
        <uni-search-bar
          v-model="searchKeyword"
          placeholder="请输入搜索内容"
          radius="5"
          cancelButton="none"
          readonly
        >
          <!-- 自定义搜索图标 -->
          <template v-slot:searchIcon>
            <uni-icons type="search" size="18" color="#999"></uni-icons>
          </template>
        </uni-search-bar>
      </view>

      <!-- 分类功能区域 -->
      <view class="sort-box" @click="goToSortPage">
        <image class="sort-icon" src="/static/icons/sort.png" />
        <view class="sort-text">
          分类
        </view>
      </view>
    </view>

    <!-- 热门推荐模块 -->
    <view class="hot-recommend">
      <view class="title">热门推荐</view>
      <view class="scroll-view">
        <view class="book-group" v-for="(group, groupIndex) in groupedHotRecommendBooks" :key="groupIndex">
          <view class="book-item" v-for="(book, index) in group" :key="index" @click="goToNovelDetails(book.novel_id)">
            <view class="book-name">{{ book.novel_name }}</view>
            <view class="book-sort">{{ book.novel_sort }}</view>
            <view class="book-like-count">点赞数: {{ book.likeCount }}</view>
          </view>
        </view>
      </view>
    </view>

    <!-- 最新上架模块 -->
    <view class="new-arrival">
      <view class="title">最新上架</view>
      <view class="book-list">
        <view class="book-item" v-for="(book, index) in newArrivalBooks" :key="index" @click="goToNovelDetails(book.novel_id)">
          <view class="book-info">
            <span class="book-name">{{ truncateName(book.novel_name) }}</span>
            <div class="book-type-time">
              <span class="book-type">{{ book.novel_sort }}</span>
              <span class="book-upload-time">{{ formatUploadTime(book.upload_time) }}</span>
            </div>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
// 从 Vue 引入 ref、computed 和 onMounted 函数
import { ref, computed, onMounted } from 'vue';
// 引入获取最新上架书籍数据的函数
import { getNewArrivalBooks } from '../../api/newnovel.js';
// 引入获取热门推荐书籍数据的函数
import { getHotRecommendBooks } from '../../api/hotnovel.js';

// 定义搜索关键词的响应式变量，初始值为空字符串
const searchKeyword = ref(""); 

// 定义热门推荐书籍的响应式变量，初始值为空数组
const hotRecommendBooks = ref([]);

// 定义最新上架书籍的响应式变量，初始值为空数组
const newArrivalBooks = ref([]);

// 定义计算属性，将热门推荐书籍按每 4 本一组进行分组
const groupedHotRecommendBooks = computed(() => {
  const groups = [];
  // 遍历热门推荐书籍数组，每 4 本为一组
  for (let i = 0; i < hotRecommendBooks.value.length; i += 4) {
    // 将每一组书籍添加到 groups 数组中
    groups.push(hotRecommendBooks.value.slice(i, i + 4));
  }
  return groups;
});

// 定义跳转到搜索页面的函数
const goToSearchPage = () => {
  // 使用 uni-app 的 navigateTo 方法跳转到搜索页面
  uni.navigateTo({
    url: "/pages/search/search"
  });
};

// 定义跳转到分类页面的函数
const goToSortPage = () => {
  // 使用 uni-app 的 navigateTo 方法跳转到分类页面
  uni.navigateTo({
    url: "/pages/sort/sort"
  });
};

// 定义格式化上传时间的函数
const formatUploadTime = (time) => {
  // 如果时间为空，返回空字符串
  if (!time) return '';
  // 将时间字符串转换为 Date 对象
  const date = new Date(time);
  // 获取小时并格式化为两位数字
  const hours = String(date.getHours()).padStart(2, '0');
  // 获取分钟并格式化为两位数字
  const minutes = String(date.getMinutes()).padStart(2, '0');
  // 获取秒并格式化为两位数字
  const seconds = String(date.getSeconds()).padStart(2, '0');
  // 返回格式化后的时间字符串
  return `${hours}:${minutes}:${seconds}`;
};

// 定义截断书名的函数，如果书名长度超过 20 个字符，截断并添加省略号
const truncateName = (name) => {
  const maxLength = 20; 
  return name.length > maxLength ? name.slice(0, maxLength) + '...' : name;
};

// 定义跳转到小说详情页面的函数，传入小说的 novel_id
const goToNovelDetails = (novel_id) => {
  // 使用 uni-app 的 navigateTo 方法跳转到小说详情页面，并携带小说 novel_id 参数
  uni.navigateTo({
    url: `/pages/novel_details/novel_details?novel_id=${novel_id}`
  });
};

// 定义 onMounted 钩子函数，在组件挂载后执行
onMounted(async () => {
  try {
    // 调用 getHotRecommendBooks 函数获取热门推荐书籍数据
    const hotBooks = await getHotRecommendBooks();
    hotRecommendBooks.value = hotBooks;
    console.log('后端传来的热门推荐小说数据:', hotBooks); 
    // 调用 getNewArrivalBooks 函数获取最新上架书籍数据
    const newBooks = await getNewArrivalBooks();
    // 在控制台打印后端传来的小说数据
    console.log('后端传来的最新上架小说数据:', newBooks); 
    // 按照上传时间对书籍数据进行降序排序
    newBooks.sort((a, b) => new Date(b.upload_time) - new Date(a.upload_time));
    // 将排序后的书籍数据赋值给 newArrivalBooks 响应式变量
    newArrivalBooks.value = newBooks;
  } catch (error) {
    // 如果获取数据过程中出现错误，在控制台打印错误信息
    console.error('获取数据失败:', error);
  }
});
</script>

<style>
/* 页面容器样式 */
.container {
  padding: 20px;
}
.head {
  display: flex;
  flex-direction: row;
  align-items: center; /* 垂直居中对齐 */
  justify-content: space-between;
}

/* 搜索框区域样式 */
.search-box {
  margin-right: 5px; /* 搜索框和分类区域的间距 */
  margin-bottom: 20px;
  width: 82%;
}

/* 分类功能区域样式 */
.sort-box {
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5; /* 背景颜色 */
  border-radius: 5px; /* 圆角 */
  padding: 5px; /* 内边距 */
  height: 36px; /* 设置分类区域高度与搜索框一致 */
  margin-bottom: 20px;
  box-sizing: border-box; /* 确保 padding 包含在高度内 */
}

.sort-icon {
  width: 15px; /* 图标大小 */
  height: 15px; /* 图标大小 */
  margin-right: 5px; /* 图标和文字的间距 */
}

.sort-text {
  font-size: 12px; /* 字体大小 */
  color: #333; /* 字体颜色 */
}

/* 热门推荐模块样式 */
.hot-recommend {
  margin-bottom: 20px;
}
.hot-recommend .title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
.scroll-view {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 10px 0;
  white-space: nowrap;
}
.book-group {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}
.book-item {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
}
.book-name {
  font-size: 14px;
  text-align: center;
  max-width: 300px; /* 增大最大宽度 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.book-sort {
  font-size: 12px;
  color: #666;
  text-align: center;
}
.book-like-count {
  font-size: 12px;
  color: #666;
  text-align: center;
}

/* 最新上架模块样式 */
.new-arrival {
  margin-bottom: 20px;
}
.new-arrival .title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
.book-list {
  display: flex;
  flex-wrap: wrap;
}
.book-list .book-item {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  width: 100%;
}
.book-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.book-type-time {
  display: flex;
  flex-direction: row; /* 让小说类型和上传时间横着排 */
  justify-content: flex-end; /* 右对齐 */
  align-items: center;
}
.book-type,
.book-upload-time {
  font-size: 12px;
  color: #666;
  margin-left: 10px; /* 增加间距 */
}
</style>