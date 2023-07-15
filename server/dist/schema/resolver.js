"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const fake_data_1 = require("./fake-data");
exports.resolvers = {
    Query: {
        users: () => fake_data_1.users,
        user: (_, args) => fake_data_1.users.find((e) => e.id == args.id),
        movies: () => fake_data_1.movies,
        movie: (_, args) => fake_data_1.movies.find((e) => e.name.includes(args.name)),
    },
    User: {
        favMovies: (_, args) => fake_data_1.movies.filter((e) => e.yearOfPublication == args.year),
    },
    Mutation: {
        createUser: (_, args) => {
            args.input.id = fake_data_1.users.length + 1;
            fake_data_1.users.push(args.input);
            return args.input;
        },
        deleteUser: (_, args) => {
            const deleteIdx = fake_data_1.users.findIndex((e) => e.id == args.userId);
            fake_data_1.users.splice(deleteIdx, 1);
        },
        updateUser: (_, args) => {
            const userToUpdate = fake_data_1.users.find((e) => e.id == args.input.id);
            if (!userToUpdate)
                return;
            Object.assign(userToUpdate, args.input);
        },
    },
};
