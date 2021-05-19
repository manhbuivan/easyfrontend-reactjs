import React from 'react';
import PropTypes from 'prop-types';
import Products from './components/Products';
import "./styles.scss";

ListProduct.propTypes = {
    
};

function ListProduct(props) {
    const listProduct = [
        {
            id : 1,
            image : 'https://product.hstatic.net/1000253775/product/img_2984_0bada2500ff44415bb04d8b60d5fab19_large.jpg',
            name : 'Quần jeans BOUTON dark blue slim',
            price : "500,000 đ",
        },
        {
            id : 2,
            image : 'https://product.hstatic.net/1000253775/product/img_2689_3fae00d248be40199e0e51923748be7e_large.jpg',
            name : ' Áo sơmi BOUTON signature ',
            price : "300,000 đ",
        },
        {
            id : 3,
            image : 'https://product.hstatic.net/1000253775/product/img_2835_f396659666af4eec905aa6bdf3387bdc_large.jpg',
            name : 'Áo thun BOUTON Mc.key Mouse',
            price : "280,000 đ",
        },
        {
            id : 4,
            image : 'https://product.hstatic.net/1000253775/product/img_2888_404f966928b64c5fa034195af40c5079_large.jpg',
            name : 'Giày chelsea boots ICON DENIM da lộn',
            price : "900,000 đ",
        },
        {
            id : 5,
            image : 'https://product.hstatic.net/1000253775/product/img_1683_060f65c4c6904b20bb5209bf77e563f8_large.jpg',
            name : 'Quần jeans P.B skinny basic',
            price : "500,000 đ",
        },


    ]

    return (
        <div>
            <div className="{list-product">
                <h1>List sản phẩm mới nhất </h1>
                <Products listProduct={listProduct}/>  
            </div>
        </div>
    );
}

export default ListProduct;