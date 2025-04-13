import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// 더미 결제/상담 이력
const dummyFortunes = [
  {
    id: "r1",
    title: "2025년 신년운세",
    counselor: "운세마스터 해월",
    category: "신년운세",
    date: "2025-04-13",
    isDone: false,
  },
  {
    id: "r2",
    title: "연애운 집중 상담",
    counselor: "소울힐러 봄결",
    category: "연애운",
    date: "2025-04-10",
    isDone: true,
  },
];

export default function MyPage() {
  const navigate = useNavigate();
  const [fortunes, setFortunes] = useState([]);

  useEffect(() => {
    // 추후 fetch(`/api/my-fortunes`)로 대체
    setFortunes(dummyFortunes);
  }, []);

  return (
    <div className="mypage-wrapper">
      <h2 className="mypage-title">📂 마이페이지</h2>

      {fortunes.length === 0 ? (
        <p className="mypage-empty">결제 내역이 없습니다.</p>
      ) : (
        <div className="mypage-list">
          {fortunes.map((item) => (
            <div key={item.id} className="mypage-card">
              <div className="mypage-card-main">
                <h3 className="mypage-card-title">{item.title}</h3>
                <p className="mypage-card-info">
                  상담사: {item.counselor} | 카테고리: {item.category}
                </p>
                <p className="mypage-card-date">결제일: {item.date}</p>
              </div>
              <button
                className="mypage-card-btn"
                onClick={() => navigate(`/mypage/detail/${item.id}`)}
              >
                {item.isDone ? "상담 보기" : "상담 시작"}
              </button>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .mypage-wrapper {
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .mypage-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .mypage-empty {
          text-align: center;
          color: #888;
        }

        .mypage-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .mypage-card {
          border: 1px solid #ddd;
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .mypage-card-title {
          font-size: 1.2rem;
          margin-bottom: 0.3rem;
        }

        .mypage-card-info,
        .mypage-card-date {
          font-size: 0.9rem;
          color: #555;
        }

        .mypage-card-btn {
          padding: 0.7rem 1.2rem;
          font-size: 1rem;
          border-radius: 8px;
          border: none;
          background-color: #4caf50;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
