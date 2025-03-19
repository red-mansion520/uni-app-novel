import BASE_URL from './config';
// novel_details.js
export const getNovelDetails = (novelId) => {
  return new Promise((resolve, reject) => {
    uni.request({
      // url: 'http://localhost:8888/api/novel_details',
	    url: `${BASE_URL}/api/novel_details`,
      method: 'GET',
      data: {
        novel_id: novelId
      },
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};