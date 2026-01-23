import Navbar from "../napbar/napbar";
import Footer from "../footer/footer";
import styles from "./Layot.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
