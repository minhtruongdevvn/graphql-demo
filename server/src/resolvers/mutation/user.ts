import { users } from "../../data-source";

const createUser = (_: any, args: any) => {
   args.input.id = users[users.length - 1].id + 1;
   users.push(args.input);
   return args.input;
};

const deleteUser = (_: any, args: { userId: number }) => {
   const deleteIdx = users.findIndex((e) => e.id == args.userId);
   users.splice(deleteIdx, 1);
};

const updateUser = (_: any, args: any) => {
   const userToUpdate = users.find((e) => e.id == args.input.id);
   if (!userToUpdate) return;
   Object.assign(userToUpdate, args.input);
};

export { createUser, deleteUser, updateUser };
