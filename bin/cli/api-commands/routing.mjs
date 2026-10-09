// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_routing(parent) {
  const tag = parent.command("routing").description("Routing endpoints");
  tag.command("get-api-routing-decisions-request-id-")
    .description("GET routing › decisions › <requestId>")
    .requiredOption("--request-id <requestId>", "requestId path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/routing/decisions/{requestId}";
      url = url.replaceAll("{requestId}", encodeURIComponent(opts.requestId ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
