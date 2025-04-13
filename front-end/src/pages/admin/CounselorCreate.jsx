import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CounselorCreate() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    tone: "",
    career: "",
    avatar: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 실제로는 백엔드로 POST 요청
    console.log("등록된 상담사:", form);
    alert("상담사가 등록되었습니다.");
    navigate("/admin/counselors");
  };

  return (
    <div className="counselor-create-wrapper">
      <h2 className="counselor-create-title">🧙 상담사 등록</h2>
      <form className="counselor-create-form" onSubmit={handleSubmit}>
        <label className="counselor-create-label">
          이름
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="counselor-create-input"
          />
        </label>

        <label className="counselor-create-label">
          말투 스타일
          <input
            type="text"
            name="tone"
            value={form.tone}
            onChange={handleChange}
            className="counselor-create-input"
            placeholder="예: 다정한 말투, 단호한 말투 등"
          />
        </label>

        <label className="counselor-create-label">
          커리어 소개
          <textarea
            name="career"
            value={form.career}
            onChange={handleChange}
            className="counselor-create-textarea"
          />
        </label>

        <label className="counselor-create-label">
          프로필 이미지 URL
          <input
            type="text"
            name="avatar"
            value={form.avatar}
            onChange={handleChange}
            className="counselor-create-input"
          />
        </label>

        <button type="submit" className="counselor-create-btn">
          등록하기
        </button>
      </form>

      <style jsx>{`
        .counselor-create-wrapper {
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .counselor-create-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .counselor-create-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .counselor-create-label {
          display: flex;
          flex-direction: column;
          font-weight: bold;
          font-size: 1rem;
        }

        .counselor-create-input,
        .counselor-create-textarea {
          margin-top: 0.5rem;
          padding: 0.8rem;
          font-size: 1rem;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        .counselor-create-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .counselor-create-btn {
          padding: 1rem;
          font-size: 1rem;
          border-radius: 8px;
          background-color: #4caf50;
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
