import { useMemo, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import thumb from "../../../assets/img/thumb.png";
import { topCourseList } from "../../../redux/actions/course/CourseShop";
function TopRated() {
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
  let courses = "";

  if (topCoursesData?.data?.data?.length > 0) {
    courses = topCoursesData?.data?.data.map((course, index) => (
      <div className="col-xl-4 col-md-6 mb-2 px-2" key={`${course.id}`}>
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
      </div>
    ));
  }
  return (
    <div className="top-div text-center">
      <div className="row">{courses}</div>
    </div>
  );
}

export default TopRated;
