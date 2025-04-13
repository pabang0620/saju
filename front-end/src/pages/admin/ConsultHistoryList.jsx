import { useNavigate } from "react-router-dom";

// 더미 상담 내역 요약
const dummyHistory = [
  {
    id: "r1",
    user: "홍길동",
    counselor: "운세마스터 해월",
    category: "신년운세",
    createdAt: "2025-04-13 11:22",
  },
  {
    id: "r2",
    user: "이봄결",
    counselor: "소울힐러 봄결",
    category: "연애운",
    createdAt: "2025-04-10 15:40",
  },
];

export default function ConsultHistoryList() {
  const navigate = useNavigate();

  return (
    <div className="consult-history-wrapper">
      <h2 className="consult-history-title">📜 상담 내역 관리</h2>
      <table className="consult-history-table">
        <thead>
          <tr>
            <th>사용자</th>
            <th>상담사</th>
            <th>카테고리</th>
            <th>일시</th>
            <th>상세보기</th>
          </tr>
        </thead>
        <tbody>
          {dummyHistory.map((row) => (
            <tr key={row.id}>
              <td>{row.user}</td>
              <td>{row.counselor}</td>
              <td>{row.category}</td>
              <td>{row.createdAt}</td>
              <td>
                <button
                  className="consult-detail-btn"
                  onClick={() => navigate(`/admin/history/${row.id}`)}
                >
                  보기
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .consult-history-wrapper {
          padding: 2rem;
        }

        .consult-history-title {
          font-size: 1.6rem;
          margin-bottom: 1.2rem;
        }

        .consult-history-table {
          width: 100%;
          border-collapse: collapse;
        }

        .consult-history-table th,
        .consult-history-table td {
          padding: 0.8rem;
          border: 1px solid #ccc;
          text-align: center;
        }

        .consult-detail-btn {
          padding: 0.4rem 0.8rem;
          background: #2196f3;
          color: white;
          border-radius: 6px;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
