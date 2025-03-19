// add_tag.js
import request from '../utils/request';
import BASE_URL from './config';
export const addTag = (novelId, tag) => {
    return request({
        url: `${BASE_URL}/api/add_tag`, // 请根据实际情况修改 API 地址
        method: 'POST',
        data: {
            novel_id: novelId,
            tag: tag
        }
    });
};