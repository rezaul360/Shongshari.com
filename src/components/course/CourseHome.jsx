import { useMemo, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import thumb from "../../assets/img/thumb.png";
import { topCourseList } from "../../redux/actions/course/CourseShop";
import CourseHomePageLayout from "./CourseHomePageLayout";

function CourseHome() {
  const { topCoursesData } = useSelector((state) => state.courseValue);
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      productCount: 1,
      indexNow: 0,
      nowCount: {},
    }
  );

  let dispatch = useDispatch();
  useMemo(() => {
    dispatch(topCourseList());
  }, []);

  let coures = "";

  if (topCoursesData?.data?.data?.length > 0) {
    coures = topCoursesData?.data?.data.map((course, index) => (
      <div key={`${course.id}`}>
        <SwiperSlide>
          <div className="single-course-inner">
            <div className="thumb">
              <img src={course.instructor_image} alt="img" />
            </div>
            <div className="details">
              <span className="price">
                <span>${course.price}</span>
                <span>
                  <del>$20</del>
                </span>
              </span>
              <p className="status">
                <i className="fa fa-signal"></i> Beginner
              </p>
              <div className="details-inner">
                <h5>
                  <a href="course-details.php">{course.title}</a>
                </h5>
                <div className="author media">
                  <div className="media-left">
                    <img src={thumb} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <p>{course.instructor}</p>
                  </div>
                </div>
              </div>
              <div className="bottom-area">
                <div className="row">
                  <div className="col-6 align-self-center">
                    <a className="readmore-text" href="course-video.php">
                      Enroll Now
                    </a>
                  </div>
                  <div className="col-6 align-self-center text-right">
                    <a className="readmore-text" href="course-details.php">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
    ));
  }
  // console.log("topCoursesData :>> ", topCoursesData);
  return (
    <CourseHomePageLayout>
      <div
        className="container bottom-content wow fadeInUp"
        data-wow-delay="0.5s"
      >
        <div className="swiper mySwiper2">
          <Swiper
            slidesPerView={3}
            loop={true}
            spaceBetween={20}
            // modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              350: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              560: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              950: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            className="swiper-wrapper"
          >
            {coures}
          </Swiper>
        </div>
      </div>
    </CourseHomePageLayout>
  );
}

export default CourseHome;
