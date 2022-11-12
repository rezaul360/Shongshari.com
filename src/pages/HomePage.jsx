import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseHome from "../components/course/CourseHome";
// import TopProfile from "../../components/topProfile/TopProfile";
import AmazingFeatures from "../components/homePage/AmazingFeatures/AmazingFeatures";
import BannerSection from "../components/homePage/bannerSection/BannerSection";
import Experts from "../components/homePage/Expart/Expart";
import FlirtingSection from "../components/homePage/flirtingSection/FlirtingSection";
import HowDoesItWorks from "../components/homePage/howDoesItWorks/HowDoesItWorks";
import MemberSection from "../components/homePage/memberSection/MemberSection";
import Membership from "../components/homePage/membershipPlan/Membership";
import PeopleAlreadyJoin from "../components/homePage/peopleAlreadyJoin/PeopleAlreadyJoin";
import Soulmate from "../components/homePage/soulMate/Soulmate";
import SuccessStories from "../components/homePage/successStories/SuccessStories";
import TopProfile from "../components/homePage/topProfile/TopProfile";
import TopStatus from "../components/homePage/TopStatus/TopStatus";
import MainLayout from "../components/layout/MainLayout";
import ProductsPageHomeSlider from "../components/product/ProductsPageHomeSlider";
// import ProductsPageHomeSlider from "../components/product/ProductsPageHomeSlider";
import TopHiring from "../components/topHiring/TopHiring";
import { blogListAction } from "../redux/actions/blogs/BlogActions";

function HomePage() {
	const { authenticated, loading } = useSelector((state) => state.authValue);
	// console.log("authenticated", authenticated);

	const dispatch = useDispatch();


	useEffect(() => {
		dispatch(blogListAction());
	}, []);
	return (
		<>
			<div className='main-body'>
				<MainLayout>
					<BannerSection />
					<FlirtingSection />
					<MemberSection />
					<TopProfile />
					<SuccessStories />
					<PeopleAlreadyJoin />

					<ProductsPageHomeSlider />

					<HowDoesItWorks />
					<TopHiring />
					<TopStatus />
					<Soulmate />
					<CourseHome />
					<Membership />
					<AmazingFeatures />
					<Experts />
				</MainLayout>
			</div>
		</>
	);
}

export default HomePage;
