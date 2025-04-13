import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../api/auth";

export default function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim()) {
      alert("이름을 입력해주세요.");
      return;
    }

    const isAdmin = username.toLowerCase() === "admin";
    const dummyToken = `jwt-${username}-${Date.now()}`;
    setToken(dummyToken);

    navigate(isAdmin ? "/admin" : "/");
  };

  return (
    <div className="login-wrapper">
      <h1 className="login-title">🔐 로그인</h1>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        className="login-input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>
        로그인
      </button>

      <style jsx>{`
        .login-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
        }

        .login-title {
          font-size: 1.8rem;
          margin-bottom: 2rem;
        }

        .login-input {
          width: 250px;
          padding: 1rem;
          margin-bottom: 1.2rem;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        .login-button {
          width: 250px;
          padding: 1rem;
          background-color: #4a90e2;
          color: white;
          border-radius: 8px;
          border: none;
        }
      `}</style>
    </div>
  );
}
