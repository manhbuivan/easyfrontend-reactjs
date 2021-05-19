import React from 'react';
import PropTypes from 'prop-types';
import InfoProducts from '../InfoProducts';
import "./styles.scss";
Products.propTypes = {
    
};

function Products({listProduct}) {


    return (
        <div>
            <ul className="show-list">
                {listProduct.map(listItem => (
                    <li key={listItem.id}>
                        <InfoProducts descProduct = {listItem}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;