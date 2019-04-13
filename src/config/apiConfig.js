import axios from 'axios';

export const TIME_OUT = 180000;
export const BASE_URL = 'https://deckofcardsapi.com/api/deck';
export const fetchApi = (endPoint) =>
{
    return axios({
        baseURL: BASE_URL,
        url: endPoint,
        method: 'get',
        timeout: TIME_OUT,
    })
    .then((response) =>
    {
        if (response)
        {
            if (response.status === 204) return {};

            if (response.data) return response.data;
            if (response.status === 200) return {};

            throw "Có lỗi xảy ra";
        }
    })
    .catch((error) =>
    {
        //if (!network) throw 'Không thể kết nối với máy chủ, vui lòng kiểm tra lại đường truyền internet và thử lại.';

        const {response, message} = error;
        if (response)
        {
            const {status, data} = response;
            if (data)
            {
                const {error, detail, message} = data;
                if (error) throw error;
                if (detail) throw detail;
                if (message) throw message;
            }
            if (status >= 500) throw 'Có lỗi không mong muốn xảy ra, vui lòng thử tải lại trang';
            if (status >= 400) throw 'Có lỗi do truy cập vào tài nguyên không được cấp phép, vui lòng tải lại trang';
        }
        if (message)
        {
            if (error.message.includes('timeout of'))
                throw 'Không thể kết nối với máy chủ, vui lòng kiểm tra lại đường truyền internet và thử lại.';

            if (message.toString().includes('Network Error'))
                throw 'Lỗi kết nối mạng';

            throw message;
        }

        if (error.toString().includes('Network Error')) throw 'Lỗi kết nối mạng';
        throw error;
    });
};
