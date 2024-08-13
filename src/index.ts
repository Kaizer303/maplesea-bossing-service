import buildApp from "./app.ts";
import denoKv from "./databases/denoKv.ts";
import routes from "./routes/index.ts";
import userRoutes from "./routes/users/index.ts";

await denoKv.init();

const app = buildApp();

app.route("/", routes);
app.route("/users", userRoutes);
// Redirect root URL

Deno.serve(app.fetch);
