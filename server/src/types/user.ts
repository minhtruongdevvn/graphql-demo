export interface User {
   id: number;
   name: string;
   username: string;
   age: number;
   nationality: string;
   friends?: Omit<User, "friends">[];
}
