import express, { Router } from "express";
import {
  createUser,
  getUsers,
  removeUser,
} from "../controllers/userController.js";

const route: Router = express.Router();

route.post("/newUser", createUser);
route.get("/getUser", getUsers);
route.delete("/removeUser", removeUser);

export default route;
