import { movies as movieData } from "../../data-source";

const movies = () => movieData;

const movie = (_: any, args: { name: string }) =>
   movieData.find((e) => e.name.includes(args.name));

export { movie, movies };
