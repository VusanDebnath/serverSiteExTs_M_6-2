import { log } from "console";
import express, {Request, Response} from "express";

const app = express();
const port = 5000;

// Controller or Routes {same thing calling different name}

//GET POST PUT DELETE
app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to express server with typescript!!")
});

app.post("/book/add", (req: Request, res: Response) => {
    res.send("This is book add request!!")
});

// All means all request type can be accepted
app.all("/allrequest", (req: Request, res:Response) => {
    res.send("All request type can be accepted!!")
});

app.listen(port, () => {
    console.log(`Server has Started on port ${port}`);
});