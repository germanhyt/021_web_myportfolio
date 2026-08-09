export const CONTACT_EMAIL = "germanhuaytalla22@gmail.com";

export interface MailtoPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/** Builds a mailto URL with name, email, subject and message in the body. */
export function buildMailtoHref({
  name,
  email,
  subject,
  message,
}: MailtoPayload): string {
  const body = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    "",
    message,
  ].join("\n");

  const params = new URLSearchParams({
    subject: subject.trim(),
    body,
  });

  return `mailto:${CONTACT_EMAIL}?${params.toString()}`;
}

export function openMailto(payload: MailtoPayload): void {
  window.location.href = buildMailtoHref(payload);
}
