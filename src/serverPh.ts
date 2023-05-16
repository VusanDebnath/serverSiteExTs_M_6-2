import app from "./app";
import mongoose from "mongoose";
const port = 5000;

//database connection
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-dataInsert');

        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

        app.listen(port, () => {
            console.log(`Server listening post ${port}`);
            
        });
    } catch (err) {
        console.log(`Failed to connect database!`, err);
        
    }
};

//call database function
main();

