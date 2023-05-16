import User from "./user.model";


 // make a async function

 //normal export korbo karon aro onno query hote pare

 export const createUserToDB = async () => {
    //4. create a instance
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
    await user.save();
    return user;
};