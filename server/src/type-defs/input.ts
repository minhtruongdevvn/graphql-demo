import { gql } from "graphql-tag";

export default gql`
   input CreateUserInput {
      name: String!
      username: String!
      age: String!
      nationality: Nationality = CANADA
   }

   input UpdateUserInput {
      id: Int!
      name: String!
      username: String!
      age: String!
      nationality: Nationality = CANADA
   }
`;
