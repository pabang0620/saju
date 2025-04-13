import { useNavigate } from "react-router-dom";
import { useState } from "react";

// 임시 상담사 목록
const dummyCounselors = [
  {
    id: "1",
    name: "운세마스터 해월",
    avatar: "/images/counselor1.png",
    tone: "단호하지만 따뜻한 말투",
    career: "20년 경력의 역학자, K운세협회 자문위원",
  },
  {
    id: "2",
    name: "소울힐러 봄결",
    avatar: "/images/counselor2.png",
    tone: "다정하고 포근한 말투",
    career: "심리 상담사 겸 타로 마스터",
  },
];

export default function CounselorList() {
  const navigate = useNavigate();
  const [counselors, setCounselors] = useState(dummyCounselors);

  const handleDelete = (id) => {
    const confirmed = window.confirm("정말 삭제하시겠습니까?");
    if (confirmed) {
      setCounselors((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="counselor-list-wrapper">
      <div className="counselor-list-header">
        <h2 className="counselor-list-title">📋 상담사 목록</h2>
        <button
          className="counselor-list-add-btn"
          onClick={() => navigate("/admin/counselors/new")}
        >
          + 상담사 추가
        </button>
      </div>

      <div className="counselor-list-grid">
        {counselors.map((counselor) => (
          <div key={counselor.id} className="counselor-card">
            <img
              src={counselor.avatar}
              alt="상담사 이미지"
              className="counselor-card-img"
            />
            <div className="counselor-card-info">
              <strong>{counselor.name}</strong>
              <p>{counselor.tone}</p>
              <p>{counselor.career}</p>
              <div className="counselor-card-actions">
                <button
                  className="counselor-edit-btn"
                  onClick={() => navigate(`/admin/counselors/${counselor.id}`)}
                >
                  수정
                </button>
                <button
                  className="counselor-delete-btn"
                  onClick={() => handleDelete(counselor.id)}
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .counselor-list-wrapper {
          padding: 2rem;
        }

        .counselor-list-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .counselor-list-title {
          font-size: 1.8rem;
        }

        .counselor-list-add-btn {
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 0.8rem 1.2rem;
          font-size: 1rem;
          cursor: pointer;
        }

        .counselor-list-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .counselor-card {
          border: 1px solid #ddd;
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          gap: 1rem;
        }

        .counselor-card-img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
        }

        .counselor-card-info {
          flex: 1;
        }

        .counselor-card-actions {
          margin-top: 0.8rem;
          display: flex;
          gap: 0.5rem;
        }

        .counselor-edit-btn,
        .counselor-delete-btn {
          padding: 0.5rem 1rem;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .counselor-edit-btn {
          background-color: #2196f3;
          color: white;
        }

        .counselor-delete-btn {
          background-color: #f44336;
          color: white;
        }
      `}</style>
    </div>
  );
}
