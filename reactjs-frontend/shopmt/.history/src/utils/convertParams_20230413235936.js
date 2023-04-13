const convertParams = (param) => {
    let requestParams = '';
    for (let key in param) {
        if (param[key]) {
            requestParams += key + '=' + param[key] + '&';
        }
    }
    return requestParams.slice(0, -1);
};

export default convertParams;
