import { users as userData } from "../../data-source";
import { ERROR_NAME } from "./error";

const users = (
   parent: any, // parent data, ex: users (parent here) -> favMovies
   args: any, // arguments
   context: any, // access data that shared for all resolver
   info: any // graphql related info with the resolver
) => userData;

const user = (_: any, args: { id: number }) => {
   const user = userData.find((e) => e.id == args.id);

   if (!user) {
      return {
         __typename: "ErrorResponse",
         error: {
            name: ERROR_NAME.NOT_FOUND,
            description: "cannot find user with id: " + args.id,
         },
      };
   }

   return { ...user, __typename: "User" };
};

export { user, users };
