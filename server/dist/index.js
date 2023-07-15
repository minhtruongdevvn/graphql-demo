"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const resolver_1 = require("./schema/resolver");
const type_def_1 = require("./schema/type-def");
const server = new server_1.ApolloServer({ typeDefs: type_def_1.typeDefs, resolvers: resolver_1.resolvers });
(0, standalone_1.startStandaloneServer)(server, {}).then(({ url }) => {
    console.log(`🚀  Server ready at: ${url}`);
});
