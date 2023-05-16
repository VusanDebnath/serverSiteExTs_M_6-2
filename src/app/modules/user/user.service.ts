import { IUser } from "./user.interface";
import User from "./user.model";


// make a async function

//normal export korbo karon aro onno query hote pare

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    //create a new user
    const user = new User(payload); // User -> class user-> instance
    await user.save();
    return user;
};


export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
};


export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {

    const user = await User.findOne({ id: payload });
    // const user = await User.findOne({ id: payload },{name:1,email:1, id:1, _id: 0});

    //Field Filtering 1 value is true and 0 value for false {which i don't want}
    return user;
};





/* 
4. create a instance
    const user = new User({
        id: 102,
        role: "student",
        name: {
            firstName: "MR.X",
            lastName: "Kaka mia",
        },
        gender: "male",
        email: "abc@gmail.com"
    });

*/