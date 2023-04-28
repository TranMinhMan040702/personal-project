const hiddenEmail = (email) => {
    const input = email.split('@');
    const prefix = input[0];
    const suffix = input[1];
};

const hidden = (prefix) => {
    let prefixNew = prefix.substring(0, 2);
    for (let i = 2; i < prefix.length; i++) {
        prefixNew += '*';
    }
};
export default hiddenEmail;
