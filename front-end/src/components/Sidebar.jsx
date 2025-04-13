import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar-wrapper">
      <ul>
        <li onClick={() => navigate("/")}>🏠 홈</li>
        <li onClick={() => navigate("/mypage")}>📂 마이페이지</li>
        <li onClick={() => navigate("/admin")}>🛠 관리자</li>
      </ul>

      <style jsx>{`
        .sidebar-wrapper {
          position: fixed;
          top: 60px;
          left: 0;
          width: 200px;
          height: calc(100vh - 60px);
          background-color: #f0eaf4;
          padding: 2rem 1rem;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          margin-bottom: 1.5rem;
          cursor: pointer;
          font-weight: 500;
        }

        li:hover {
          color: #5e4b8b;
        }
      `}</style>
    </aside>
  );
}
