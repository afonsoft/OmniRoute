// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_v1_responses(parent) {
  const tag = parent.command("v1-responses").description("V1 Responses endpoints");
  tag.command("post-api-v1-responses-path-")
    .description("POST responses › <path>")
    .requiredOption("--path <path>", "path path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/responses/{path}";
      url = url.replaceAll("{path}", encodeURIComponent(opts.path ?? ""));
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
