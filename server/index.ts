import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { timing } from "hono/timing";

import { commonContext, secureHeadersMiddleware } from "@techmely/hono";
import { safeParse } from "valibot";
import { appRuntimeEnvSchema } from "./helpers/runtimeEnv";
import firebaseAuthMiddleware from "./middleware/firebaseAuthHandler";
import { telefuncMiddleware } from "./middleware/telefuncHandler";
import vikeMiddleware from "./middleware/vikeHandler";
import { sessionRouter } from "./router/session";

const isProd = Bun.env.NODE_ENV === "production";
const app = new Hono<HonoEnv>();
app.use(commonContext());
app.use(timing());
app.use(secureHeadersMiddleware());
app.use(firebaseAuthMiddleware());

if (isProd) {
  app.use("/assets/*", serveStatic({ root: "dist/client/" }));
}

app.post("/_telefunc", telefuncMiddleware());

app.route("/api/session", sessionRouter);

app.all("*", vikeMiddleware());

/*

 * Bun currently not support CompressionStream yet
 * @see https://github.com/oven-sh/bun/issues/159
 */
// app.use(compress());

app.get("/.well-know/security", (c) => {
  // const appPath = isProd ? rootPath : path.resolve(dirname, "..");

  // const defaultAppleDeveloper = await readFile(path.resolve(appPath, "public/apple-developer.txt"));
  return c.text("well-know security");
});

const port = Bun.env.PORT || 3000;

export default {
  port,
  fetch(req, server) {
    const parsedEnv = safeParse(appRuntimeEnvSchema, Bun.env);
    if (!parsedEnv.success) {
      return Response.json(
        {
          code: "BAD_ENVIRONMENT",
          message: "Some environment variables are missing or are invalid",
          errors: parsedEnv.issues,
        },
        { status: 500 },
      );
    }
    return app.fetch(req, { IP: server.requestIP(req), ...parsedEnv.output });
  },
};
