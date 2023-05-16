
import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();

// Application routes
import userRoutes from './app/modules/user/user.route';

//using cors
app.use(cors());

//parse data middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//
app.use("/api/v1/user", userRoutes);

export default app;

/* 
/~* /api/v1/user hit korle se 
1. userRoutes ba router e chole jabe 
2. sekhan theke get method createUser k call dbe [mane controller.ts e jabe]
3. controller ts theke createUserToDB service k call d be and service gola database er logic gola handle korbe
 */
// Inserting a data into mongodb
/* 
    Step1: Interface 
    Step2: Schema
    Step3: Model 
    Step4: Database Query On Model //{ async function jeita}
*/

/* 
    Interface -> interface.ts
    Schema, Model -> model.ts

    route
    route function -> controller.ts
    Database Query Function --> service
*/