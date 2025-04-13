const { askToGPT } = require("../utils/openai");

async function sendMessage(req, res) {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "메시지를 입력하세요." });
    }

    const reply = await askToGPT(message);
    return res.json({ reply });
  } catch (err) {
    console.error("GPT 오류:", err.message);
    return res.status(500).json({ error: "GPT 응답 실패" });
  }
}

module.exports = { sendMessage };
