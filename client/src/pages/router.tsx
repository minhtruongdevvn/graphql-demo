import React from "react";
import { RouteObject } from "react-router-dom";
import CreateUser from "./create-user";
import UserList from "./user-list";
//             <Link to="about">About Us</Link>

export const appRouter: RouteObject[] = [
   {
      path: "/",
      element: <UserList />,
   },
   {
      path: "users/create",
      element: <CreateUser />,
   },
];
