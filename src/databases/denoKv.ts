let kv: Deno.Kv | null = null;

async function get_or_init(): Promise<Deno.Kv> {
  if (!kv) {
    kv = await Deno.openKv();
  }
  return kv;
}

export default {
  get_or_init,
};
