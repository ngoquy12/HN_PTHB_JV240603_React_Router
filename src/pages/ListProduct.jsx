import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function ListProduct() {
  // Tạo 1 mảng chưa danh sách product: id, name, price
  // REnder danh sách ra ngoài giao diện
  // Trong cart product, tạo 1 nút xem chi tiết
  // Khi nhấn nút nó sẽ chuyển hướng đến trang detail kèm theo id có sp đó
  const products = [
    {
      id: 1,
      name: "Xoài",
      price: 10000,
    },
    {
      id: 2,
      name: "Dưa hấu",
      price: 20000,
    },
    {
      id: 3,
      name: "Cam",
      price: 10000,
    },
  ];

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useSearchParams();

  console.log("Tên sản phẩm: ", searchValue.get("key"));
  console.log("Giá tối thiểu: ", searchValue.get("minPrice"));
  console.log("Giá tối đa: ", searchValue.get("maxPrice"));

  const handleRiderect = (id, name) => {
    navigate(`/product-detail/${id}/${name}`, {
      state: "Sản phẩm này là độc quyền",
    });
  };

  const handleSearch = () => {
    setSearchValue({ key: inputValue, minPrice: 10000, maxPrice: 20000 });
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button onClick={handleSearch}>Tìm kiếm</button>

      <h3>ListProduct</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Price</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {products.map((pro, index) => (
            <tr key={pro.id}>
              <td>{index + 1}</td>
              <td>{pro.name}</td>
              <td>{pro.price}</td>
              <td>
                {/* <Link to={`/product-detail/${pro.id}/${pro.name}`}>
                  View detail
                </Link> */}

                <button onClick={() => handleRiderect(pro.id, pro.name)}>
                  View Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
