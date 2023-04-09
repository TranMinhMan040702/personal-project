import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { addressUser } from '../../../../redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteAddress, uploadAddress } from '../../../../redux/slice/addressSlice';
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../../../../components/Loading';
import Modal from '../../../../components/Modal';
import config from '../../../../config';

function Address({ account }) {
    const addresses = useSelector(addressUser);
    const dispath = useDispatch();
    const [address, setAddress] = useState({
        id: '',
        username: '',
        phone: '',
        ward: '',
        district: '',
        province: '',
        status: false,
        street: '',
        userId: '',
    });
    const [check, setCheck] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setAddress({ ...address, userId: account.id });
        setLoading(false);
    }, [account]);

    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };
    const handleCheckBox = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.checked });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispath(uploadAddress(address));
        clearedData();
        toast.success(config.message.success.uploadAddress);
    };
    const handleDeleteAddress = (e, id) => {
        e.preventDefault();
        dispath(deleteAddress(id));
        toast.warning(config.message.success.deleteAddress);
    };
    const handleUpdateAddress = (address) => {
        setAddress(address);
        setCheck(address.status);
    };
    const handleSetDefaultAddress = (address) => {
        dispath(uploadAddress({ ...address, status: true }));
    };
    const clearedData = () => {
        setAddress({
            username: '',
            phone: '',
            ward: '',
            district: '',
            province: '',
            street: '',
            status: false,
            userId: account.id,
        });
    };
    const modalHeader = 'Địa chỉ mới';
    const modalBody = (
        <form style={{ padding: '20px' }}>
            <div class="mb-3">
                <input
                    type="text"
                    className="w-100"
                    placeholder="Họ và tên"
                    required
                    name="username"
                    value={address.username}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div class="mb-3">
                <input
                    type="text"
                    className="w-100"
                    placeholder="Số điện thoại"
                    required
                    name="phone"
                    value={address.phone}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="row mb-3">
                <div class="col-md-4">
                    <input
                        type="text"
                        className="w-100"
                        placeholder="Phường/Xã"
                        required
                        name="ward"
                        value={address.ward}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div class="col-md-4">
                    <input
                        type="text"
                        className="w-100"
                        placeholder="Huyện/Quận"
                        required
                        name="district"
                        value={address.district}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div class="col-md-4">
                    <input
                        type="text"
                        className="w-100"
                        placeholder="Tỉnh/Thành Phố"
                        required
                        name="province"
                        value={address.province}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <div class="mb-3">
                <textarea
                    type="text"
                    className="w-100"
                    placeholder="Địa chỉ cụ thể"
                    required
                    name="street"
                    value={address.street}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div class="mb-3 d-flex align-items-center">
                <input
                    type="checkbox"
                    id="status"
                    name="status"
                    style={{ width: '20px', height: '20px' }}
                    checked={address.status}
                    onChange={(e) => handleCheckBox(e)}
                    disabled={check}
                />
                <label for="status" style={{ marginTop: '4px', marginLeft: '10px' }}>
                    Đặt làm địa chỉ mặt định
                </label>
                <br />
            </div>
        </form>
    );
    const modalFooter = (
        <>
            <button
                type="button"
                class="btn btn-sm btn-secondary modal-address"
                data-bs-dismiss="modal"
                onClick={() => clearedData()}
            >
                Hủy
            </button>
            <button
                onClick={(e) => handleSubmit(e)}
                type="submit"
                data-bs-dismiss="modal"
                class="btn btn-sm btn-success"
            >
                Tải lên
            </button>
        </>
    );
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="wapper">
                    <div className="header d-flex justify-content-between align-items-center">
                        <h5>Địa chỉ của tôi</h5>
                        <button
                            type="button"
                            class="btn btn-success"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-address"
                        >
                            Thêm địa chỉ mới
                        </button>
                    </div>
                    <div className="address-list">
                        {addresses &&
                            [...addresses]
                                .sort((a, b) => b.status - a.status)
                                .map((address, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="address-item d-flex justify-content-between align-items-center"
                                        >
                                            <div className="address">
                                                <div className="name-phone mb-1">
                                                    <span className="name">{address.username}</span>
                                                    <span className="phone">{address.phone}</span>
                                                </div>
                                                <div className="address-content">
                                                    <p>{address.street}</p>
                                                    <p>
                                                        {`${address.ward}, ${address.district}, ${address.province}`}
                                                    </p>
                                                </div>
                                                {address.status && (
                                                    <div className="label">
                                                        <span>Mặc định</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="address-control d-flex flex-column">
                                                <div className="modify d-flex justify-content-end">
                                                    <button
                                                        type="button"
                                                        class="btn btn-link mb-1 text-decoration-none"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#modal"
                                                        onClick={() => handleUpdateAddress(address)}
                                                    >
                                                        Cập nhật
                                                    </button>
                                                    {!address.status && (
                                                        <button
                                                            type="button"
                                                            class="btn btn-link mb-1 text-decoration-none"
                                                            onClick={(e) =>
                                                                handleDeleteAddress(e, address.id)
                                                            }
                                                        >
                                                            Xóa
                                                        </button>
                                                    )}
                                                </div>
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-outline-secondary"
                                                    disabled={address.status}
                                                    onClick={() => handleSetDefaultAddress(address)}
                                                >
                                                    Thiết lập mặc định
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                    </div>
                </div>
            )}
            <Modal
                modalHeader={modalHeader}
                modalBody={modalBody}
                modalFooter={modalFooter}
                modalId={'modal-address'}
            />
            <ToastContainer autoClose={1000} pauseOnHover={false} />
        </>
    );
}

export default Address;
