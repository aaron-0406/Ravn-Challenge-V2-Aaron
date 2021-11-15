//Components
import Header from "./Header";
import Footer from "./Footer";

const LayoutUser: React.FC = ({ children, ...rest }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutUser;
