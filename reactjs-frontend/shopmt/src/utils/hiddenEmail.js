const hiddenEmail = (email) => {
    const input = email.split('@');
    const prefix = input[0];
    const suffix = input[1];
    const output = hidden(prefix) + '@' + suffix;
    return output;
};

const hidden = (prefix) => {
    let prefixNew = '';
    prefixNew = prefix.substring(0, 2);
    for (let i = prefixNew.length; i < prefix.length; i++) {
        prefixNew += '*';
    }
    return prefixNew;
};
export default hiddenEmail;
