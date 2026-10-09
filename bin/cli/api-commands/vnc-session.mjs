// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_vnc_session(parent) {
  const tag = parent.command("vnc-session").description("Vnc session endpoints");
  tag.command("get-api-vnc-session")
    .description("GET vnc session")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/vnc-session";
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("delete-api-vnc-session-params-")
    .description("DELETE vnc session › <params>")
    .requiredOption("--params <params>", "params path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/vnc-session/{params}";
      url = url.replaceAll("{params}", encodeURIComponent(opts.params ?? ""));
      const res = await apiFetch(url, { method: "DELETE", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-vnc-session-params-")
    .description("GET vnc session › <params>")
    .requiredOption("--params <params>", "params path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/vnc-session/{params}";
      url = url.replaceAll("{params}", encodeURIComponent(opts.params ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-vnc-session-params-")
    .description("POST vnc session › <params>")
    .requiredOption("--params <params>", "params path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/vnc-session/{params}";
      url = url.replaceAll("{params}", encodeURIComponent(opts.params ?? ""));
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
