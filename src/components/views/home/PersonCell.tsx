import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface PersonCellProps {
  name: string;
  species: string;
  function: (name: string) => void;
}

const PersonCell = (props: PersonCellProps) => {
  return (
    <div className="person-cell">
      <div className="person-cell__information">
        <p className="person-cell__information-name">{props.name}</p>
        <p className="person-cell__information-species">{props.species}</p>
      </div>
      <div className="person-cell__icon">
        <button type="button" onClick={() => props.function(props.name)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default PersonCell;
