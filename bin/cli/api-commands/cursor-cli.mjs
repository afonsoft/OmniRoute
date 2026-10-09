// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_cursor_cli(parent) {
  const tag = parent.command("cursor-cli").description("Cursor cli endpoints");
  tag.command("get-api-cursor-cli-path-")
    .description("GET cursor cli › <path>")
    .requiredOption("--path <path>", "path path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/cursor-cli/{path}";
      url = url.replaceAll("{path}", encodeURIComponent(opts.path ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-cursor-cli-path-")
    .description("POST cursor cli › <path>")
    .requiredOption("--path <path>", "path path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/cursor-cli/{path}";
      url = url.replaceAll("{path}", encodeURIComponent(opts.path ?? ""));
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
