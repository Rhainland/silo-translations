// D71: Apple's English fallback for an untranslated plural is selected by the app language's plural
// rules, so englishFor re-keys English to that language's categories.
import { test } from "node:test";
import assert from "node:assert/strict";
import { englishFor } from "../tools/gen/apple.ts";
import { analyze, TYPE, type MessageFormatElement } from "../tools/lib/icu.ts";

const text = (elements: MessageFormatElement[]) =>
  elements.map((e) => (e.type === TYPE.literal ? e.value : e.type === TYPE.pound ? "#" : `{${(e as { value: string }).value}}`)).join("");

function forms(message: string, cldr: string): Record<string, string> {
  const a = englishFor(analyze(message, true), cldr, "en");
  assert.equal(a.shape?.kind, "plural");
  return Object.fromEntries([...(a.shape as { forms: Map<string, MessageFormatElement[]> }).forms].map(([c, el]) => [c, text(el)]));
}

const PARTS = "{count, plural, one {# part} other {# parts}}";
const DELETE = "{count, plural, one {Delete download} other {Delete # downloads}}";

test("apple fallback: Spanish keeps one for 1 and uses other for many", () => {
  assert.deepEqual(forms(PARTS, "es"), { one: "# part", many: "# parts", other: "# parts" });
});

test("apple fallback: a category spanning English one and other takes the form that prints the count", () => {
  // French one is 0 and 1; English says "Delete 0 downloads" but "Delete download" for 1.
  assert.deepEqual(forms(DELETE, "fr"), { one: "Delete # downloads", many: "Delete # downloads", other: "Delete # downloads" });
  // Japanese has only other.
  assert.deepEqual(forms(DELETE, "ja"), { other: "Delete # downloads" });
});

test("apple fallback: Arabic one is English one; zero, two, few, many and other are English other", () => {
  assert.deepEqual(forms(PARTS, "ar"), { zero: "# parts", one: "# part", two: "# parts", few: "# parts", many: "# parts", other: "# parts" });
});

test("apple fallback: Czech many, which no whole number reaches, takes English other", () => {
  assert.deepEqual(forms(PARTS, "cs"), { one: "# part", few: "# parts", many: "# parts", other: "# parts" });
});

test("apple fallback: Russian one spans 1 and 21, and other (fractions only) is English other", () => {
  assert.deepEqual(forms(PARTS, "ru"), { one: "# parts", few: "# parts", many: "# parts", other: "# parts" });
});

test("apple fallback: a category no whole number reaches (Polish other) takes English other", () => {
  assert.deepEqual(forms(PARTS, "pl"), { one: "# part", few: "# parts", many: "# parts", other: "# parts" });
  assert.deepEqual(forms(DELETE, "pl"), { one: "Delete download", few: "Delete # downloads", many: "Delete # downloads", other: "Delete # downloads" });
});

test("apple fallback: Ukrainian other, which has no whole numbers, is English other", () => {
  // uk one is 1, 21, 31…, so it spans English one and other and takes the form that prints the count.
  assert.deepEqual(forms(PARTS, "uk"), { one: "# parts", few: "# parts", many: "# parts", other: "# parts" });
  assert.deepEqual(forms(DELETE, "uk"), { one: "Delete # downloads", few: "Delete # downloads", many: "Delete # downloads", other: "Delete # downloads" });
});

test("apple fallback: a non-plural message is unchanged", () => {
  const a = analyze("Cancel", true);
  assert.equal(englishFor(a, "ja", "en"), a);
});
