import { MemoMemberSLider } from "./MemberSLider";
import p1 from "./../../../assets/img/registered/p1.png";
import p2 from "./../../../assets/img/registered/p2.png";
import p3 from "./../../../assets/img/registered/p3.png";
import p4 from "./../../../assets/img/registered/p4.png";
import p5 from "./../../../assets/img/registered/p5.png";
import shape from "./../../../assets/img/registered/shape.png";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 3,
  swipeToSlide: true,
};
function MemberSection() {
  return (
    <section className="latest-registered-section">
      <img className="shape" src={shape} alt="" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6">
            <div className="content">
              <div className="section-header">
                <h6 className="sub-title extra-padding wow fadeInUp">
                  Latest Registered
                </h6>
                <h2 className="title wow fadeInUp">Members</h2>
                <p>
                  if you have been looking for the someone special of your life
                  for long, then your search ends here
                </p>
              </div>
              <a href="#" className="custom-button">
                Join Now !
              </a>
            </div>
          </div>
          <Slider {...settings}>
            <div className="swiper-slide">
              <div className="single-slider">
                <div className="img">
                  <img src={p1} alt="img" />
                </div>
                <div className="inner-content">
                  <h4 className="name">DANA MILLS</h4>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-slider">
                <div className="img">
                  <img src={p2} alt="img" />
                </div>
                <div className="inner-content">
                  <h4 className="name">DANA MILLS</h4>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-slider">
                <div className="img">
                  <img src={p3} alt="img" />
                </div>
                <div className="inner-content">
                  <h4 className="name">DANA MILLS</h4>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-slider">
                <div className="img">
                  <img src={p4} alt="img" />
                </div>
                <div className="inner-content">
                  <h4 className="name">DANA MILLS</h4>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-slider">
                <div className="img">
                  <img src={p5} alt="img" />
                </div>
                <div className="inner-content">
                  <h4 className="name">DANA MILLS</h4>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <MemoMemberSLider />
      </div>
    </section>
  );
}

export default MemberSection;
