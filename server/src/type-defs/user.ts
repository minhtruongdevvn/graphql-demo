import { gql } from "graphql-tag";

export default gql`
   type User {
      id: ID!
      name: String!
      username: String!
      age: String!
      nationality: Nationality!
      friends: [User!]
      favMovies(year: Int!): [Movie!]
   }

   enum Nationality {
      CANADA
      BRAZIL
      INDIA
      GERMANY
      CHILE
   }
`;
