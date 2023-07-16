import { gql } from "graphql-tag";

export default gql`
   type Movie {
      id: ID!
      name: String!
      yearOfPublication: Int!
      isInTheaters: Boolean!
   }
`;
