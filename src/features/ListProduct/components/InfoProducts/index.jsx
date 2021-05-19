import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss";

InfoProducts.propTypes = {
    
};

function InfoProducts({descProduct}) {
    return (
        <div>
            <div className="img-products">
                <img src={descProduct.image} alt="" />
            </div>
            <div className="desc">
                <h3>{descProduct.name}</h3>
                <p>{descProduct.price}</p>
                <button>Đặt hàng</button>
            </div>
        </div>
    );
}

export default InfoProducts;