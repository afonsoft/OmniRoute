// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_v1_models(parent) {
  const tag = parent.command("v1-models").description("V1 Models endpoints");
  tag.command("get-api-v1-models-model-")
    .description("GET models › <model>")
    .requiredOption("--model <model>", "model path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/models/{model}";
      url = url.replaceAll("{model}", encodeURIComponent(opts.model ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
