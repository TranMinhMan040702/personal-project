const formatter = (amount) => {
    return amount.toLocaleString('vi', { style: 'currency', currency: 'VND' });
};
export default formatter;
