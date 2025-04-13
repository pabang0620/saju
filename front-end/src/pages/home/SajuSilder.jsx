import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const sajuSlides = [
  { title: "신년운세", image: "/images/saju1.jpg" },
  { title: "연애운", image: "/images/saju2.jpg" },
  { title: "건강운", image: "/images/saju3.jpg" },
  { title: "취업운", image: "/images/saju4.jpg" },
];

export default function SajuSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    dots: true,
    arrows: false,
    autoplay: true,
  };

  return (
    <section className="home-hero">
      <Slider {...settings} className="saju-slider">
        {sajuSlides.map((saju, index) => (
          <div key={index} className="slide">
            <div className="slide-content">
              <img src={saju.image} alt={saju.title} />
              <h3>{saju.title}</h3>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx>{`
        .saju-slider {
          padding: 0 2rem;
        }

        .slide {
          padding: 0 10px;
        }

        .slide-content {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          text-align: center;
        }

        .slide-content img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .slide-content h3 {
          margin-top: 0.8rem;
          font-size: 1.1rem;
          color: #5e4b8b;
        }
      `}</style>
    </section>
  );
}
