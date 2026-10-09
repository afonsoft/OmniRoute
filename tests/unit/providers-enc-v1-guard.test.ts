/**
 * Regression guard for #15930: a credential blob that already carries the
 * `enc:v1:` prefix but was produced by a DIFFERENT tool (or a different
 * STORAGE_ENCRYPTION_KEY) must be rejected at the door — encrypt() stores
 * prefixed values verbatim, so a foreign blob would persist undecryptable and
 * fail on first use. Both write paths (POST create + PATCH update) carry the
 * same looksEncrypted()+decrypt() guard.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const POST_ROUTE = path.join(process.cwd(), "src/app/api/providers/route.ts");
const PATCH_ROUTE = path.join(process.cwd(), "src/app/api/providers/[id]/route.ts");

test("POST /api/providers rejects foreign enc:v1: blobs (#15930)", () => {
  const src = fs.readFileSync(POST_ROUTE, "utf8");
  assert.match(
    src,
    /looksEncrypted\(apiKey\)\s*&&\s*decrypt\(apiKey,\s*\{\s*quiet:\s*true\s*\}\)\s*==\s*null/,
    "POST must reject an enc:v1: apiKey that this deployment cannot decrypt"
  );
});

test("PATCH /api/providers/[id] rejects foreign enc:v1: blobs (#15930)", () => {
  const src = fs.readFileSync(PATCH_ROUTE, "utf8");
  assert.match(
    src,
    /looksEncrypted\(apiKey\)\s*&&\s*decrypt\(apiKey,\s*\{\s*quiet:\s*true\s*\}\)\s*==\s*null/,
    "PATCH must reject an enc:v1: apiKey that this deployment cannot decrypt"
  );
});

test("encrypt() still stores enc:v1: values verbatim — the invariant the guard compensates for", async () => {
  const { encrypt } = await import("../../src/lib/db/encryption.ts");
  const foreign = "enc:v1:deadbeef:c0ffee:bad0";
  assert.equal(encrypt(foreign), foreign, "prefixed input is passed through unchanged");
});
