import { useReducer } from "react";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import avator from "../../assets/images/blog/author-avarat.png";
import blog1 from "../../assets/images/blog/blog1.png";
import blog2 from "../../assets/images/blog/blog2.png";
import blog4 from "../../assets/images/blog/blog4.png";
import post from "../../assets/images/blog/resent-post.png";
import { blogListAction } from "../../redux/actions/blogs/BlogActions";
import { log } from "../../utils/functions";
import CommonHeaderLayout from "../layout/CommonHeaderLayout";

const Blog = () => {
  const { blogsData } = useSelector((state) => state.blogValue);
  const dispatch = useDispatch();
  // console.log(blogsData);

  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      searchData: [],
      searchText: "",
      isSearch: false,
    }
  );
  const searchInput = (e) => {
    let value = e.target.value;
    if (!value) {
      setState({ isSearch: false });
    }
    setState({ searchText: value });
  };
  const searchSubmit = (e) => {
    e.preventDefault();
    const filterData = blogsData.data.filter(
      (data) => data.title.toLowerCase() === state.searchText.toLowerCase()
    );

    setState({ searchData: [...filterData], isSearch: true });
  };

  useEffect(() => {
    dispatch(blogListAction());
  }, []);

  let module = blogsData?.data?.map((blog, index) => (
    <div key={index} className="col-lg-12">
      <div className="single-blog">
        <div className="img">
          <img src={blog?.image} alt="img" />
        </div>
        <div className="content">
          <div className="left">
            <div className="avatar">
              <img src={avator} alt="img" />
            </div>
            {/* <ul className="meta-list">
            <li>
              <a href="#">
                <i className="far fa-comments"></i>
              </a>
              <span>30</span>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-share-alt"></i>
              </a>
              <span>22</span>
            </li>
          </ul> */}
          </div>
          <div className="right">
            <p className="date">December 19, 2021</p>
            <h4 className="title">{blog?.title}</h4>
            {/*
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor dunt ut labore et dolore
              magna aliqua.Quis ipsum suspendisse ultrices
              gravida. Risus do viverra maecenas
            </p> */}
            <div
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}
            ></div>
          </div>
        </div>
        <div className="post-footer post-footer2">
          <div className="left">
            <p>
              <b>Category</b> Dating Advice
            </p>
          </div>
          <div className="right">
            <a href="#" className="read-more-btn">
              Continue Reading
            </a>
          </div>
        </div>
      </div>
    </div>
  ));
  if (blogsData?.data?.length > 0 && !state.isSearch) {
    module = module;
  } else if (state.isSearch && state.searchText) {
    module = state.searchData?.map((blog, index) => (
      <div key={index} className="col-lg-12">
        <div className="single-blog">
          <div className="img">
            <img src={blog?.image} alt="img" />
          </div>
          <div className="content">
            <div className="left">
              <div className="avatar">
                <img src={avator} alt="img" />
              </div>
              {/* <ul className="meta-list">
              <li>
                <a href="#">
                  <i className="far fa-comments"></i>
                </a>
                <span>30</span>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-share-alt"></i>
                </a>
                <span>22</span>
              </li>
            </ul> */}
            </div>
            <div className="right">
              <p className="date">December 19, 2021</p>
              <h4 className="title">{blog?.title}</h4>
              {/*
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor dunt ut labore et dolore
                magna aliqua.Quis ipsum suspendisse ultrices
                gravida. Risus do viverra maecenas
              </p> */}
              <div
                dangerouslySetInnerHTML={{
                  __html: blog.content,
                }}
              ></div>
            </div>
          </div>
          <div className="post-footer post-footer2">
            <div className="left">
              <p>
                <b>Category</b> Dating Advice
              </p>
            </div>
            <div className="right">
              <a href="#" className="read-more-btn">
                Continue Reading
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <CommonHeaderLayout name={"Success Stories"} />
      <section className="blog-page single-blog-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <InfiniteScroll
                  dataLength={blogsData?.data?.length?blogsData?.data?.length:0}
                  next={10}
                  hasMore={true}
                  loader={<h4>Loading...</h4>}
                >
                  {module}
                </InfiniteScroll>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget widget-search">
                <h5 className="title">search</h5>
                <form className="search-form" onSubmit={searchSubmit}>
                  <input
                    type="text"
                    placeholder="Enter your Search Content"
                    required=""
                    onChange={searchInput}
                  />
                  <button type="submit">
                    <i className="flaticon-loupe"></i>Search
                  </button>
                </form>
              </div>
              <div className="widget widget-categories">
                <h5 className="title">categories</h5>
                <ul>
                  <li>
                    <a href="#">
                      <span>Showtimes &amp; Tickets</span>
                      <span>50</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Latest Trailers</span>
                      <span>43</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Coming Soon </span>
                      <span>34</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>In Theaters</span>
                      <span>63</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Release Calendar </span>
                      <span>11</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Stars</span>
                      <span>30</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Horror Movie </span>
                      <span>55</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="widget widget-post">
                <h5 className="title">latest Blog</h5>
                {/* <div className="slider-nav">
                  <span className="flaticon-angle-pointing-to-left widget-prev"></span>
                  <span className="flaticon-right-arrow-angle widget-next active"></span>
                </div> */}
                <div className="swiper blogSlider">
                  <div className="swiper-wrapper">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                      }}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="swiper-wrapper"
                    >
                      <SwiperSlide>
                        <div className="swiper-slide widget-slider">
                          <div className="item">
                            <div className="thumb">
                              <a href="#">
                                <img src={post} alt="blog" />
                              </a>
                            </div>
                            <div className="content">
                              <h6 className="p-title">
                                <a href="#">
                                  How to Start, Plan, and Keep a Date Night
                                </a>
                              </h6>
                              <div className="meta-post">
                                <a href="#" className="mr-4">
                                  <i className="fas fa-user"></i>Admin
                                </a>
                                <a href="#">
                                  {" "}
                                  <i className="far fa-comments"></i> Comments
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide widget-slider">
                          <div className="item">
                            <div className="thumb">
                              <a href="#">
                                <img src={post} alt="blog" />
                              </a>
                            </div>
                            <div className="content">
                              <h6 className="p-title">
                                <a href="#">
                                  How to Start, Plan, and Keep a Date Night
                                </a>
                              </h6>
                              <div className="meta-post">
                                <a href="#" className="mr-4">
                                  <i className="fas fa-user"></i>Admin
                                </a>
                                <a href="#">
                                  {" "}
                                  <i className="far fa-comments"></i> Comments
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="swiper-slide widget-slider">
                          <div className="item">
                            <div className="thumb">
                              <a href="#">
                                <img src={post} alt="blog" />
                              </a>
                            </div>
                            <div className="content">
                              <h6 className="p-title">
                                <a href="#">
                                  How to Start, Plan, and Keep a Date Night
                                </a>
                              </h6>
                              <div className="meta-post">
                                <a href="#" className="mr-4">
                                  <i className="fas fa-user"></i>Admin
                                </a>
                                <a href="#">
                                  {" "}
                                  <i className="far fa-comments"></i> Comments
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="widget widget-newsletter">
                <h5 className="title">Newsletter</h5>
                <form className="search-form">
                  <input
                    type="text"
                    placeholder="Enter your Email Address"
                    required=""
                  />
                  <button type="submit">
                    <i className="far fa-envelope"></i> Send
                  </button>
                </form>
              </div>
              <div className="widget widget-tags">
                <h5 className="title">featured tags</h5>
                <ul>
                  <li>
                    <a href="#">creative</a>
                  </li>
                  <li>
                    <a href="#">design</a>
                  </li>
                  <li>
                    <a href="#">skill</a>
                  </li>
                  <li>
                    <a href="#">template</a>
                  </li>
                  <li>
                    <a href="#" className="active">
                      landing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
