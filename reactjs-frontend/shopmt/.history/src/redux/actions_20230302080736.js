export const addCart = (data) => {
    return {
        type: 'addToCart',
        payload: data,
    };
};
