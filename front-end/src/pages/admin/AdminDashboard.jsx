import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard-wrapper">
      <h1 className="admin-dashboard-title">🛠️ 관리자 대시보드</h1>
      <p className="admin-dashboard-sub">상담사와 상품을 관리할 수 있습니다</p>

      <div className="admin-dashboard-buttons">
        <button
          className="admin-dashboard-btn"
          onClick={() => navigate("/admin/counselors")}
        >
          👤 상담사 관리
        </button>
        <button
          className="admin-dashboard-btn"
          onClick={() => navigate("/admin/products")}
        >
          📦 상담 상품 관리
        </button>
      </div>

      <style jsx>{`
        .admin-dashboard-wrapper {
          padding: 2rem;
          text-align: center;
        }

        .admin-dashboard-title {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .admin-dashboard-sub {
          color: #666;
          margin-bottom: 2rem;
        }

        .admin-dashboard-buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .admin-dashboard-btn {
          padding: 1rem 2rem;
          font-size: 1.1rem;
          width: 240px;
          border-radius: 10px;
          background: #f1f1f1;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .admin-dashboard-btn:hover {
          background-color: #e0e0e0;
        }
      `}</style>
    </div>
  );
}
