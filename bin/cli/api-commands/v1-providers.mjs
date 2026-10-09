// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_v1_providers(parent) {
  const tag = parent.command("v1-providers").description("V1 Providers endpoints");
  tag.command("get-api-v1-providers-provider-limits")
    .description("GET providers › <provider> › limits")
    .requiredOption("--provider <provider>", "provider path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/providers/{provider}/limits";
      url = url.replaceAll("{provider}", encodeURIComponent(opts.provider ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("put-api-v1-providers-provider-limits")
    .description("PUT providers › <provider> › limits")
    .requiredOption("--provider <provider>", "provider path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/providers/{provider}/limits";
      url = url.replaceAll("{provider}", encodeURIComponent(opts.provider ?? ""));
      const res = await apiFetch(url, { method: "PUT", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
