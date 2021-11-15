import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const PersonCell = () => {
  return (
    <div className="person-cell">
      <div className="person-cell__information">
        <p className="person-cell__information-name">Luke Skywalker</p>
        <p className="person-cell__information-species">Human from Tatooine</p>
      </div>
      <div className="person-cell__icon">
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};

export default PersonCell;
