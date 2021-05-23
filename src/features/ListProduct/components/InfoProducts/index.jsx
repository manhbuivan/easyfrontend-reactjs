import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss";

InfoProducts.propTypes = {
    
};


// day la thang chau 

// minh muon truyen id len thang cha de xu li theo id nhung chua biet truyen kieu gi, ok để mình thử
function InfoProducts({descProduct, onItemClick}) {
    const handleProductClick = () => {
        if(!onItemClick) return;

        onItemClick(descProduct.id)
    }

    return (
        <div>
            <div className="img-products">
                <img src={descProduct.image} alt="" />
            </div>
            <div className="desc">
                <h3>{descProduct.name}</h3>
                <p>{descProduct.price}</p>
                <button onClick={() => handleProductClick()}>{descProduct.status}</button>
            </div>
        </div>
    );
}

export default InfoProducts;