import { useContext } from "react";

import { IdViewContext } from "../hooks/context";

const Header: React.FC = () => {
  const datos = useContext(IdViewContext);

  return (
    <div className="header">
      <p>{datos.name === "" ? "People of Star Wars" : datos.name}</p>
    </div>
  );
};

export default Header;
