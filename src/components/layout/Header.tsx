import { useContext } from "react";

import { NameViewContext } from "../hooks/context";

const Header = () => {
  const namePerson: string = useContext(NameViewContext);

  return (
    <div className="header">
      <p>{namePerson === "" ? "People of Star Wars" : namePerson}</p>
    </div>
  );
};

export default Header;
