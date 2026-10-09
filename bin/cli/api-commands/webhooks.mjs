// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_webhooks(parent) {
  const tag = parent.command("webhooks").description("Webhooks endpoints");
  tag.command("get-api-webhooks")
    .description("GET webhooks")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/webhooks";
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-webhooks")
    .description("POST webhooks")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/webhooks";
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("delete-api-webhooks-id-")
    .description("DELETE webhooks › <id>")
    .requiredOption("--id <id>", "id path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/webhooks/{id}";
      url = url.replaceAll("{id}", encodeURIComponent(opts.id ?? ""));
      const res = await apiFetch(url, { method: "DELETE", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-webhooks-id-")
    .description("GET webhooks › <id>")
    .requiredOption("--id <id>", "id path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/webhooks/{id}";
      url = url.replaceAll("{id}", encodeURIComponent(opts.id ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("put-api-webhooks-id-")
    .description("PUT webhooks › <id>")
    .requiredOption("--id <id>", "id path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/webhooks/{id}";
      url = url.replaceAll("{id}", encodeURIComponent(opts.id ?? ""));
      const res = await apiFetch(url, { method: "PUT", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-webhooks-id-deliveries")
    .description("GET webhooks › <id> › deliveries")
    .requiredOption("--id <id>", "id path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/webhooks/{id}/deliveries";
      url = url.replaceAll("{id}", encodeURIComponent(opts.id ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-webhooks-id-test")
    .description("POST webhooks › <id> › test")
    .requiredOption("--id <id>", "id path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/webhooks/{id}/test";
      url = url.replaceAll("{id}", encodeURIComponent(opts.id ?? ""));
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-webhooks-validate-url")
    .description("POST webhooks › validate url")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/webhooks/validate-url";
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
