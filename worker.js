export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/callback") {
      return new Response("OK", { status: 200 });
    }
    return env.ASSETS.fetch(request);
  }
};
