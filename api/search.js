import BASE_URL from './config';
// search.js
export const searchApi = (keyword) => {
    return new Promise((resolve, reject) => {
        // 这里使用 uni.request 发起请求，你需要将 url 替换为实际的后端接口地址
        uni.request({
            url: `${BASE_URL}/api/search`,
            method: 'GET',
            data: {
                keyword
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