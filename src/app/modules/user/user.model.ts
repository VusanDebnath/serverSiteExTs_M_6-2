

    //creating schema using interface

import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

    // 2. Create a Schema corresponding to the document interface.
    const userSchema = new Schema<IUser>({

        // schema toirir somoy type er first letter capital hobe
        // check Schema type documentation
        id: {
            type: Number,
            require: true,
            unique: true
        },
        role: {
            type: String,
            require: true,
        },
        name: {
            firstName: {
                type: String,
                require: true
            },
            lastName: {
                type: String,
                require: true
            }
        },
        gender: {
            type: String,
            enum: ["male", "female"]
        },
        email: {
            type: String
            // jeheto optional property tai require d bo na
        }
    });

    //3. Create a model.
const User = model<IUser>("User", userSchema);
    
// export User for use in service.ts file
export default User;