export default function NotFound() {
  return (
    <div className="notfound-wrapper">
      <h2 className="notfound-title">🚫 페이지를 찾을 수 없습니다</h2>
      <p className="notfound-desc">주소를 다시 확인해주세요.</p>

      <style jsx>{`
        .notfound-wrapper {
          padding: 2rem;
          text-align: center;
        }

        .notfound-title {
          font-size: 1.6rem;
          margin-bottom: 1rem;
        }

        .notfound-desc {
          color: #777;
        }
      `}</style>
    </div>
  );
}
