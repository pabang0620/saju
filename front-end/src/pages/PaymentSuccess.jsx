import { useNavigate, useSearchParams } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const productId = params.get("productId");

  return (
    <div className="payment-success-wrapper">
      <h2 className="payment-success-title">🎉 결제가 완료되었습니다</h2>
      <p className="payment-success-message">상담을 바로 시작해보세요.</p>

      <div className="payment-success-buttons">
        <button onClick={() => navigate("/mypage")}>마이페이지로 이동</button>
        {productId && (
          <button onClick={() => navigate(`/mypage/detail/${productId}`)}>
            상담 바로 시작
          </button>
        )}
      </div>

      <style jsx>{`
        .payment-success-wrapper {
          padding: 2rem;
          text-align: center;
        }

        .payment-success-title {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

        .payment-success-message {
          margin-bottom: 2rem;
        }

        .payment-success-buttons button {
          margin: 0 0.5rem;
          padding: 0.8rem 1.2rem;
          font-size: 1rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
        }

        .payment-success-buttons button:first-of-type {
          background-color: #4caf50;
          color: white;
        }

        .payment-success-buttons button:last-of-type {
          background-color: #5e4b8b;
          color: white;
        }
      `}</style>
    </div>
  );
}
