// AUTO-GENERATED from docs/openapi.yaml. Do not edit.
import { apiFetch } from "../api.mjs";
import { emit } from "../output.mjs";
import { readFileSync } from "node:fs";

export function register_evals(parent) {
  const tag = parent.command("evals").description("Evals endpoints");
  tag.command("post-api-evals-suites")
    .description("POST evals › suites")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/evals/suites";
      const res = await apiFetch(url, { method: "POST", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("delete-api-evals-suites-suite-id-")
    .description("DELETE evals › suites › <suiteId>")
    .requiredOption("--suite-id <suiteId>", "suiteId path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/evals/suites/{suiteId}";
      url = url.replaceAll("{suiteId}", encodeURIComponent(opts.suiteId ?? ""));
      const res = await apiFetch(url, { method: "DELETE", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("get-api-evals-suites-suite-id-")
    .description("GET evals › suites › <suiteId>")
    .requiredOption("--suite-id <suiteId>", "suiteId path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/evals/suites/{suiteId}";
      url = url.replaceAll("{suiteId}", encodeURIComponent(opts.suiteId ?? ""));
      const res = await apiFetch(url, { method: "GET", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
  tag.command("put-api-evals-suites-suite-id-")
    .description("PUT evals › suites › <suiteId>")
    .requiredOption("--suite-id <suiteId>", "suiteId path parameter")
    .action(async (opts, cmd) => {
      const gOpts = cmd.optsWithGlobals();
      let url = "/api/evals/suites/{suiteId}";
      url = url.replaceAll("{suiteId}", encodeURIComponent(opts.suiteId ?? ""));
      const res = await apiFetch(url, { method: "PUT", baseUrl: gOpts.baseUrl, apiKey: gOpts.apiKey });
      const data = res.ok ? await res.json() : await res.text();
      emit(data, gOpts);
    });
}
