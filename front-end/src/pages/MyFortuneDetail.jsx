import { useState } from "react";
import { fetchChatFromGPT } from "../api/chatAPI";

export default function ChatBox() {
  const [chatHistory, setChatHistory] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { type: "user", content: input };
    setChatHistory((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const fullReply = await fetchChatFromGPT(input);

    const chunks = fullReply.match(/.{1,50}/g) || [fullReply];

    for (const chunk of chunks) {
      await sleep(Math.random() * 1000 + 2000); // 2~3초
      setChatHistory((prev) => [...prev, { type: "ai", content: chunk }]);
    }

    setLoading(false);
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-box">
        {chatHistory.map((msg, idx) => (
          <div key={idx} className={`msg ${msg.type}`}>
            {msg.content}
          </div>
        ))}

        {loading && (
          <div className="msg ai typing">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        )}
      </div>

      <div className="input-box">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="질문을 입력하세요"
        />
        <button onClick={handleSend}>전송</button>
      </div>

      <style jsx>{`
        .chat-wrapper {
          padding: 1rem;
        }

        .chat-box {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 1rem;
          max-height: 400px;
          overflow-y: auto;
        }

        .msg {
          margin-bottom: 0.75rem;
          line-height: 1.6;
        }

        .msg.user {
          text-align: right;
          color: #333;
        }

        .msg.ai {
          text-align: left;
          color: #5e4b8b;
        }

        .typing {
          display: flex;
          gap: 4px;
        }

        .dot {
          width: 8px;
          height: 8px;
          background: #aaa;
          border-radius: 50%;
          animation: blink 1s infinite ease-in-out;
        }

        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes blink {
          0%,
          80%,
          100% {
            transform: scale(0.8);
            opacity: 0.4;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .input-box {
          margin-top: 1rem;
          display: flex;
          gap: 0.5rem;
        }

        input {
          flex: 1;
          padding: 0.6rem;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        button {
          padding: 0.6rem 1.2rem;
          border: none;
          background-color: #5e4b8b;
          color: white;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
