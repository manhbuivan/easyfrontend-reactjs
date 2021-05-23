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

  const handleTodoClick = (id) => {
    const newList = [...listProduct];
    // sao lại dùng id chỗ này, mình dang dùng id chứ kh4ng phải index
    // à ừ nhỉ cũng đúng
    // thay button thành status 0úng nghĩa hưn
    // ok, ông update lại xem
    const a = newList
    //   .filter((x) => x.id === id)
      .filter(function(list){
          return list.id === id;
      });
      a.map(
        (x) => (x.status = (x.status === "Đặt hàng") ? "Đã chọn" : "Đặt hàng")
      )


      // xóa đống dưới đi. viết theo kiểu tui là anh Hậu hướng dẫn á
      // oke cứ để đấy có gì đọc lại
    /// lọc ra thèn Product nào có id mà thèn con gửi l3n, hiểu này hông // sao cứ phải có 2 cái  x.status nhỉ
        // à à oke
    // hiểu chỗ ffilter chưa // rồi // còn dòng tiếp theo
    // tại vì dùng filter nên nỏ return về 1 array, mà array có 1 phần tử àk
    // vì id là duy nhất
    // newItems[0].status = newItems[0].status === "Đặt hàng" ? "Đã chọn" : "Đặt hàng";
    // console.log(newItems);
    // const list = {
    //     ...newList,
    //     ...newItems,
    // };

    // work r kìa
    // ô giải thích cho filter hộ đc ko ?

    // thử 0i 0c ch[a]
    // newList[id] = {
    //     ...newList[id],
    //     // button : newList[id].button === "Đặt hàng" ? "Đã chọn" : "Đặt hàng",
    // }

    setlistProduct(newList);
  };

  return (
    <div>
      <div className="{list-product}">
        <h1 style={{ textAlign: "center" }}>List sản phẩm mới nhất </h1>
        <Products listProduct={listProduct} onTodoClick={handleTodoClick} />
      </div>
    </div>
  );
}

export default ListProduct;
