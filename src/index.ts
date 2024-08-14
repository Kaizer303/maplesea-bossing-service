import buildApp from "./app.ts";
import denoKv from "./databases/denoKv.ts";

await denoKv.get_or_init();

const app = buildApp();

Deno.serve(app.fetch);
