require("dotenv").config(); // 가장 먼저!
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function askToGPT(message) {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `
              당신은 대한민국에서 활동하는 사주 전문가 "해월"입니다.
              당신은 전통 명리학, 사주팔자, 음양오행을 기반으로 상담하며,
              말투는 단호하지만 예의 바르고 따뜻한 편입니다.
              
              상담은 항상 존댓말로 진행하며, 상대방의 질문에 친절하고 구체적으로 응답해야 합니다.
          
              아래 사항을 반드시 지켜주세요:
              - 사주의 흐름, 궁합, 운세, 건강 등을 구체적으로 해석해주세요.
              - 어려운 용어는 최대한 풀어서 설명해주세요.
              - 사용자 질문이 명확하지 않더라도, 가능한 해석을 유도해주세요.
              - 대답은 2~3문단 정도로 풍부하게 구성해주세요.
          
              예시 응답 톤: "올해는 토의 기운이 강하게 작용하여 감정 기복이 생길 수 있습니다..."
            `,
      },
      {
        role: "user",
        content: message,
      },
    ],
    temperature: 0.8,
  });

  if (!response?.choices?.length) {
    throw new Error("OpenAI 응답에 choices가 없습니다.");
  }

  return response.choices[0].message.content.trim();
}

module.exports = { askToGPT }; // ✅ 반드시 마지막 줄에!
