
 //1. Create an interface representing a document in MongoDB.
 export interface IUser {
    id: number;
    role: "student";
    name: {
        firstName: string;
        lastName: string;
    };
    gender: "male" | "female";
    email?: string;
};