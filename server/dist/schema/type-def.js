"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `#graphql
   type User {
      id:ID!
      name: String!
      username: String!
      age: String!
      nationality: Nationality!
      friends: [User!]
      favMovies(year: Int!): [Movie!]
   }

   type Movie {
      id: ID!,
      name: String!,
      yearOfPublication: Int!,
      isInTheaters: Boolean!,
   }

   type Query {
      users: [User!]!
      user(id: ID!): User!
      movies:[Movie!]!
      movie(name: String!): Movie
   }

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

   type Mutation {
     createUser(input: CreateUserInput!): User!
     deleteUser(userId: Int!): Boolean
     updateUser(input: UpdateUserInput): User
   }

   enum Nationality{
      CANADA
      BRAZIL
      INDIA
      GERMANY
      CHILE
   }
`;
