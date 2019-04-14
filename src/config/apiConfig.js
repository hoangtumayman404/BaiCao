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

            alert("Có lỗi xảy ra, vui lòng tải lại ứng dụng");
        }
    })
    .catch((error) =>
    {
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
            if (status >= 500) alert("Có lỗi xảy ra, vui lòng tải lại ứng dụng");
            if (status >= 400) alert("Có lỗi xảy ra, vui lòng tải lại ứng dụng");
        }
        if (message)
        {
            if (error.message.includes('timeout of')) alert("Có lỗi xảy ra, vui lòng tải lại ứng dụng");

            if (message.toString().includes('Network Error')) alert("Lỗi kết nối mạng, vui lòng tải lại ứng dụng");

            throw alert(message);
        }

        if (error.toString().includes('Network Error')) alert("Lỗi kết nối mạng, vui lòng tải lại ứng dụng");
        throw error;
    });
};
