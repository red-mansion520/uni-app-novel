// newbook.js

import BASE_URL from './config';
const getNewArrivalBooks = () => {
    return new Promise((resolve, reject) => {
        uni.request({
            // url: 'http://localhost:8888/api/getNewArrivalBooks', //本地测试
			url: `${BASE_URL}/api/getNewArrivalBooks`, // 手机端同一局域网下
            method: 'GET',
            success: (res) => {
                if (res.statusCode === 200) {
                    resolve(res.data);
                } else {
                    reject(new Error('请求失败，状态码：' + res.statusCode));
                }
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
};

export { getNewArrivalBooks };