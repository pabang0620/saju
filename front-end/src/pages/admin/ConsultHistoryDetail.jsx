import { useParams } from "react-router-dom";

// 더미 상담 기록
const dummyChatLog = {
  r1: [
    {
      type: "ai",
      content: "안녕하세요, 해월입니다. 오늘 운세를 시작해볼게요.",
    },
    { type: "user", content: "2025년에 결혼운이 있나요?" },
    { type: "ai", content: "올해는 결혼운이 강하게 들어와 있습니다." },
  ],
  r2: [
    { type: "ai", content: "봄결입니다~ 어떤 연애 고민이 있으신가요?" },
    { type: "user", content: "짝사랑하고 있는데 잘 될까요?" },
    { type: "ai", content: "천천히 다가가면 좋은 결과가 있을 수 있어요." },
  ],
};

export default function ConsultHistoryDetail() {
  const { id } = useParams();
  const chat = dummyChatLog[id] || [];

  return (
    <div className="consult-detail-wrapper">
      <h2 className="consult-detail-title">💬 상담 상세 내역</h2>

      <div className="consult-detail-chatbox">
        {chat.map((msg, idx) => (
          <div key={idx} className={`consult-bubble ${msg.type}`}>
            {msg.content}
          </div>
        ))}
      </div>

      <style jsx>{`
        .consult-detail-wrapper {
          padding: 2rem;
          max-width: 700px;
          margin: 0 auto;
        }

        .consult-detail-title {
          font-size: 1.6rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .consult-detail-chatbox {
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 1rem;
          background: #fafafa;
          max-height: 500px;
          overflow-y: auto;
        }

        .consult-bubble {
          padding: 0.8rem 1rem;
          border-radius: 10px;
          margin-bottom: 1rem;
          max-width: 80%;
        }

        .consult-bubble.user {
          background-color: #d0ebff;
          margin-left: auto;
        }

        .consult-bubble.ai {
          background-color: #eee;
          margin-right: auto;
        }
      `}</style>
    </div>
  );
}
