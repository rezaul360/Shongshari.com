import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { singlePublicCourseList } from "../../../redux/actions/course/CourseShop";

function CourseDetailsHeader() {
  let { id } = useParams();

  const { singleCoursePublicData } = useSelector((state) => state.courseValue);
  //   console.log("singleCoursePublicData :>> ", singleCoursePublicData);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(singlePublicCourseList(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      <div className="content">
        <h2 className="title extra-padding">
          {singleCoursePublicData?.course_details?.title}
        </h2>
        <ul className="breadcrumb-list extra-padding">
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li>{singleCoursePublicData?.course_details?.category}</li>
        </ul>
      </div>
    </div>
  );
}

export default CourseDetailsHeader;
