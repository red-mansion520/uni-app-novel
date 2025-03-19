// api/hotnovel.js

import BASE_URL from './config';
export const getHotRecommendBooks = () => {
  return new Promise((resolve, reject) => {
    uni.request({
      // url: 'http://localhost:8888/api/hot-novels', // 本地测试
	   url: `${BASE_URL}/api/hot-novels`,//手机端同一局域网下
      method: 'GET',
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};