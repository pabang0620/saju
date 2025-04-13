import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar-wrapper">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        🔮 DreamRu
      </div>
      <div className="navbar-right">
        <button onClick={() => navigate("/login")}>로그인</button>
      </div>

      <style jsx>{`
        .navbar-wrapper {
          height: 60px;
          padding: 0 1.5rem;
          background-color: #5e4b8b;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }

        .navbar-logo {
          font-size: 1.3rem;
          font-weight: bold;
          cursor: pointer;
        }

        .navbar-right button {
          background-color: #ffe8d6;
          color: #1b1b3a;
          border: none;
          padding: 0.6rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
        }
      `}</style>
    </header>
  );
}
