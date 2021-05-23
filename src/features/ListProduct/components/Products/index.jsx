import React from 'react';
import PropTypes from 'prop-types';
import InfoProducts from '../InfoProducts';
import "./styles.scss";
Products.propTypes = {
    
};


// day la thang con
function Products({listProduct, onTodoClick}) {
    const handleItemClick = (descProductId) => {
        if(!onTodoClick) return;
        onTodoClick(descProductId);
    };
    return (
        <div>
            <ul className="show-list">
                {listProduct.map(listItem => (
                    <li key={listItem.id}
                    >
                        <InfoProducts onItemClick={handleItemClick} descProduct = {listItem}/>                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;