/* eslint-disable react-hooks/exhaustive-deps */
import images from '../../../../assets/images';
import { useEffect, useState } from 'react';
import { regex } from '../../../../utils';
import { useDispatch } from 'react-redux';
import { createAccount } from '../../../../redux/slice/accountSlice';
import Loading from '../../../../components/Loading';
import UserService from '../../../../services/UserService';

function Profile({ account }) {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        id: '',
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        gender: '',
        birthday: '',
        avatar: '',
    });
    const [avatar, setAvatar] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (account) {
            setUser({
                id: account.id,
                firstname: account.firstname,
                lastname: account.lastname,
                email: account.email,
                phone: account.phone,
                gender: account.gender,
                birthday: account.birthday,
                address: account.address,
                avatar: account.avatar,
            });
        }
        setLoading(false);
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

    const handleChecked = (e) => {
        let gender = document.getElementsByName('gender');
        for (let i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                setUser({ ...user, [e.target.name]: gender[i].defaultValue });
            }
        }
    };

    const handleUploadAvatar = (e) => {
        setAvatar({ file: e.target.files[0] });
        setPreview(URL.createObjectURL(e.target.files[0]));
    };

    const handleDisplayAvatar = () => {
        if (user.avatar && !preview) {
            return user.avatar;
        }
        return !avatar ? images.noAvatar : preview;
    };

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(preview);
        };
    }, [avatar]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        if (avatar) {
            data.append('file', avatar.file);
        } else {
            data.append('file', null);
        }
        data.append('model', JSON.stringify(user));
        if (regex.regexPhoneNumber(user.phone)) {
            try {
                const response = await UserService.updateUser(data);
                dispatch(createAccount(response.data.id));
            } catch (err) {
                console.log(err);
            }
        }
    };
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
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
                                                onChange={(e) => handleChecked(e)}
                                                checked={user.gender === 'male'}
                                            />
                                            <label htmlFor="male">Nam</label>
                                        </span>
                                        <span>
                                            <input
                                                id="female"
                                                name="gender"
                                                className="input-control"
                                                type="radio"
                                                value="female"
                                                onChange={(e) => handleChecked(e)}
                                                checked={user.gender === 'female'}
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
                                                onChange={(e) => handleChecked(e)}
                                                checked={
                                                    user.gender === 'other' || user.gender === null
                                                }
                                            />
                                            <label htmlFor="other">Khác</label>
                                        </span>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="">Ngày sinh</label>
                                        <input
                                            className="input-control"
                                            name="birthday"
                                            value={user.birthday}
                                            onChange={(e) => handleChange(e)}
                                            type="date"
                                        />
                                    </div>
                                </div>
                                <div className="profile-img d-flex flex-column justify-content-center align-items-center">
                                    <div className="img">
                                        <img src={handleDisplayAvatar()} alt="" />
                                    </div>
                                    <label htmlFor="image">
                                        <input
                                            accept="image/*"
                                            type="file"
                                            id="image"
                                            hidden
                                            onChange={handleUploadAvatar}
                                        />
                                        Chọn ảnh
                                    </label>
                                </div>
                            </div>
                            <button>Lưu</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Profile;
