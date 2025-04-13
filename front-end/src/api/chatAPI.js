import axios from "axios";

export const fetchChatFromGPT = async (message) => {
  try {
    const res = await axios.post("/api/chat", { message });
    return res.data.reply;
  } catch (err) {
    console.error("GPT 오류:", err);
    return "❌ 응답 실패";
  }
};
