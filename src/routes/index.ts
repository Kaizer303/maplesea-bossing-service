import { Context, Hono } from "hono";
import userRoutes from "./users/index.ts";

function routes(app: Hono) {
  app.route("/users", userRoutes);

  app.get("/", function _(c: Context) {
    return c.redirect("/users");
  });
}
export default routes;
