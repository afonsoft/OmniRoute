// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_omnirouteapicatchall(parent) {
  const tag = parent.command("omnirouteapicatchall").description("OmnirouteApiCatchAll endpoints");
  tag.command("delete-api-omniroute-api-catch-all-")
    .description("DELETE <omnirouteApiCatchAll>")
    .requiredOption("--omniroute-api-catch-all <omnirouteApiCatchAll>", "omnirouteApiCatchAll path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/{omnirouteApiCatchAll}";
      url = url.replaceAll("{omnirouteApiCatchAll}", encodeURIComponent(opts.omnirouteApiCatchAll ?? ""));
      const res = await apiFetch(url, { method: "DELETE", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-omniroute-api-catch-all-")
    .description("GET <omnirouteApiCatchAll>")
    .requiredOption("--omniroute-api-catch-all <omnirouteApiCatchAll>", "omnirouteApiCatchAll path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/{omnirouteApiCatchAll}";
      url = url.replaceAll("{omnirouteApiCatchAll}", encodeURIComponent(opts.omnirouteApiCatchAll ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("patch-api-omniroute-api-catch-all-")
    .description("PATCH <omnirouteApiCatchAll>")
    .requiredOption("--omniroute-api-catch-all <omnirouteApiCatchAll>", "omnirouteApiCatchAll path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/{omnirouteApiCatchAll}";
      url = url.replaceAll("{omnirouteApiCatchAll}", encodeURIComponent(opts.omnirouteApiCatchAll ?? ""));
      const res = await apiFetch(url, { method: "PATCH", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-omniroute-api-catch-all-")
    .description("POST <omnirouteApiCatchAll>")
    .requiredOption("--omniroute-api-catch-all <omnirouteApiCatchAll>", "omnirouteApiCatchAll path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/{omnirouteApiCatchAll}";
      url = url.replaceAll("{omnirouteApiCatchAll}", encodeURIComponent(opts.omnirouteApiCatchAll ?? ""));
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("put-api-omniroute-api-catch-all-")
    .description("PUT <omnirouteApiCatchAll>")
    .requiredOption("--omniroute-api-catch-all <omnirouteApiCatchAll>", "omnirouteApiCatchAll path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/{omnirouteApiCatchAll}";
      url = url.replaceAll("{omnirouteApiCatchAll}", encodeURIComponent(opts.omnirouteApiCatchAll ?? ""));
      const res = await apiFetch(url, { method: "PUT", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
