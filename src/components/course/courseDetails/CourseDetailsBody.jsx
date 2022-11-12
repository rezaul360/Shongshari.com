import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singlePublicCourseList } from "../../../redux/actions/course/CourseShop";

function CourseDetailsBody() {
  let { id } = useParams();

  const { singleCoursePublicData } = useSelector((state) => state.courseValue);
  //   console.log("singleCoursePublicData :>> ", singleCoursePublicData);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(singlePublicCourseList(id));
  }, [dispatch, id]);

  let body = "";
  if (singleCoursePublicData.course_details) {
    body = (
      <div className="container">
        <div className="row">
          <div className="col-12 course-progress">
            <div className="row">
              <div className="col-md-2">
                <h6>Course Progress</h6>
              </div>
              <div className="col-md-10">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    50%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <img
              src={singleCoursePublicData.course_details.instructor_image}
              alt=""
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="container">
            <div className="course-details-content my-4">
              <h4 className="title">
                {singleCoursePublicData.course_details.title}
              </h4>
              <p>
                You can start and finish one of these popular courses in under a
                day - for free! Check out the list below. “ LearnPress WordPress
                LMS Plugin designed with flexible &amp; scalable eLearning for
                the learnxyz
              </p>
              <p>
                You can start and finish one of these popular courses in under a
                day - for free! Check out the list below. “ LearnPress WordPress
                LMS Plugin designed with flexible &amp; scalable eLearning for
                the learnxyz
              </p>
              <p>
                You can start and finish one of these popular courses in under a
                day - for free! Check out the list below. “ LearnPress WordPress
                LMS Plugin designed with flexible &amp; scalable eLearning
              </p>
              <div className="single-list-inner style-check">
                <h4>What you will learn</h4>
                <ul>
                  <li>
                    <i className="fa fa-check"></i>Become a UX designer.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Build &amp; test a full
                    website design.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>You will be able to add UX
                    designer to your CV
                  </li>
                </ul>
              </div>
            </div>
            <button className="btn_violet">Enroll</button>
          </div>
        </div>
      </div>
    );
  }
  return <div className="main-body">{body}</div>;
}

export default CourseDetailsBody;
