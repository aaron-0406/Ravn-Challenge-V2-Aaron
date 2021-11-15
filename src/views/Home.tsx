import LayoutUser from "../components/layout/LayoutUser";
import PersonCell from "../components/views/home/PersonCell";
import SectionHeader from "../components/views/home/SectionHeader";
import DataCell from "../components/views/home/DataCell";
import LoadingCell from "../components/common/LoadingCell";
import NoticeCell from "../components/common/NoticeCell";

const Home = () => {
  return (
    <>
      <LayoutUser>
        <div className="home">
          <div className="home__people">
            <PersonCell />
            <PersonCell />
            <PersonCell />
            <PersonCell />
          </div>
          <hr />
          <div className="home__information">
            <SectionHeader />
            <DataCell />
            <DataCell />
            <DataCell />
            <DataCell />
          </div>
          <LoadingCell />
          <NoticeCell />
        </div>
      </LayoutUser>
    </>
  );
};

export default Home;
