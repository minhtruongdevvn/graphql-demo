import common from "./common";
import input from "./input";
import movie from "./movie";
import mutation from "./mutation";
import query from "./query";
import user from "./user";

export const appTypeNode = [movie, user, ...query, mutation, input, common];
