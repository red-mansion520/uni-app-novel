import request from '../utils/request';
import BASE_URL from './config';
export const likeNovel = (novelId) => {
    return new Promise((resolve, reject) => {
        request({
            url: `${BASE_URL}/api/like`,
            method: 'POST',
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
                novel_id: novelId
            }
        })
       .then((res) => {
            resolve(res);
        })
       .catch((err) => {
            reject(err);
        });
    });
};