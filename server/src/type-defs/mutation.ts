import { gql } from "graphql-tag";

export default gql`
   type Mutation {
      createUser(input: CreateUserInput!): User!
      deleteUser(userId: Int!): Boolean
      updateUser(input: UpdateUserInput): User
   }
`;
