let kv: Deno.Kv;

async function init() {
  if (!kv) {
    kv = await Deno.openKv();
  }
  return kv;
}

async function get() {
  return await init();
}

export default {
  init,
  get,
};
