import { useNavigate } from "react-router-dom";

const top5 = [
  {
    id: "p1",
    title: "2025 신년운세",
    desc: "새해 운세를 미리 확인하세요.",
    image: "/images/top1.jpg",
  },
  {
    id: "p2",
    title: "궁합 운세",
    desc: "연애와 결혼 궁합을 확인하세요.",
    image: "/images/top2.jpg",
  },
  {
    id: "p3",
    title: "건강 흐름",
    desc: "올해 건강은 어떤가요?",
    image: "/images/top3.jpg",
  },
  {
    id: "p4",
    title: "이직 가능성",
    desc: "취업/이직의 방향을 확인하세요.",
    image: "/images/top4.jpg",
  },
  {
    id: "p5",
    title: "월별 흐름",
    desc: "한달 흐름을 정리해드립니다.",
    image: "/images/top5.jpg",
  },
];

export default function TopFortunes() {
  const navigate = useNavigate();

  return (
    <section className="home-top5">
      <h2>🔥 인기 사주 TOP 5</h2>
      <div className="top5-grid">
        {top5.map((item) => (
          <div
            key={item.id}
            className="top5-card"
            onClick={() => navigate(`/saju/${item.id}`)}
          >
            <img src={item.image} alt={item.title} />
            <div className="card-info">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .home-top5 h2 {
          font-size: 1.4rem;
          margin-bottom: 1.2rem;
          color: #1b1b3a;
        }

        .top5-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .top5-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          cursor: pointer;
          transition: transform 0.2s;
        }

        .top5-card:hover {
          transform: translateY(-4px);
        }

        .top5-card img {
          width: 100%;
          height: 140px;
          object-fit: cover;
        }

        .card-info {
          padding: 1rem;
        }

        .card-info h4 {
          font-size: 1rem;
          margin-bottom: 0.3rem;
        }

        .card-info p {
          font-size: 0.85rem;
          color: #666;
        }
      `}</style>
    </section>
  );
}
