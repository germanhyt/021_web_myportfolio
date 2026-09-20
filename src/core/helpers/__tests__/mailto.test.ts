import { describe, it, expect } from "vitest";
import { buildMailtoHref, CONTACT_EMAIL } from "../mailto";

describe("mailto helper", () => {
  it("should have correct contact email", () => {
    expect(CONTACT_EMAIL).toBe("germanhuaytalla22@gmail.com");
  });

  it("should construct valid mailto href with query params", () => {
    const payload = {
      name: "Juan Perez",
      email: "juan@example.com",
      subject: "Propuesta de Proyecto",
      message: "Hola Germán, me interesa conversar.",
    };

    const href = buildMailtoHref(payload);

    expect(href).toContain(`mailto:${CONTACT_EMAIL}?`);
    expect(href).toContain("subject=Propuesta+de+Proyecto");
    expect(href).toContain("Juan+Perez");
  });
});
