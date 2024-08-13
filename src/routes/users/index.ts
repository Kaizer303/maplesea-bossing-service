import { Hono } from "hono";
import handlers from "./handlers.ts";
import validators from "./validators.ts";

const userRoutes = new Hono();

// List all users
userRoutes.get(
  "/",
  handlers.getAllUsers,
);

// Create a user (POST body is JSON)
userRoutes.post(
  "/",
  validators.validatePost(),
  handlers.createUser,
);
export default userRoutes;
