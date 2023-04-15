const convertHTML = (data) => {
    var dom = document.createElement('div');
    dom.innerHTML = data;
    return dom;
};

export default convertHTML;
