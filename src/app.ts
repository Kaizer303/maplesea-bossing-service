import { Hono } from "hono";

function buildApp() {
  const app = new Hono();

  return app;
}

export default buildApp;