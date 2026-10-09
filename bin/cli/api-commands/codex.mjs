// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_codex(parent) {
  const tag = parent.command("codex").description("Codex endpoints");
  tag.command("get-api-codex-connect-token-")
    .description("GET codex › connect › <token>")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/codex/connect/{token}";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-codex-connect-token-")
    .description("POST codex › connect › <token>")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/codex/connect/{token}";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
