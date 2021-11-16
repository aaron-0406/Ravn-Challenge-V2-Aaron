import gql from "graphql-tag";

export const GET_PEOPLE = gql`
  query People($first: Int, $last: Int) {
    allPeople(first: $first, last: $last) {
      people {
        id
        name
        species {
          name
        }
        homeworld {
          name
        }
      }
    }
  }
`;

export const GET_TOTAL_PEOPLE = gql`
  {
    allPeople {
      totalCount
    }
  }
`;

export const GET_PERSON = gql`
  query Person($id: ID) {
    person(id: $id) {
      id
      eyeColor
      hairColor
      skinColor
      birthYear
      vehicleConnection {
        vehicles {
          name
        }
      }
    }
  }
`;
