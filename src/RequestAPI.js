/**
* RequestAPI - объект запроса с методами GET и POST
* @module
* */

export const RequestAPI =  {
    /**
    * @method GET
    * @param {String} url - URL адрес запроса
    * @return {Promise} response - ответ от свервера
    * */
    GET: async (url='') => {
        let props = {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        const response = await fetch(url, props);
        if (!response.ok) {
            throw new Error(`Can't GET ${url}, with status: ${response.status}`)
        }

        return await response.json();
    },
    /**
    * @method POST
    * @param {String} url - URL адрес запроса
    * @param {Object} data - Набор данных отправляемых на сервер
    * @return {Promise} response - ответ от свервера
    * */
    POST: async (url = '', data = {}) => {
        let props = {
            method: 'POST',
            credentials: 'include',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const response = await fetch(url, props);
        if(!response.ok) {
            throw new Error(`Can't POST ${url}, with status: ${response.status}`)
        }

        return await response.json();
    }
}
