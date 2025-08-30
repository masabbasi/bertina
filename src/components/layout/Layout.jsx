import styles from "components/layout/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
