<template>
  <scroll-view class="book-shelf" scroll-y="true">
    <view class="grid-container">
      <view class="book-item" v-for="(book, index) in books" :key="index">
        <image :src="book.cover" class="book-cover"></image>
        <view class="book-title">{{ book.title }}</view>
      </view>
    </view>
  </scroll-view>
</template>

<script>
export default {
  data() {
    return {
      books: [
        { cover: "https://example.com/book1.jpg", title: "书名1" },
        { cover: "https://example.com/book2.jpg", title: "书名2" },
        { cover: "https://example.com/book3.jpg", title: "书名3" },
        { cover: "https://example.com/book4.jpg", title: "书名4" },
        { cover: "https://example.com/book5.jpg", title: "书名5" },
        { cover: "https://example.com/book6.jpg", title: "书名6" },
        { cover: "https://example.com/book7.jpg", title: "书名7" },
        { cover: "https://example.com/book8.jpg", title: "书名8" },
        { cover: "https://example.com/book9.jpg", title: "书名9" },
        { cover: "https://example.com/book10.jpg", title: "书名10" },
        { cover: "https://example.com/book11.jpg", title: "书名11" },
        { cover: "https://example.com/book12.jpg", title: "书名12" }
      ]
    };
  },
  methods: {
    
  }
};
</script>

<style>
/* 书架容器样式 */
.book-shelf {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f0f0f0;
}

/* 九宫格容器样式 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 每行显示3本书 */
  gap: 10px;
  padding: 20px;
}

/* 书籍项样式 */
.book-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.book-cover {
  width: 100px;
  height: 150px;
  object-fit: cover;
}

.book-title {
  font-size: 14px;
  color: #333;
  text-align: center;
  padding: 5px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>