import { useState } from "react";

//Hooks
import { NameViewContext } from "../components/hooks/context";

//Components
import LayoutUser from "../components/layout/LayoutUser";
import PersonCell from "../components/views/home/PersonCell";
import Information from "../components/views/home/Information";

const Home = () => {
  const [sectionView, setSectionView] = useState<boolean>(false);
  const [namePerson, setNamePerson] = useState<string>("");

  let ancho: number;

  const changeSectionView = (name: string): void => {
    // eslint-disable-next-line no-restricted-globals
    ancho = screen.width;

    if (ancho <= 768) {
      setSectionView(!sectionView);
      setNamePerson(name);
    }
    if (ancho >= 769) {
      setSectionView(false);
      setNamePerson("");
    }
  };

  return (
    <NameViewContext.Provider value={namePerson}>
      <LayoutUser>
        <div className="home">
          <div
            className={
              sectionView
                ? "home__section-none home__people"
                : "home__section-block home__people"
            }
          >
            <PersonCell
              name="Luke Skywalker"
              species="Human from Tatooine"
              function={changeSectionView}
            />
          </div>

          {sectionView ? (
            <>
              <Information function={changeSectionView} />
            </>
          ) : // eslint-disable-next-line no-restricted-globals
          screen.width >= 769 ? (
            <Information function={changeSectionView} />
          ) : (
            ""
          )}
        </div>
      </LayoutUser>
    </NameViewContext.Provider>
  );
};

export default Home;
