import { movies } from "../../data-source";

const favMovies = (_: any, args: { year: number }) =>
   movies.filter((e) => e.yearOfPublication == args.year);

export const User = { favMovies };
