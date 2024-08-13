import { Context, Env } from "hono";
import denoKv from "../../databases/denoKv.ts";
import { User } from "../../models/user.ts";

const kv = await denoKv.get();

async function getAllUsers(c: Context<Env, "/", { in: { body: User } }>) {
  const iter = await kv.list<User>({ prefix: ["users"] });
  const users = [];
  for await (const res of iter) users.push(res);

  return c.json(users);
}

async function createUser(c: Context<Env, "/", { in: { body: User } }>) {
  const body: User = await c.req.json();
  const result = await kv.set(["users", body.name], body);
  return c.json(result);
}

export default {
  getAllUsers,
  createUser,
};
