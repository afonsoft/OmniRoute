// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_v1_vscode(parent) {
  const tag = parent.command("v1-vscode").description("V1 Vscode endpoints");
  tag.command("get-api-v1-vscode-token-")
    .description("GET vscode › <token>")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/{token}";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-v1-vscode-token-api-chat")
    .description("POST vscode › <token> › api › chat")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/{token}/api/chat";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-v1-vscode-token-api-show")
    .description("POST vscode › <token> › api › show")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/{token}/api/show";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-v1-vscode-token-api-tags")
    .description("GET vscode › <token> › api › tags")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/{token}/api/tags";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-v1-vscode-token-api-version")
    .description("GET vscode › <token> › api › version")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/{token}/api/version";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-v1-vscode-token-chat-completions")
    .description("POST vscode › <token> › chat › completions")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/{token}/chat/completions";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-v1-vscode-token-combos")
    .description("GET vscode › <token> › combos")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/{token}/combos";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-v1-vscode-token-models")
    .description("GET vscode › <token> › models")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/{token}/models";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-v1-vscode-token-responses")
    .description("POST vscode › <token> › responses")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/{token}/responses";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-v1-vscode-token-v1-chat-completions")
    .description("POST vscode › <token> › v1 › chat › completions")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/{token}/v1/chat/completions";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-v1-vscode-token-v1-models")
    .description("GET vscode › <token> › v1 › models")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/{token}/v1/models";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-v1-vscode-combos-token-slug-")
    .description("GET vscode › combos › <token> › <{slug>}")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/combos/{token}/{{slug}}";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-v1-vscode-combos-token-slug-")
    .description("POST vscode › combos › <token> › <{slug>}")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/combos/{token}/{{slug}}";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-v1-vscode-raw-token-")
    .description("GET vscode › raw › <token>")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/raw/{token}";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-v1-vscode-raw-token-api-chat")
    .description("POST vscode › raw › <token> › api › chat")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/raw/{token}/api/chat";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-v1-vscode-raw-token-api-show")
    .description("POST vscode › raw › <token> › api › show")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/raw/{token}/api/show";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-v1-vscode-raw-token-api-tags")
    .description("GET vscode › raw › <token> › api › tags")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/raw/{token}/api/tags";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-v1-vscode-raw-token-api-version")
    .description("GET vscode › raw › <token> › api › version")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/raw/{token}/api/version";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-v1-vscode-raw-token-chat-completions")
    .description("POST vscode › raw › <token> › chat › completions")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/raw/{token}/chat/completions";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-v1-vscode-raw-token-combos")
    .description("GET vscode › raw › <token> › combos")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/raw/{token}/combos";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-v1-vscode-raw-token-models")
    .description("GET vscode › raw › <token> › models")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/raw/{token}/models";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-v1-vscode-raw-token-responses")
    .description("POST vscode › raw › <token> › responses")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/raw/{token}/responses";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("post-api-v1-vscode-raw-token-v1-chat-completions")
    .description("POST vscode › raw › <token> › v1 › chat › completions")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/raw/{token}/v1/chat/completions";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-v1-vscode-raw-token-v1-models")
    .description("GET vscode › raw › <token> › v1 › models")
    .requiredOption("--token <token>", "token path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/vscode/raw/{token}/v1/models";
      url = url.replaceAll("{token}", encodeURIComponent(opts.token ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
