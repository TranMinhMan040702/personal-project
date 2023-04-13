const convertParams = (param) => {
    let requestParams = '';
    for (let key in param) {
        if (param[key]) {
            requestParams += '&' + key + '=' + param[key];
        }
    }
    return requestParams;
};

export default convertParams;
