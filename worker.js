export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Redirect www to non-www (301 permanent)
    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.replace("www.", "");
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/callback") {
      return new Response("OK", { status: 200 });
    }

    return env.ASSETS.fetch(request);
  }
};
