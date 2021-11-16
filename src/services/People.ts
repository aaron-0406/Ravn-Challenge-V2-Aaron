import { useQuery } from "@apollo/client";
import { GET_PEOPLE, GET_PERSON, GET_TOTAL_PEOPLE } from "../gql/queryPeople";

export const getPeople = (first: number, last: number): any => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const info = useQuery(GET_PEOPLE, { variables: { first, last } });
  return info;
};

export const getTotalPeople = (): any => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const total = useQuery(GET_TOTAL_PEOPLE);
  return total;
};

export const getPerson = (id: string): any => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const person = useQuery(GET_PERSON, { variables: { id } });
  return person;
};
