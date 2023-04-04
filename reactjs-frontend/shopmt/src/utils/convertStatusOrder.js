const convertStatus = (status) => {
    switch (status) {
        case 'NOT_PROCESSED':
            return 'chưa xử lý';
        case 'PROCESSING':
            return 'đang xử lý';
        case 'SHIPPED':
            return 'đang giao';
        case 'DELIVERED':
            return 'đã giao';
        case 'CANCELLED':
            return 'đã hủy';
        default:
            return 'chưa xử lý';
    }
};

export default convertStatus;
