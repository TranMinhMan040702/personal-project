import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../../../../components/Modal';
import './location.scss';
import { Link } from 'react-router-dom';
import config from '../../../../config';

function Location({ addresses, addressOrder, addressCurrent, setAddressCurrent, setAddressOrder }) {
    const modalHeader = 'Địa chỉ của tôi';
    const modalBody = (
        <div className="address-list">
            {addresses &&
                [...addresses]
                    .sort((a, b) => b.status - a.status)
                    .map((address, index) => {
                        return (
                            <div
                                key={index}
                                className="address-item d-flex justify-content-start align-items-start"
                            >
                                <input
                                    className="input-control"
                                    style={{ width: '10%', marginTop: '5px', height: '16px' }}
                                    type="radio"
                                    name="addressOrder"
                                    value={address.id}
                                    onChange={() => setAddressCurrent(address)}
                                    checked={address.id === addressCurrent.id}
                                />
                                <label htmlFor="">
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
                                </label>
                            </div>
                        );
                    })}
        </div>
    );
    const modalFooter = (
        <>
            <button
                type="button"
                class="btn btn-sm btn-secondary modal-address"
                data-bs-dismiss="modal"
                onClick={() => setAddressCurrent(addressOrder)}
            >
                Hủy
            </button>
            <button
                type="submit"
                data-bs-dismiss="modal"
                class="btn btn-sm btn-success"
                onClick={() => setAddressOrder(addressCurrent)}
            >
                Xác nhận
            </button>
        </>
    );
    return (
        <div className="location background">
            <div className="container ">
                <div className="top"></div>
                <div className="product">
                    <div className="header d-flex align-items-center">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <h4>Địa chỉ nhận hàng</h4>
                    </div>
                    {addressOrder ? (
                        <div className="address">
                            <span>{`${addressOrder.username} ${addressOrder.phone}`}</span>
                            {`${addressOrder.street}, ${addressOrder.ward}, ${addressOrder.district}, ${addressOrder.province}`}
                            <button
                                className="btn btn-link"
                                data-bs-toggle="modal"
                                data-bs-target="#modal-location"
                            >
                                Thay đổi
                            </button>
                        </div>
                    ) : (
                        <Link to={config.routes.web.user + '/address'}>
                            Bạn chưa có địa chỉ hãy thêm địa chỉ
                        </Link>
                    )}
                </div>
            </div>
            <Modal
                modalHeader={modalHeader}
                modalBody={modalBody}
                modalFooter={modalFooter}
                modalId={'modal-location'}
            />
        </div>
    );
}

export default Location;
