// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_v1_files(parent) {
  const tag = parent.command("v1-files").description("V1 Files endpoints");
  tag.command("get-api-v1-files")
    .description("GET files")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/files";
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-v1-files")
    .description("POST files")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/files";
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("delete-api-v1-files-id-")
    .description("DELETE files › <id>")
    .requiredOption("--id <id>", "id path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/files/{id}";
      url = url.replaceAll("{id}", encodeURIComponent(opts.id ?? ""));
      const res = await apiFetch(url, { method: "DELETE", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-v1-files-id-")
    .description("GET files › <id>")
    .requiredOption("--id <id>", "id path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/files/{id}";
      url = url.replaceAll("{id}", encodeURIComponent(opts.id ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-v1-files-id-content")
    .description("GET files › <id> › content")
    .requiredOption("--id <id>", "id path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/files/{id}/content";
      url = url.replaceAll("{id}", encodeURIComponent(opts.id ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
