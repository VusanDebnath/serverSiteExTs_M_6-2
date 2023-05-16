import express from "express";
import { createUser } from "./user.controller";
const router = express.Router();

router.get('/', createUser);


export default router;
// Route k export kore app.ts e import korte hobe


// Pattern

// Route -> controller -> service