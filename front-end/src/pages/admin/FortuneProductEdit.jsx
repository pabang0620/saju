import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// 더미 상담사 목록 & 상품 목록
const dummyCounselors = [
  { id: "1", name: "운세마스터 해월" },
  { id: "2", name: "소울힐러 봄결" },
];

const dummyProducts = [
  {
    id: "p1",
    title: "2025년 신년운세",
    counselorId: "1",
    category: "신년운세",
    price: 15000,
    description: "2025년을 미리 보는 상담 서비스입니다.",
  },
];

export default function FortuneProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const productToEdit = dummyProducts.find((p) => p.id === id);

  const [form, setForm] = useState({
    title: "",
    counselorId: "",
    category: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    if (productToEdit) {
      setForm(productToEdit);
    } else {
      alert("해당 상품이 존재하지 않습니다.");
      navigate("/admin/products");
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("수정된 상품:", form);
    alert("상품이 수정되었습니다.");
    navigate("/admin/products");
  };

  return (
    <div className="product-edit-wrapper">
      <h2 className="product-edit-title">✏️ 상담 상품 수정</h2>
      <form className="product-edit-form" onSubmit={handleSubmit}>
        <label className="product-edit-label">
          상품 제목
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="product-edit-input"
          />
        </label>

        <label className="product-edit-label">
          상담사 선택
          <select
            name="counselorId"
            value={form.counselorId}
            onChange={handleChange}
            className="product-edit-input"
          >
            <option value="">상담사 선택</option>
            {dummyCounselors.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>

        <label className="product-edit-label">
          카테고리
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="product-edit-input"
          >
            <option value="">카테고리 선택</option>
            <option value="신년운세">신년운세</option>
            <option value="연애운">연애운</option>
            <option value="취업운">취업운</option>
            <option value="건강운">건강운</option>
          </select>
        </label>

        <label className="product-edit-label">
          가격
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="product-edit-input"
          />
        </label>

        <label className="product-edit-label">
          설명
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="product-edit-textarea"
          />
        </label>

        <button type="submit" className="product-edit-btn">
          수정 완료
        </button>
      </form>

      <style jsx>{`
        .product-edit-wrapper {
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .product-edit-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .product-edit-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .product-edit-label {
          display: flex;
          flex-direction: column;
          font-weight: bold;
          font-size: 1rem;
        }

        .product-edit-input,
        .product-edit-textarea {
          margin-top: 0.5rem;
          padding: 0.8rem;
          font-size: 1rem;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        .product-edit-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .product-edit-btn {
          padding: 1rem;
          font-size: 1rem;
          border-radius: 8px;
          background-color: #2196f3;
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
