import React, { useMemo } from "react";
import Slider from 'react-slick';
import { useDispatch, useSelector } from "react-redux";
import p1 from './../../../assets/img/registered/p1.png';
import p2 from './../../../assets/img/registered/p2.png';
import p3 from './../../../assets/img/registered/p3.png';
import p4 from './../../../assets/img/registered/p4.png';
import p5 from './../../../assets/img/registered/p5.png';
import { latestMemberSliderList } from "../../../redux/actions/sliders/BackgroundSliderAction";

export const MemberSLider = () => {
  const { latestMemberData } = useSelector((state) => state.sliderValue);

  let dispatch = useDispatch();
  useMemo(() => {
    dispatch(latestMemberSliderList());
  }, [dispatch]);


  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true
  };
  return (
    <div className="col-lg-8 sr__mright wow fadeInRight ms-5">
      <div id="members__align" className="swiper registered-slider23 ">
      
      </div>
    </div>
  );
};

export const MemoMemberSLider = React.memo(MemberSLider);
