export default function LoveConsult() {
  return (
    <section className="love-section">
      <h2>💘 연애 상담 스페셜</h2>
      <p>
        요즘 연애가 어려우신가요? DreamRu에서 맞춤형 연애 사주 상담을
        받아보세요.
      </p>
      <div className="love-banner">
        <img src="/images/love-banner.jpg" alt="연애 상담" />
      </div>

      <style jsx>{`
        .love-section {
          margin-top: 4rem;
          padding: 2rem;
          background: #ffe8d6;
          border-radius: 12px;
          text-align: center;
        }

        .love-section h2 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          color: #5e4b8b;
        }

        .love-section p {
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .love-banner img {
          width: 100%;
          max-width: 500px;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
}
