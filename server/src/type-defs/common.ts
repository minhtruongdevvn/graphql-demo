import { gql } from "graphql-tag";

export default gql`
   type ErrorResponse {
      error: Error!
   }

   type Error {
      name: String!
      description: String
   }
`;
