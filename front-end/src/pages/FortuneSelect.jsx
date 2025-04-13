import { useNavigate, useSearchParams } from "react-router-dom";

export default function FortuneSelect() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const type = params.get("type"); // free or paid

  const fortunes =
    type === "free"
      ? ["별자리 운세", "ADHD 진단", "오늘의 연애 지수", "이번달 운세"]
      : ["신년운세", "취업운", "연애운", "건강운"];

  return (
    <div className="fortune-select-wrapper">
      <h2 className="fortune-select-title">
        {type === "free" ? "🆓 무료 운세 선택" : "💰 유료 운세 선택"}
      </h2>

      <div className="fortune-list">
        {fortunes.map((f, idx) => (
          <button
            key={idx}
            className="fortune-item"
            onClick={() =>
              navigate(type === "free" ? "/mypage" : `/payment/p${idx + 1}`)
            }
          >
            {f}
          </button>
        ))}
      </div>

      <style jsx>{`
        .fortune-select-wrapper {
          padding: 2rem;
          text-align: center;
        }

        .fortune-select-title {
          font-size: 1.6rem;
          margin-bottom: 1.5rem;
        }

        .fortune-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .fortune-item {
          padding: 1rem;
          font-size: 1.1rem;
          background-color: #f0f0f0;
          border-radius: 10px;
          border: none;
          cursor: pointer;
        }

        .fortune-item:hover {
          background-color: #ddd;
        }
      `}</style>
    </div>
  );
}
