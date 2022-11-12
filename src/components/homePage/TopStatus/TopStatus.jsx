import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import required modules
import { Autoplay, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { blogListAction } from "../../../redux/actions/blogs/BlogActions";

function TopStatus() {
  // let data = [1, 2, 3, 4, 5];

  const { blogsData, blogError } = useSelector((state) => state.blogValue);
  // console.log("bloglist==> ", blogsData.data, blogError);

  return (
    <div>
      <section className="top-status-section">
        <div className="top-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-header white-color">
                  <h2 className="title wow fadeInUp">Top Status</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container bottom-content wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="swiper mySwiper2">
            <div className="swiper-wrapper">
              <Swiper
                slidesPerView={3}
                loop={true}
                autoplay={{
                  delay: 300000,
                }}
                spaceBetween={10}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  "@1.50": {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                {blogsData.data?.map((topStatus, index) => {
                  return (
                    <div key={`${index}`}>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="top-status-item">
                            <div className="top-status-header row ">
                              <div className="top-status-img">
                                <img src={topStatus.image} alt="img" />
                              </div>
                              <div className="top-status-title align-self-center">
                                <h4>{topStatus.title}</h4>
                              </div>
                            </div>
                            <div className="top-status-text">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: topStatus.content.substring(1, 80),
                                }}
                              ></div>
                              <img src={topStatus.image} alt="img" />
                              <a
                                className="btn custom-button o__statusBtn"
                                href="#"
                              >
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TopStatus;
