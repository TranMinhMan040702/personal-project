import images from '../../../../assets/images';
import { useEffect, useState } from 'react';
import { regex } from '../../../../utils';
import UserService from '../../../../services/UserService';

function Profile({ account }) {
    const [user, setUser] = useState({
        id: '',
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        avatar: '',
    });
    const [avatar, setAvatar] = useState(null);
    const [preview, setPreview] = useState(null);
    useEffect(() => {
        if (account) {
            setUser({
                id: account.id,
                firstname: account.firstname,
                lastname: account.lastname,
                email: account.email,
                phone: account.phone,
                address: account.address,
                avatar: account.avatar,
            });
        }
    }, [account]);
    useEffect(() => {
        if (user.avatar) {
            setAvatar(() => {
                const bits = user.avatar.split('.');
                const file = new File([bits[0]], user.avatar, {
                    type: 'text/plain',
                });
                return { file };
            });
        }
    }, [user]);
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleUploadAvatar = (e) => {
        setAvatar({ file: e.target.files[0] });
        setPreview(URL.createObjectURL(e.target.files[0]));
    };
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(preview);
        };
    }, [avatar]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('file', avatar.file);
        data.append('model', JSON.stringify(user));
        if (regex.regexPhoneNumber(user.phone)) {
            try {
                const response = await UserService.updateUser(data);
                console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        }
    };
    return (
        <div className="wapper">
            <div className="header">
                <h5>Hồ sơ của tôi</h5>
                <p>Quản lý hồ sơ để bảo mật tài khoản</p>
            </div>
            <div className="account">
                <form action="" className="" onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-between">
                        <div className="profile-info">
                            <div className="mb-3">
                                <label htmlFor="">Tên</label>
                                <span>{user.firstname + ' ' + user.lastname}</span>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Email</label>
                                <span>{user.email}</span>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Số điện thoại</label>
                                <input
                                    className="input-control"
                                    type="text"
                                    value={user.phone}
                                    name="phone"
                                    required
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Vui lòng nhập số điện thoại . . ."
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Giới tính</label>
                                <span>
                                    <input
                                        id="male"
                                        name="gender"
                                        className="input-control"
                                        type="radio"
                                        value="male"
                                    />

                                    <label htmlFor="male">Nam</label>
                                </span>
                                <span>
                                    <input
                                        id="female"
                                        name="gender"
                                        className="input-control"
                                        type="radio"
                                        value="male"
                                    />
                                    <label htmlFor="female">Nữ</label>
                                </span>
                                <span>
                                    <input
                                        id="other"
                                        name="gender"
                                        className="input-control"
                                        type="radio"
                                        value="other"
                                    />
                                    <label htmlFor="female">Khác</label>
                                </span>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Ngày sinh</label>
                                <input className="input-control" type="date" />
                            </div>
                        </div>
                        <div className="profile-img d-flex flex-column justify-content-center align-items-center">
                            <div className="img">
                                <img src={!avatar ? images.noAvatar : preview} alt="" />
                            </div>
                            <label htmlFor="image">
                                <input accept="image/*" type="file" id="image" hidden onChange={handleUploadAvatar} />
                                Chọn ảnh
                            </label>
                        </div>
                    </div>
                    <button>Lưu</button>
                </form>
            </div>
        </div>
    );
}

export default Profile;
