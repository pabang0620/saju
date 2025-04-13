import { useParams, useNavigate } from "react-router-dom";
import { topFortunes } from "../dummy";

export default function SajuDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = topFortunes.find((f) => f.id === id);
  if (!item) return <p>해당 상품을 찾을 수 없습니다.</p>;

  const handleStart = () => {
    navigate(`/payment/${item.id}`);
  };

  return (
    <div className="saju-detail-wrapper">
      <img src={item.image} alt={item.title} className="saju-img" />
      <div className="saju-info">
        <h2>{item.title}</h2>
        <p>{item.detail}</p>
        <p className="saju-price">💰 {item.price.toLocaleString()}원</p>
      </div>

      <div className="fixed-start-bar">
        <button className="start-button" onClick={handleStart}>
          시작하기
        </button>
      </div>

      <style jsx>{`
        .saju-detail-wrapper {
          padding: 2rem;
          padding-bottom: 6rem;
        }

        .saju-img {
          width: 100%;
          max-height: 260px;
          object-fit: cover;
          border-radius: 12px;
        }

        .saju-info {
          margin-top: 1.5rem;
        }

        .saju-info h2 {
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
        }

        .saju-info p {
          line-height: 1.6;
        }

        .saju-price {
          margin-top: 1rem;
          font-weight: bold;
          color: #5e4b8b;
        }

        .fixed-start-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          border-top: 1px solid #ddd;
          padding: 1rem 2rem;
          display: flex;
          justify-content: center;
          z-index: 1000;
        }

        .start-button {
          background-color: #5e4b8b;
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
