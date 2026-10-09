// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_free_provider_rankings(parent) {
  const tag = parent.command("free-provider-rankings").description("Free provider rankings endpoints");
  tag.command("get-api-free-provider-rankings")
    .description("GET free provider rankings")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/free-provider-rankings";
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
