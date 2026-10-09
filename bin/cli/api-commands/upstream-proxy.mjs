// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_upstream_proxy(parent) {
  const tag = parent.command("upstream-proxy").description("Upstream proxy endpoints");
  tag.command("delete-api-upstream-proxy-provider-id-")
    .description("DELETE upstream proxy › <providerId>")
    .requiredOption("--provider-id <providerId>", "providerId path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/upstream-proxy/{providerId}";
      url = url.replaceAll("{providerId}", encodeURIComponent(opts.providerId ?? ""));
      const res = await apiFetch(url, { method: "DELETE", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-upstream-proxy-provider-id-")
    .description("GET upstream proxy › <providerId>")
    .requiredOption("--provider-id <providerId>", "providerId path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/upstream-proxy/{providerId}";
      url = url.replaceAll("{providerId}", encodeURIComponent(opts.providerId ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("put-api-upstream-proxy-provider-id-")
    .description("PUT upstream proxy › <providerId>")
    .requiredOption("--provider-id <providerId>", "providerId path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/upstream-proxy/{providerId}";
      url = url.replaceAll("{providerId}", encodeURIComponent(opts.providerId ?? ""));
      const res = await apiFetch(url, { method: "PUT", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
