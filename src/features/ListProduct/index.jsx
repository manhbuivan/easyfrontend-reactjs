import React, { useState } from "react";
import PropTypes from "prop-types";
import Products from "./components/Products";
import "./styles.scss";

ListProduct.propTypes = {};

function ListProduct(props) {
  const initlistProduct = [
    {
      id: 1,
      image:
        "https://product.hstatic.net/1000253775/product/img_2984_0bada2500ff44415bb04d8b60d5fab19_large.jpg",
      name: "Quần jeans BOUTON dark blue slim",
      price: "500,000 đ",
      status: "Đặt hàng",
    },

    {
      id: 2,
      image:
        "https://product.hstatic.net/1000253775/product/img_2689_3fae00d248be40199e0e51923748be7e_large.jpg",
      name: " Áo sơmi BOUTON signature ",
      price: "300,000 đ",
      status: "Đặt hàng",
    },

    {
      id: 3,
      image:
        "https://product.hstatic.net/1000253775/product/img_2835_f396659666af4eec905aa6bdf3387bdc_large.jpg",
      name: "Áo thun BOUTON Mc.key Mouse",
      price: "280,000 đ",
      status: "Đã chọn",
    },

    {
      id: 4,
      image:
        "https://product.hstatic.net/1000253775/product/img_2888_404f966928b64c5fa034195af40c5079_large.jpg",
      name: "Giày chelsea boots ICON DENIM da lộn",
      price: "900,000 đ",
      status: "Đặt hàng",
    },

    {
      id: 5,
      image:
        "https://product.hstatic.net/1000253775/product/img_1683_060f65c4c6904b20bb5209bf77e563f8_large.jpg",
      name: "Quần jeans P.B skinny basic",
      price: "500,000 đ",
      status: "Đặt hàng",
    },
  ];
  const [listProduct, setlistProduct] = useState(initlistProduct);
  const [filterProduct, setfilterProduct] = useState('all')

  const handleTodoClick = (id) => {
    const newList = [...listProduct];
    const a = newList
      .filter(function(list){
          return list.id === id;
      });
      a.map(
        (x) => (x.status = (x.status === "Đặt hàng") ? "Đã chọn" : "Đặt hàng")
      )

    setlistProduct(newList);    
  };

    const handleShowAllProduct = () => {
        setfilterProduct('all')
    }
    const handleShowChoseProduct = () => {
        setfilterProduct("Đã chọn")
    }
    const handleShowLoseProduct = () => {
        setfilterProduct("Đặt hàng")
    }

    const renderProduct = listProduct.filter(product => filterProduct === 'all' || filterProduct === product.status);

  return (
    <div>
      <div className="{list-product}">
        <h1 style={{ textAlign: "center" }}>List sản phẩm mới nhất </h1>
        <Products listProduct={renderProduct} onTodoClick={handleTodoClick} />

        <button onClick={handleShowAllProduct}>Tất cả sản phẩm</button>
        <button onClick={handleShowChoseProduct}>Sản phẩm đã chọn</button>
        <button onClick={handleShowLoseProduct}>Sản phẩm chưa chọn</button>
      </div>
    </div>
  );
}

export default ListProduct;
