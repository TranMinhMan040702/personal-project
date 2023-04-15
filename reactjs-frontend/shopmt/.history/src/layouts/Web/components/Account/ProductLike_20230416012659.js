/* eslint-disable react-hooks/exhaustive-deps */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeartCrack } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import LikeProductService from '../../../../services/LikeProductService';
import Empty from '../../../../components/Empty';
import images from '../../../../assets/images';
import Loading from '../../../../components/Loading';

function ProductLike({ account }) {
    const [productLikes, setProductLikes] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductLike(account.id);
    }, []);

    const getProductLike = async (userId) => {
        try {
            const response = await LikeProductService.getProductLikebyUser(userId);
            setProductLikes(response.data.products);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="wapper">
            {loading ? (
                <Loading />
            ) : (
                <>
                    <div className="header d-flex justify-content-between align-items-center">
                        <h5>Sản phẩm yêu thích của tôi</h5>
                    </div>
                    <div className="product-like-list">
                        {productLikes.length > 0 ? (
                            productLikes.map((product) => {
                                return (
                                    <div className="cart-details d-flex align-items-center justify-content-between my-3">
                                        <div className="infor d-flex align-items-center justify-content-start">
                                            <div className="cart-image d-flex">
                                                <img
                                                    className="img-thumbnail"
                                                    src={product.images[0]}
                                                    alt="product"
                                                    style={{ width: '100px', height: '100px' }}
                                                />
                                            </div>
                                            <div className="name-des">
                                                <h4>{product.name}</h4>
                                                <p>{product.description}</p>
                                            </div>
                                        </div>
                                        <div className="control flex-column d-flex justify-content-center align-items-center">
                                            <span className="like">
                                                <FontAwesomeIcon icon={faHeartCrack} />
                                            </span>
                                            <span className="add-cart">
                                                <FontAwesomeIcon icon={faCartPlus} />
                                            </span>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <Empty title="Chưa có sản phẩm yêu thích" image={images.productEmpty} />
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default ProductLike;
