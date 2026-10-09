// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_v1_omniroutecatchall(parent) {
  const tag = parent.command("v1-omniroutecatchall").description("V1 OmnirouteCatchAll endpoints");
  tag.command("delete-api-v1-omniroute-catch-all-")
    .description("DELETE <omnirouteCatchAll>")
    .requiredOption("--omniroute-catch-all <omnirouteCatchAll>", "omnirouteCatchAll path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/{omnirouteCatchAll}";
      url = url.replaceAll("{omnirouteCatchAll}", encodeURIComponent(opts.omnirouteCatchAll ?? ""));
      const res = await apiFetch(url, { method: "DELETE", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-v1-omniroute-catch-all-")
    .description("GET <omnirouteCatchAll>")
    .requiredOption("--omniroute-catch-all <omnirouteCatchAll>", "omnirouteCatchAll path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/{omnirouteCatchAll}";
      url = url.replaceAll("{omnirouteCatchAll}", encodeURIComponent(opts.omnirouteCatchAll ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("patch-api-v1-omniroute-catch-all-")
    .description("PATCH <omnirouteCatchAll>")
    .requiredOption("--omniroute-catch-all <omnirouteCatchAll>", "omnirouteCatchAll path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/{omnirouteCatchAll}";
      url = url.replaceAll("{omnirouteCatchAll}", encodeURIComponent(opts.omnirouteCatchAll ?? ""));
      const res = await apiFetch(url, { method: "PATCH", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-v1-omniroute-catch-all-")
    .description("POST <omnirouteCatchAll>")
    .requiredOption("--omniroute-catch-all <omnirouteCatchAll>", "omnirouteCatchAll path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/{omnirouteCatchAll}";
      url = url.replaceAll("{omnirouteCatchAll}", encodeURIComponent(opts.omnirouteCatchAll ?? ""));
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("put-api-v1-omniroute-catch-all-")
    .description("PUT <omnirouteCatchAll>")
    .requiredOption("--omniroute-catch-all <omnirouteCatchAll>", "omnirouteCatchAll path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/{omnirouteCatchAll}";
      url = url.replaceAll("{omnirouteCatchAll}", encodeURIComponent(opts.omnirouteCatchAll ?? ""));
      const res = await apiFetch(url, { method: "PUT", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
