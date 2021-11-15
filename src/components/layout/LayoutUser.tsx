//Components
import Header from "./Header";

const LayoutUser: React.FC = ({ children, ...rest }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayoutUser;
