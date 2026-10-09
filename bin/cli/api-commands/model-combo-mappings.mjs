// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_model_combo_mappings(parent) {
  const tag = parent.command("model-combo-mappings").description("Model combo mappings endpoints");
  tag.command("get-api-model-combo-mappings")
    .description("GET model combo mappings")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/model-combo-mappings";
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-model-combo-mappings")
    .description("POST model combo mappings")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/model-combo-mappings";
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("delete-api-model-combo-mappings-id-")
    .description("DELETE model combo mappings › <id>")
    .requiredOption("--id <id>", "id path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/model-combo-mappings/{id}";
      url = url.replaceAll("{id}", encodeURIComponent(opts.id ?? ""));
      const res = await apiFetch(url, { method: "DELETE", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-model-combo-mappings-id-")
    .description("GET model combo mappings › <id>")
    .requiredOption("--id <id>", "id path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/model-combo-mappings/{id}";
      url = url.replaceAll("{id}", encodeURIComponent(opts.id ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("put-api-model-combo-mappings-id-")
    .description("PUT model combo mappings › <id>")
    .requiredOption("--id <id>", "id path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/model-combo-mappings/{id}";
      url = url.replaceAll("{id}", encodeURIComponent(opts.id ?? ""));
      const res = await apiFetch(url, { method: "PUT", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
