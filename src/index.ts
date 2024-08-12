import { Hono } from "hono";
import { type User, UserSchema } from "./models/user.ts";


const app = new Hono();
const kv = await Deno.openKv();

// Redirect root URL
app.get("/", (c) => c.redirect("/users"));

// List all users
app.get("/users", async (c) => {
  const iter = await kv.list<User>({ prefix: ["users"] });
  const users = [];
  for await (const res of iter) users.push(res);

  return c.json(users);
});

// Create a user (POST body is JSON)
app.post("/users", async (c) => {
  try {
    const body = await c.req.json();
    const user: User = UserSchema.parse(body);
    const result = await kv.set(["users", body.name], user);
    return c.json(result);
  } catch (e) {
    c.status(400)
    return c.json({ error: e });
  }
});

// Get a user by title
app.get("/users/:title", async (c) => {
  const title = c.req.param("title");
  const result = await kv.get(["users", title]);
  return c.json(result);
});

// Delete a user by title
app.delete("/users/:title", async (c) => {
  const title = c.req.param("title");
  await kv.delete(["users", title]);
  return c.text("");
});

Deno.serve(app.fetch);
