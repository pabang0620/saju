import { useNavigate } from "react-router-dom";

export default function PaymentFail() {
  const navigate = useNavigate();

  return (
    <div className="payment-fail-wrapper">
      <h2 className="payment-fail-title">❌ 결제에 실패했습니다</h2>
      <p className="payment-fail-message">
        문제가 발생했습니다. 다시 시도해 주세요.
      </p>

      <button
        className="payment-fail-btn"
        onClick={() => navigate("/select?type=paid")}
      >
        다시 시도하기
      </button>

      <style jsx>{`
        .payment-fail-wrapper {
          text-align: center;
          padding: 2rem;
        }

        .payment-fail-title {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: #d32f2f;
        }

        .payment-fail-message {
          font-size: 1rem;
          margin-bottom: 2rem;
          color: #555;
        }

        .payment-fail-btn {
          padding: 1rem 2rem;
          font-size: 1rem;
          background-color: #f44336;
          color: white;
          border-radius: 8px;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
