// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_v1_video_bridge(parent) {
  const tag = parent.command("v1-video-bridge").description("V1 Video-bridge endpoints");
  tag.command("delete-api-v1-video-bridge-drilldown")
    .description("DELETE video bridge › drilldown")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/video-bridge/drilldown";
      const res = await apiFetch(url, { method: "DELETE", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-v1-video-bridge-drilldown")
    .description("GET video bridge › drilldown")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/v1/video-bridge/drilldown";
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
