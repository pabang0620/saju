import { useNavigate } from "react-router-dom";
import { useState } from "react";

// 더미 상담 상품 목록
const dummyProducts = [
  {
    id: "p1",
    title: "2025년 신년운세",
    counselorName: "운세마스터 해월",
    category: "신년운세",
    price: 15000,
    isActive: true,
  },
  {
    id: "p2",
    title: "연애운 집중 상담",
    counselorName: "소울힐러 봄결",
    category: "연애운",
    price: 12000,
    isActive: false,
  },
];

export default function FortuneProductList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(dummyProducts);

  const toggleActive = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isActive: !p.isActive } : p))
    );
  };

  const deleteProduct = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="product-list-wrapper">
      <div className="product-list-header">
        <h2 className="product-list-title">📦 상담 상품 관리</h2>
        <button
          className="product-list-add-btn"
          onClick={() => navigate("/admin/products/new")}
        >
          + 상품 등록
        </button>
      </div>

      <table className="product-list-table">
        <thead>
          <tr>
            <th>제목</th>
            <th>상담사</th>
            <th>카테고리</th>
            <th>가격</th>
            <th>상태</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>{p.counselorName}</td>
              <td>{p.category}</td>
              <td>{p.price.toLocaleString()}원</td>
              <td>{p.isActive ? "판매중" : "비활성화"}</td>
              <td>
                <button
                  className="product-edit-btn"
                  onClick={() => navigate(`/admin/products/${p.id}`)}
                >
                  수정
                </button>
                <button
                  className="product-status-btn"
                  onClick={() => toggleActive(p.id)}
                >
                  {p.isActive ? "비활성화" : "활성화"}
                </button>
                <button
                  className="product-delete-btn"
                  onClick={() => deleteProduct(p.id)}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .product-list-wrapper {
          padding: 2rem;
        }

        .product-list-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .product-list-title {
          font-size: 1.6rem;
        }

        .product-list-add-btn {
          padding: 0.7rem 1rem;
          font-size: 1rem;
          border-radius: 8px;
          background: #4caf50;
          color: white;
          border: none;
          cursor: pointer;
        }

        .product-list-table {
          width: 100%;
          border-collapse: collapse;
        }

        .product-list-table th,
        .product-list-table td {
          border: 1px solid #ddd;
          padding: 0.8rem;
          text-align: center;
        }

        .product-edit-btn,
        .product-status-btn,
        .product-delete-btn {
          margin: 0 4px;
          padding: 0.4rem 0.6rem;
          border-radius: 6px;
          font-size: 0.85rem;
          border: none;
          cursor: pointer;
        }

        .product-edit-btn {
          background: #2196f3;
          color: white;
        }

        .product-status-btn {
          background: #ffa000;
          color: white;
        }

        .product-delete-btn {
          background: #f44336;
          color: white;
        }
      `}</style>
    </div>
  );
}
