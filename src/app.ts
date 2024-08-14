import { Hono } from "hono";
import routes from "./routes/index.ts";

function buildApp() {
  const app = new Hono();

  // Defining routes
  routes(app);

  return app;
}

export default buildApp;
