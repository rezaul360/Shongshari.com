import Footer from "../headerFooter/Footer";
import Header from "../headerFooter/Header";


function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
