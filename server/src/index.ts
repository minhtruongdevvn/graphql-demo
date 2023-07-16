import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers";
import { appTypeNode } from "./type-defs";

async function main() {
   const server = new ApolloServer({
      typeDefs: appTypeNode,
      resolvers,
   });

   const { url } = await startStandaloneServer(server, {
      context: async ({ req, res }) => {
         // context is used to pass variable to resolver
         return req;
      },
   });

   console.log(`🚀  Server ready at: ${url}`);
}

void main();
