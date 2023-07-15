import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { appRouter } from "./router";

const pageStyles = {
   color: "#232129",
   padding: 10,
   fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const client = new ApolloClient({
   cache: new InMemoryCache(),
   uri: "http://localhost:4000/graphqll",
});

const router = createBrowserRouter(appRouter);

const IndexPage: React.FC<PageProps> = () => {
   return (
      <ApolloProvider client={client}>
         <main style={pageStyles}>
            <RouterProvider router={router} />
         </main>
      </ApolloProvider>
   );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
