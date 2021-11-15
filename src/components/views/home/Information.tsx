import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

//Components
import SectionHeader from "./SectionHeader";
import DataCell from "./DataCell";

interface InformationCellProps {
  function: (name: string) => void;
}

const Information = (props: InformationCellProps) => {
  return (
    <div className="information">
      {
        // eslint-disable-next-line no-restricted-globals
        screen.width <= 768 ? (
          <>
            <button type="button" onClick={() => props.function("")}>
              <FontAwesomeIcon icon={faChevronLeft} />
              Return
            </button>
          </>
        ) : null
      }
      <SectionHeader />
      <DataCell />
      <DataCell />
      <DataCell />
      <DataCell />
    </div>
  );
};

export default Information;
