import { movies, users } from "./fake-data";

export interface Resolvers {
   Query?: { [key: string]: (...arg: any[]) => any };
   [key: string]: any;
}

export const resolvers: Resolvers = {
   Query: {
      users: () => users,
      user: (_: any, args: { id: number }) =>
         users.find((e) => e.id == args.id),
      movies: () => movies,
      movie: (_: any, args: { name: string }) =>
         movies.find((e) => e.name.includes(args.name)),
   },
   User: {
      favMovies: (_: any, args: { year: number }) =>
         movies.filter((e) => e.yearOfPublication == args.year),
   },
   Mutation: {
      createUser: (_: any, args: any) => {
         args.input.id = users.length + 1;
         users.push(args.input);
         return args.input;
      },
      deleteUser: (_: any, args: { userId: number }) => {
         const deleteIdx = users.findIndex((e) => e.id == args.userId);
         users.splice(deleteIdx, 1);
      },
      updateUser: (_: any, args: any) => {
         const userToUpdate = users.find((e) => e.id == args.input.id);
         if (!userToUpdate) return;
         Object.assign(userToUpdate, args.input);
      },
   },
};
