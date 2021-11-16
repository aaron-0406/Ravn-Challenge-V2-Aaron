import { useState } from "react";

//Hooks
import { IdViewContext } from "../components/hooks/context";

//Components
import LayoutUser from "../components/layout/LayoutUser";
import Information from "../components/views/home/Information";
import ListPeople from "../components/views/home/ListPeople";

const Home = () => {
  const [sectionView, setSectionView] = useState<boolean>(false);
  const [idPerson, setIdPerson] = useState<string>("");
  const [namePerson, setNamePerson] = useState<string>("");

  let ancho: number;

  const changeSectionView = (id: string, name: string): void => {
    // eslint-disable-next-line no-restricted-globals
    ancho = screen.width;

    if (ancho <= 768) {
      setSectionView(!sectionView);
      setIdPerson(id);
      setNamePerson(name);
    }
    if (ancho >= 769) {
      setSectionView(false);
      setIdPerson("");
      setNamePerson("");
    }
  };

  const valuesContext = {
    id: idPerson,
    name: namePerson,
  };

  return (
    <IdViewContext.Provider value={valuesContext}>
      <LayoutUser>
        <div className="home">
          <div
            className={
              sectionView
                ? "home__section-none home__people"
                : "home__section-block home__people"
            }
          >
            <ListPeople function={changeSectionView} />
          </div>

          {sectionView ? (
            <>
              <Information id={idPerson} function={changeSectionView} />
            </>
          ) : // eslint-disable-next-line no-restricted-globals
          screen.width >= 769 ? (
            <Information id={idPerson} function={changeSectionView} />
          ) : (
            ""
          )}
        </div>
      </LayoutUser>
    </IdViewContext.Provider>
  );
};

export default Home;
