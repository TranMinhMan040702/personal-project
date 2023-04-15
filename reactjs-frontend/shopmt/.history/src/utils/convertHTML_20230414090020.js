const convertHTML = (data) => {
    var doc = new DOMParser().parseFromString(data, 'text/html');
    return doc.innerHTML;
};

export default convertHTML;
