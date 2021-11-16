//import LoadingCell from "../../common/LoadingCell";
//import NoticeCell from "../../common/NoticeCell";
import PersonCell from "../../views/home/PersonCell";

//Services
import { getPeople, getTotalPeople } from "../../../services/People";
import { useEffect, useState } from "react";

interface ListPeopleProps {
  data?: any;
  function: (id: string, name: string) => void;
  total?: number;
}

const List = (props: ListPeopleProps) => {
  const [people, setPeople] = useState<any[]>([]);

  return (
    <>
      {props.data
        ? props.data.allPeople.people.map((person: any) => {
            return (
              <div key={person.id}>
                <PersonCell
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  species={
                    person.species !== null ? person.species.name : "Human"
                  }
                  function={props.function}
                />
              </div>
            );
          })
        : ""}
    </>
  );
};

const ListPeople = (props: ListPeopleProps): any => {
  let etiqueta: any;

  //Get people list
  console.log("H1");
  const quantity: number = 5;
  let infoPeople: any;

  let iteration: number;
  const totalCountPeople = getTotalPeople();
  console.log("H2");
  if (totalCountPeople.loading) {
    console.log("loading");
  }
  if (totalCountPeople.data) {
    console.log("H3");
    iteration = Math.ceil(
      totalCountPeople.data.allPeople.totalCount / quantity
    );

    console.log("H4");

    for (let i: number = 0; i < iteration; i++) {
      console.log("H5");
      setInterval(function () {
        console.log("HOLA");
      }, 3000);
      infoPeople = getPeople(quantity * (i + 1), quantity);
      console.log("H6");
      if (infoPeople.loading) {
        console.log("loading 1");
      }
      if (infoPeople.error) {
        console.log(infoPeople.error);
      }
      if (infoPeople.data) {
        etiqueta = <List data={infoPeople.data} function={props.function} />;
      }
    }
    //console.log(infoPeople);
  }

  return <>{etiqueta}</>;
};

export default ListPeople;
