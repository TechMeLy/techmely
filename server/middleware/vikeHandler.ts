import type { MiddlewareHandler } from "hono";
import { getCookie, setCookie } from "hono/cookie";
import { renderPage } from "vike/server";
import { localeKey, localeMaxAge } from "#root/locales/locales.utils";
import { isMobileUserAgent } from "@techmely/es-toolkit";
import pkg from "../../package.json";
import { getLastGitCommitHash } from "@techmely/es-toolkit/getGitLastCommitHash";

export default function vikeMiddleware(): MiddlewareHandler<HonoEnv> {
  return async (c, next) => {
    const locale = getCookie(c, localeKey);
    const userAgent = c.req.header("user-agent") || "";
    const commitHash = await getLastGitCommitHash();

    const metadata: Partial<VikeMetadata> = {
      userAgent,
      [localeKey]: locale,
      isMobile: isMobileUserAgent(userAgent),
      ssr: true,
      stream: true,
      dataHeadHtml: {
        appVersion: pkg.version,
        appEnv: c.env.VITE_NODE_ENV || "development",
        commitHash,
      },
    };
    const pageContextInit = {
      urlOriginal: c.req.url,
      metadata,
    };

    if (!locale) {
      setCookie(c, localeKey, "en", {
        domain: c.env.VITE_COOKIE_DOMAIN,
        secure: true,
        httpOnly: true,
        maxAge: localeMaxAge,
      });
    }
    const pageContext = await renderPage(pageContextInit);
    const response = pageContext.httpResponse;
    if (!response) return next();
    const { getBody, statusCode, headers, earlyHints } = response;

    if ("writeEarlyHints" in c.res)
      (c.res.writeEarlyHints as any)({
        link: earlyHints.map((e) => e.earlyHintLink),
      });

    // const { readable, writable } = new TransformStream();
    // pipe(writable);

    // return new Response(readable, {
    //   status: statusCode,
    //   headers: headers,
    // });
    for (const [name, value] of headers) {
      c.header(name, value);
    }
    c.status(statusCode);
    const body = await getBody();
    return c.body(body);
  };
}
