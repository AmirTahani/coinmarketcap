import { API_PATH } from '../config';


const defaultHeaders = {
    'Content-type': 'Application/json',
    'Accept': 'Application/json',
    'X-CMC_PRO_API_KEY': process.env.API_KEY,
};

export default async function apiClient(method, url, bodyParams) {
    const fetchOptions = {
        headers: defaultHeaders,
        method,
        body: JSON.stringify(bodyParams),
    };

    const fetchResponse = await fetch(`${API_PATH}/${url}`, fetchOptions);
    if (fetchResponse.status >= 200 && fetchResponse.status < 400) {
        return Promise.resolve(await fetchResponse.json());
    } else {
        return Promise.reject(await fetchResponse.json());
    }
}
