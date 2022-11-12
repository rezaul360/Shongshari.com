import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgentPage from "../pages/agent/AgentPage";
import BlogPage from "../pages/BlogPage";
import CartPage from "../pages/cart/CartPage";
import CoursePage from "../pages/course/CoursePage";
import SingleCoursePage from "../pages/course/SingleCoursePage";
// import CoursePage from "../pages/course/CoursePagersePage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import WOW from "wowjs";
import Loader from "../components/Loader";
import LoginModal from "../components/modal/LoginModal";
import Booking from "../pages/booking/Booking";
import CheckOut from "../pages/checkOut/CheckOut";
import HomePage from "../pages/HomePage";
import KaziPage from "../pages/kazi/kaziPage";
import LawyerPage from "../pages/lawyer/LawyerPage";
import LawyerServicePage from "../pages/lawyerServices/LawyerServicePage";
import MembershipPage from "../pages/membership/MembershipPage";
import PartnerPage from "../pages/partner/PartnerPage";
import SearchedMembersPage from "../pages/partner/SearchedMembersPage";
import ProductPage from "../pages/product/ProductPage";
import SingleProductPage from "../pages/product/SingleProductPage";
import ProfileInfoPage from "../pages/profile-info/ProfileInfoPage";
import RegAsProfessionalPage from "../pages/Registration/RegAsProfessionalPage";
import SingleProfile from "../pages/single-profile/SingleProfile";
import {
  authenticatedFunction,
  loadingFunction,
  setUserFunction,
} from "../redux/actions/AuthAction";
import { getToken, getType, setToken } from "../utils/functions";
import AuthRoute from "./AuthRouts";
import DetailsModal from "../components/modal/DetailsModal";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions/TermsConditions";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
// import ProductPage from "../pages/product/ProductPageductPage";

function Router() {
  const { authenticated, loading, loginShow, type } = useSelector(
    (state) => state.authValue
  );
  // console.log("authenticated", authenticated);
  let dispatch = useDispatch();
  let typeNow = type || getType();
  // console.log("type :>> ", type);
  // console.log("typeNow", typeNow);
  let route =
    typeNow == 1
      ? "profile"
      : typeNow == 2
        ? "/lawyer-profile"
        : typeNow == 3
          ? "kazi-profile"
          : typeNow == 6
            ? "agent-profile"
            : "";
  const userData = () => {
    const access_token = getToken();
    // console.log("route", route);

    return getToken() && route
      ? axios.get(route, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      : Promise.resolve(null);
  };

  useEffect(() => {
    userData()
      .then((user) => {
        // console.log(`user>>>INIT:`, user);
        dispatch(loadingFunction(false));
        dispatch(setUserFunction(user.data));
        dispatch(authenticatedFunction(true));
        // setLoading(false);
      })
      .catch((error) => {
        // console.log("error", error);
        dispatch(loadingFunction(false));
        // setLoading(false);
        setToken("");
        // setIntendedUrl("/");
      });
  }, [authenticated]);

  useEffect(() => {
    if (!loading) {
      new WOW.WOW({
        live: true,
      }).init();
    }
  }, [loading]);

  return loading ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/termsconditions" element={<TermsConditions />} />
        <Route path="/*" element={<AuthRoute />}>
          <Route path="checkout/:module/:id" element={<CheckOut />} />
          <Route path="profile/info/:id" element={<ProfileInfoPage />} />
          <Route path="profile/services/:id" element={<LawyerServicePage />} />

          <Route path="profile" element={<ProfileInfoPage />} />

          <Route path="profile/:id" element={<SingleProfile />} />

          <Route path="booking/:module/:id" element={<Booking />} />
        </Route>

        <Route path="blog" element={<BlogPage />} />
        <Route path="course" element={<CoursePage />} />
        <Route path="course/:id" element={<SingleCoursePage />} />
        <Route path="shop" element={<ProductPage />} />
        <Route path="shop/:id" element={<SingleProductPage />} />
        {/* //LAWYER */}
        <Route path="lawyer" element={<LawyerPage />} />

        <Route path="kazi" element={<KaziPage />} />

        <Route path="agent" element={<AgentPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="membership" element={<MembershipPage />} />
        <Route path="partner" element={<PartnerPage />} />
        <Route path="partner/searched" element={<SearchedMembersPage />} />
        <Route path="regAsProfessional" element={<RegAsProfessionalPage />} />
      </Routes>
      <DetailsModal />
    </BrowserRouter>
  );
}

export default Router;
