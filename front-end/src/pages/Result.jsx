export default function Result() {
  return (
    <div className="result-wrapper">
      <h2 className="result-title">🔮 결과 페이지 (준비중)</h2>
      <p className="result-desc">결제 후 이곳에서 상담이 진행됩니다.</p>

      <style jsx>{`
        .result-wrapper {
          text-align: center;
          padding: 2rem;
        }

        .result-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .result-desc {
          color: #777;
        }
      `}</style>
    </div>
  );
}
