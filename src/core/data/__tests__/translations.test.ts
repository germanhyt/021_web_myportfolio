import { describe, it, expect } from "vitest";
import { translations } from "../translations";

describe("translations dictionary", () => {
  it("should have matching top-level keys for ES and EN", () => {
    const esKeys = Object.keys(translations.es).sort();
    const enKeys = Object.keys(translations.en).sort();
    expect(esKeys).toEqual(enKeys);
  });

  it("should have non-empty navigation translations", () => {
    expect(translations.es.nav.projects).toBe("Proyectos");
    expect(translations.en.nav.projects).toBe("Projects");
    expect(translations.es.nav.contactBtn).toBe("Contactar");
    expect(translations.en.nav.contactBtn).toBe("Contact");
  });

  it("should have hero translations array for typed text", () => {
    expect(Array.isArray(translations.es.hero.typed)).toBe(true);
    expect(Array.isArray(translations.en.hero.typed)).toBe(true);
    expect(translations.es.hero.typed.length).toBeGreaterThan(0);
  });
});
