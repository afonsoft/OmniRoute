// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_v1_auto_combo(parent) {
  const tag = parent.command("v1-auto-combo").description("V1 Auto-combo endpoints");
  tag.command("get-api-v1-auto-combo-channel-candidates")
    .description("GET auto combo › <channel> › candidates")
    .requiredOption("--channel <channel>", "channel path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/auto-combo/{channel}/candidates";
      url = url.replaceAll("{channel}", encodeURIComponent(opts.channel ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
