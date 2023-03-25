import { useEffect, useState } from 'react';
import Modal from '../../../../components/Modal';
function Address() {
    const [address, setAddress] = useState({
        name: '',
        phone: '',
        ward: '',
        district: '',
        province: '',
        street: '',
    });
    const modalBody = (
        <form>
            <div class="mb-3">
                <input
                    type="text"
                    className="w-100"
                    placeholder="Họ và tên"
                    required
                    name="name"
                    value={address.name}
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
        </form>
    );
    const modalHeader = 'Địa chỉ mới';
    const modalFooter = {
        close: 'Hủy',
        submit: 'Thêm',
    };
    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        setAddress({
            name: 'Trần Mẫn',
            phone: '0964294799',
            ward: 'Tà Đảnh',
            district: 'Tri Tôn',
            province: 'An Giang',
            street: 'Cầu đường thét',
        });
    }, []);
    return (
        <>
            <div className="wapper">
                <div className="header d-flex justify-content-between align-items-center">
                    <h5>Địa chỉ của tôi</h5>
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modal">
                        Thêm địa chỉ mới
                    </button>
                </div>
                <div className="address-list">
                    <div className="address-item d-flex justify-content-between align-items-center">
                        <div className="address">
                            <div className="name-phone mb-1">
                                <span className="name">Trần Minh Mẫn</span>
                                <span className="phone">0964294799</span>
                            </div>
                            <div className="address-content">
                                <p>Ktx Khu B đại học quốc gia</p>
                                <p>Phường Linh Trung, Thành Phố Thử Đức, TP.Hồ Chí Minh</p>
                            </div>
                            <div className="label">
                                <span>Mặc định</span>
                            </div>
                        </div>
                        <div className="address-control d-flex flex-column">
                            <div className="modify">
                                <button
                                    type="button"
                                    class="btn btn-link mb-1 text-decoration-none"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modal"
                                >
                                    Cập nhật
                                </button>
                                <button type="button" class="btn btn-link mb-1 text-decoration-none">
                                    Xóa
                                </button>
                            </div>
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                Thiết lập mặc định
                            </button>
                        </div>
                    </div>
                    <div className="address-item d-flex justify-content-between align-items-center">
                        <div className="address">
                            <div className="name-phone mb-1">
                                <span className="name">Trần Minh Mẫn</span>
                                <span className="phone">0964294799</span>
                            </div>
                            <div className="address-content">
                                <p>Ktx Khu B đại học quốc gia</p>
                                <p>Phường Linh Trung, Thành Phố Thử Đức, TP.Hồ Chí Minh</p>
                            </div>
                            <div className="label">
                                <span>Mặc định</span>
                            </div>
                        </div>
                        <div className="address-control d-flex flex-column">
                            <div className="modify">
                                <button type="button" class="btn btn-link mb-1 text-decoration-none">
                                    Cập nhật
                                </button>
                                <button type="button" class="btn btn-link mb-1 text-decoration-none">
                                    Xóa
                                </button>
                            </div>
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                Thiết lập mặc định
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal modalHeader={modalHeader} modalBody={modalBody} modalFooter={modalFooter} />
        </>
    );
}

export default Address;
