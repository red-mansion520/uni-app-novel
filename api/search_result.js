
import BASE_URL from './config';
export const getNovelDetails = (novelIds) => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: `${BASE_URL}/api/novelDetails`, // 假设后端接口地址
            method: 'GET',
            data: {
                novelIds
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