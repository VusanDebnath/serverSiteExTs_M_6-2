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


// Route Paths String Patterns
app.get("/ab*cd", (req: Request, res: Response) => {
    res.send("String Patterns. For know more info goto express js routing string patterns!!")
});

// Router Parameters
app.get("/params/:userName/:userId/:bookId", (req: Request, res: Response) => {
    console.log(req.params);
    res.json(req.params);
});




app.listen(port, () => {
    console.log(`Server has Started on port ${port}`);
});