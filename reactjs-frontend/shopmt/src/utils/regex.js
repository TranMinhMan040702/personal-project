const regexPhoneNumber = (phone) => {
    const regexPhoneNumber = /(0[3|5|7|8|9])+([0-9]{8})\b/g;
    return phone.match(regexPhoneNumber) ? true : false;
};

const regex = {
    regexPhoneNumber,
};
export default regex;
