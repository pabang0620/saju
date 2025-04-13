import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// 더미 상품 데이터
const dummyProducts = [
  {
    id: "p1",
    title: "2025년 신년운세",
    description: "새해 전체 흐름과 조언을 제공하는 상품",
    price: 15000,
    counselorName: "운세마스터 해월",
  },
  {
    id: "p2",
    title: "연애운 집중 상담",
    description: "연애 기회와 흐름을 중점적으로 보는 상품",
    price: 12000,
    counselorName: "소울힐러 봄결",
  },
];

export default function PaymentPage() {
  const { type } = useParams(); // 예: p1
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = dummyProducts.find((p) => p.id === type);
    if (!found) {
      alert("상품을 찾을 수 없습니다.");
      navigate("/select?type=paid");
    } else {
      setProduct(found);
    }
  }, [type]);

  const handlePay = () => {
    // 여기에 카카오페이 / 토스페이 연동 예정
    console.log("결제 요청:", product);
    alert("결제 성공 (모의)");
    navigate(`/payment/success?productId=${product.id}`);
  };

  if (!product) return null;

  return (
    <div className="payment-wrapper">
      <h2 className="payment-title">🧾 결제 페이지</h2>

      <div className="payment-box">
        <h3 className="payment-product-title">{product.title}</h3>
        <p className="payment-desc">{product.description}</p>
        <p className="payment-counselor">상담사: {product.counselorName}</p>
        <p className="payment-price">
          가격: {product.price.toLocaleString()}원
        </p>
      </div>

      <button className="payment-button" onClick={handlePay}>
        💳 결제하기
      </button>

      <style jsx>{`
        .payment-wrapper {
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .payment-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
        }

        .payment-box {
          border: 1px solid #ddd;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          text-align: left;
        }

        .payment-product-title {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .payment-desc {
          margin-bottom: 0.5rem;
        }

        .payment-counselor {
          font-weight: bold;
          margin-bottom: 0.3rem;
        }

        .payment-price {
          color: #d32f2f;
          font-weight: bold;
        }

        .payment-button {
          padding: 1rem 2rem;
          font-size: 1rem;
          background-color: #4caf50;
          color: white;
          border-radius: 8px;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
