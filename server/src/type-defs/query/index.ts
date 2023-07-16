import { gql } from "graphql-tag";
import payloads from "./payloads";

export default [
   gql`
      type Query {
         users: [User!]!
         user(id: ID!): UserPayload!
         movies: [Movie!]!
         movie(name: String!): Movie
      }
   `,
   payloads,
];
