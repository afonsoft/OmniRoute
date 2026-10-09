// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_internal(parent) {
  const tag = parent.command("internal").description("Internal endpoints");
  tag.command("post-api-internal-codex-responses-ws")
    .description("POST internal › codex responses ws")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/internal/codex-responses-ws";
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
