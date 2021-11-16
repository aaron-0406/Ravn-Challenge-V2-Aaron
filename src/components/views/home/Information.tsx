import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

//Components
import SectionHeader from "./SectionHeader";
import DataCell from "./DataCell";
import LoadingCell from "../../common/LoadingCell";
import NoticeCell from "../../common/NoticeCell";

//Services
import { getPerson } from "../../../services/People";

interface InformationCellProps {
  id: string;
  function: (id: string, name: string) => void;
}

const Information = (props: InformationCellProps) => {
  const person = getPerson(props.id);
  if (person.loading) console.log("loading");
  if (person.error) console.log(person.error);
  if (person.data) console.log(person.data);

  return (
    <div className="information">
      {
        // eslint-disable-next-line no-restricted-globals
        screen.width <= 768 ? (
          <>
            <button type="button" onClick={() => props.function("", "")}>
              <FontAwesomeIcon icon={faChevronLeft} />
              Return
            </button>
          </>
        ) : null
      }
      <SectionHeader name="General Information" />
      {person.loading ? <LoadingCell /> : ""}
      {person.error ? <NoticeCell /> : ""}
      {person.data ? (
        <>
          <DataCell attribute="Eye Color" value={person.data.person.eyeColor} />
          <DataCell
            attribute="Hair Color"
            value={person.data.person.hairColor}
          />
          <DataCell
            attribute="Skin Color"
            value={person.data.person.skinColor}
          />
          <DataCell
            attribute="Birth Year"
            value={person.data.person.birthYear}
          />
          <SectionHeader name="Vehicles" />
          {person.data.person.vehicleConnection.vehicles.map((vehicle: any) => {
            return (
              <div key={vehicle.id}>
                <DataCell key={vehicle.id} attribute={vehicle.name} />
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Information;
