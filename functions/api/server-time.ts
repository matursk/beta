export const onRequestGet: PagesFunction = async () => {
  try {
    const now = new Date();
    return new Response(
      JSON.stringify({ now: now.toISOString() }),
      { status: 200, headers: { "content-type": "application/json; charset=utf-8" } }
    );
  } catch (e: any) {
    return new Response(
      JSON.stringify({ error: e?.message || "error" }),
      { status: 500, headers: { "content-type": "application/json; charset=utf-8" } }
    );
  }
};


