// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_middleware(parent) {
  const tag = parent.command("middleware").description("Middleware endpoints");
  tag.command("get-api-middleware-hooks")
    .description("GET middleware › hooks")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/middleware/hooks";
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-middleware-hooks")
    .description("POST middleware › hooks")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/middleware/hooks";
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("delete-api-middleware-hooks-name-")
    .description("DELETE middleware › hooks › <name>")
    .requiredOption("--name <name>", "name path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/middleware/hooks/{name}";
      url = url.replaceAll("{name}", encodeURIComponent(opts.name ?? ""));
      const res = await apiFetch(url, { method: "DELETE", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-middleware-hooks-name-")
    .description("GET middleware › hooks › <name>")
    .requiredOption("--name <name>", "name path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/middleware/hooks/{name}";
      url = url.replaceAll("{name}", encodeURIComponent(opts.name ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("put-api-middleware-hooks-name-")
    .description("PUT middleware › hooks › <name>")
    .requiredOption("--name <name>", "name path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/middleware/hooks/{name}";
      url = url.replaceAll("{name}", encodeURIComponent(opts.name ?? ""));
      const res = await apiFetch(url, { method: "PUT", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
