import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 임시 상담사 목록
const dummyCounselors = [
  { id: "1", name: "운세마스터 해월" },
  { id: "2", name: "소울힐러 봄결" },
];

export default function FortuneProductCreate() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    counselorId: "",
    category: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("상품 등록:", form);
    alert("상품이 등록되었습니다.");
    navigate("/admin/products");
  };

  return (
    <div className="product-create-wrapper">
      <h2 className="product-create-title">🛍️ 상담 상품 등록</h2>
      <form className="product-create-form" onSubmit={handleSubmit}>
        <label className="product-create-label">
          상품 제목
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="product-create-input"
          />
        </label>

        <label className="product-create-label">
          상담사 선택
          <select
            name="counselorId"
            value={form.counselorId}
            onChange={handleChange}
            className="product-create-input"
          >
            <option value="">상담사 선택</option>
            {dummyCounselors.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>

        <label className="product-create-label">
          카테고리
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="product-create-input"
          >
            <option value="">카테고리 선택</option>
            <option value="신년운세">신년운세</option>
            <option value="연애운">연애운</option>
            <option value="취업운">취업운</option>
            <option value="건강운">건강운</option>
          </select>
        </label>

        <label className="product-create-label">
          가격
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="product-create-input"
          />
        </label>

        <label className="product-create-label">
          설명
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="product-create-textarea"
          />
        </label>

        <button type="submit" className="product-create-btn">
          등록하기
        </button>
      </form>

      <style jsx>{`
        .product-create-wrapper {
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .product-create-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .product-create-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .product-create-label {
          display: flex;
          flex-direction: column;
          font-weight: bold;
          font-size: 1rem;
        }

        .product-create-input,
        .product-create-textarea {
          margin-top: 0.5rem;
          padding: 0.8rem;
          font-size: 1rem;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        .product-create-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .product-create-btn {
          padding: 1rem;
          font-size: 1rem;
          border-radius: 8px;
          background-color: #4caf50;
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
